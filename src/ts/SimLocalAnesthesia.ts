import * as ConstVal from "./ConstVal";
import { Labels } from "./Labels";
import Parameter from "./Parameter";
import Draw from "./Draw";
import TimerStorage from "./TimerStorage";
import {
    getCircleNumber,
    getResponse
} from "./SimLocalAnesthesia_func";

import {
    getStorageSpeed,
    setStorageSpeed,
    getStorageLang,
    setStorageLang,
    clearStorage,
    clearStorageTimer
} from "./Storage"


type ClickEvent = MouseEvent | TouchEvent;
type Position = [number, number];


export default class SimLocalAnesthesia {
    private lang: string;
    private timer: TimerStorage;
    private param: Parameter;
    private elem_newexp: HTMLInputElement;
    private elem_start: HTMLInputElement;
    private elem_quit: HTMLInputElement;
    private elem_speed_msg: HTMLElement;
    private elem_timer: HTMLElement;
    private elem_response: HTMLElement;
    private elem_lang: HTMLFormElement;
    private elem_slider: HTMLSelectElement;
    private elem_canvas: HTMLCanvasElement;

    constructor() {
        // objects for elements
        this.elem_newexp = <HTMLInputElement>document.getElementById("newexp");
        this.elem_start = <HTMLInputElement>document.getElementById("start");
        this.elem_quit = <HTMLInputElement>document.getElementById("quit");

        this.elem_speed_msg = <HTMLElement>document.getElementById("speed_msg");
        this.elem_timer = <HTMLElement>document.getElementById("timer");
        this.elem_response = <HTMLElement>document.getElementById("response");

        this.elem_lang = <HTMLFormElement>document.getElementById("select-lang");
        this.elem_slider = <HTMLSelectElement>document.getElementById("slider");
        this.elem_canvas = <HTMLCanvasElement>document.getElementById("canvas");

        // set canvas
        const context = this.elem_canvas.getContext("2d")!;
        const img = new Image();

        // display image
        context.drawImage(img, 0, 0, 481, 268);
        // draw circles
        ConstVal.CENTERS.forEach(function(center) {
            Draw.drawCircle(context, center,
                            ConstVal.Rnormal, ConstVal.RnormalCenter, "black")
        });

        // PC or tablet
        const clickEventType = (window.ontouchstart === undefined) ? "mousedown" : "touchstart";

        // add EventListener to buttons, slider, timer and canvas
        this.elem_newexp.addEventListener(clickEventType,
            () => { this.clickNewExp() }, false);
        this.elem_start.addEventListener(clickEventType,
            () => { this.clickStart() }, false);
        this.elem_quit.addEventListener(clickEventType,
            () => { this.clickQuit() }, false);

        this.elem_lang.addEventListener("change",
            () => { this.toggleLang() }, false);
        this.elem_slider.addEventListener("input",
            () => { this.changeSpeed() }, false);
        this.elem_canvas.addEventListener(clickEventType,
            (e: ClickEvent) => {
                this.clickCanvas(this.elem_canvas, context, e)
            }, false); // main function

        // set Timer and Parameters
        this.timer = new TimerStorage();
        this.param = new Parameter();

        // set & restore Parameters
        this.elem_slider.value = getStorageSpeed();
        this.lang = getStorageLang();
        this.elem_lang["la"].value = this.lang;
        this.setLang();

        // change buttons status (color)
        this.toggleButton();

        // display timer
        this.elem_timer.textContent = "0:00:00"
    }

    start() {
        // display timer
        this.displayTimer();
    }

    //////////////////////////////////////////////////////////////////
    // Methods
    //////////////////////////////////////////////////////////////////

    //////////////////////////////////
    // main function
    //   mousedown in canvas area
    //   get circle number
    //   get and display response
    //////////////////////////////////
    private clickCanvas(canvas: HTMLCanvasElement,
                        context: CanvasRenderingContext2D,
                        e: ClickEvent): void {
        if (!this.timer.isRunning) { return }

        // running
        // get clicked position and circle number (site)
        const pos = this.getClickedPosition(canvas, e);
        const site = getCircleNumber(pos, ConstVal.CENTERS, ConstVal.Rnormal);

        if (site < 0) { return }
        // When clicked in circles,
        //  get response from drug (site), time and parameters
        const isResponse = getResponse(site,
                                       this.timer.getMinute,
                                       this.param.getParameter);

        // display response
        if (isResponse) {
            // effects with response
            Draw.fillRect(context, ConstVal.CENTERS[site], ConstVal.Rrespond);
            Draw.drawCircle(context, ConstVal.CENTERS[site],
                            ConstVal.Rrespond, ConstVal.RrespondCenter, "red");
            this.elem_response.textContent = Labels["with_response"][this.lang];
            this.elem_response.style.color = "red";
            this.elem_timer.style.color = "red";

            setTimeout(() => {
                Draw.fillRect(context, ConstVal.CENTERS[site], ConstVal.Rrespond);
                Draw.drawCircle(context, ConstVal.CENTERS[site],
                                ConstVal.Rnormal, ConstVal.RnormalCenter, "black");
                this.elem_response.textContent = "";
                this.elem_timer.style.color = "black";
            }, 300);
        } else {
            // effects without response
            this.elem_response.textContent = Labels["without_response"][this.lang];
            this.elem_response.style.color = "black";
            setTimeout(() => {
                this.elem_response.textContent = "";
            }, 300);
        }
    }

    //////////////////////////////////
    // select language
    //////////////////////////////////
    private toggleLang(): void {
        this.lang = this.elem_lang["la"].value;
        this.setLang()
        setStorageLang(this.lang)
    }

    // change labels
    private setLang(): void {
        // start/restart/pause button
        // let lab;
        let id: string;
        if (this.timer.isRunning) {
            id = "pause";
        } else {
            if (this.timer.getTime == 0) {
                id = "start";
            } else {
                id = "restart";
            }
        }
        this.elem_start.textContent = Labels[id][this.lang];
        this.elem_newexp.textContent = Labels["newexp"][this.lang];
        this.elem_quit.textContent = Labels["quit"][this.lang];
        this.toggleButton();

        // slider
        this.printSpeed(this.elem_slider.value)
    }

    //////////////////////////////////
    // buttons
    //////////////////////////////////
    // push New Experiment button
    private clickNewExp(): void {
        if (this.timer.isRunning) { return }
        // in pause
        const check = window.confirm(Labels["msg_newexp"][this.lang]);
        if (check) {
            this.timer.clickNewExp();
            this.param.setInitParameter();
            this.elem_slider.value = "1";
            this.setLang()
            setStorageSpeed(this.elem_slider.value);
        }
    }

    // push Start/Restart/Pause button
    private clickStart(): void {
        // When this.param is absent (after clickQuit),
        //  generate new parameters
        this.param = new Parameter();

        this.timer.clickStart();
        this.setLang()
        this.toggleButton();
    }

    // push Quit button
    private clickQuit(): void {
        if (this.timer.isRunning) { return }
        // in pause
        const check = window.confirm(Labels["msg_quit"][this.lang]);
        if (check) {
            window.alert(Labels["msg_close"][this.lang]);
            this.elem_start.textContent = Labels["start"][this.lang];
            this.timer.clickQuit();
            this.elem_slider.value = "1";
            this.changeSpeed();
            clearStorage();
            clearStorageTimer();
        }
    }

    // change buttons status (color)
    private toggleButton(): void {
        if (this.timer.isRunning) {
            this.elem_start.style.background = "springgreen";
            this.elem_newexp.style.color = "gray";
            this.elem_quit.style.color = "gray";
        } else {
            this.elem_start.style.background = "cyan";
            this.elem_newexp.style.color = "black";
            this.elem_quit.style.color = "black";
        }
    }

    //////////////////////////////////
    // change slider (speed)
    //////////////////////////////////
    private changeSpeed(): void {
        let speed: string = this.elem_slider.value;
        this.printSpeed(speed)
        this.timer.changeSpeed(Number(speed));
        setStorageSpeed(speed);
    }

    private printSpeed(speed: string): void {
        this.elem_speed_msg.textContent = speed + Labels["speed"][this.lang];
    }

    //////////////////////////////////
    //
    // function for simulation
    // Get position in canvas
    //
    // Args:
    //   canvas: HTMLCanvasElement
    //   e: ClickEvent
    // Return:
    //   [int:x, int:y]: Position
    //
    //////////////////////////////////
    private getClickedPosition(canvas: HTMLCanvasElement,
                               e: ClickEvent): Position {
        let touch;
        const borderWidth = 0;

        // https://cpoint-lab.co.jp/article/202111/21267/
        const isTouchEvent = (e: ClickEvent):
            e is TouchEvent => e.type === 'touchstart';

        if (isTouchEvent(e)) {
            touch = e.touches[0] || e.changedTouches[0];
        } else {
            touch = e;
        }

        const e_target = <Element>e.target!;
        const rect = e_target.getBoundingClientRect();

        const x = touch.clientX - rect.left - borderWidth;
        const y = touch.clientY - rect.top - borderWidth;

        // ratio of display size and real size of canvas
        const scaleWidth = canvas.clientWidth / canvas.width;
        const scaleHeight = canvas.clientHeight / canvas.height;
        // convert position in browser to that in canvas
        const canvasX = Math.floor(x / scaleWidth);
        const canvasY = Math.floor(y / scaleHeight);

        return [canvasX, canvasY];
    }


    //////////////////////////////////
    // display timer
    //////////////////////////////////
    displayTimer(): void {
        this.elem_timer.textContent = this.timer.getTimeStr;
        requestAnimationFrame(() => { this.displayTimer() });
    }
}

