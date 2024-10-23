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


// PC or tablet (Click or tap event)
type ClickEvent = MouseEvent | TouchEvent;
const clickEventType = (window.ontouchstart === undefined) ? "mousedown" : "touchstart";

type Position = [number, number];


// variables for elements in HTML
let elem_newexp: HTMLInputElement;
let elem_start: HTMLInputElement;
let elem_quit: HTMLInputElement;
let elem_speed_msg: HTMLElement;
let elem_timer: HTMLElement;
let elem_response: HTMLElement;
let elem_lang: HTMLFormElement;
let elem_slider: HTMLSelectElement;
let elem_canvas: HTMLCanvasElement;


export default class SimLocalAnesthesia {
    private lang: string;
    private timer: TimerStorage;
    private param: Parameter;

    constructor() {
        // set elements in HTML
        setElements();

        // set canvas
        const context = elem_canvas.getContext("2d")!;
        const img = new Image();

        // display image
        context.drawImage(img, 0, 0, 481, 268);
        // draw circles
        ConstVal.CENTERS.forEach(function(center) {
            Draw.drawCircle(context, center,
                            ConstVal.Rnormal, ConstVal.RnormalCenter, "black")
        });

        // add EventListener to buttons
        elem_newexp.addEventListener(clickEventType,
            () => { this.clickNewExp() }, false);
        elem_start.addEventListener(clickEventType,
            () => { this.clickStart() }, false);
        elem_quit.addEventListener(clickEventType,
            () => { this.clickQuit() }, false);

        // add EventListener to droplist, slider and canvas
        elem_lang.addEventListener("change",
            () => { this.toggleLang() }, false);
        elem_slider.addEventListener("input",
            () => { this.changeSpeed() }, false);
        elem_canvas.addEventListener(clickEventType,
            (e: ClickEvent) => {
                this.clickCanvas(elem_canvas, context, e)
            }, false); // main function

        // set Timer and Parameters
        this.timer = new TimerStorage();
        this.param = new Parameter();

        // set & restore Parameters
        elem_slider.value = getStorageSpeed();
        this.lang = getStorageLang();
        elem_lang["la"].value = this.lang;
        this.setLang();

        // change buttons status (color)
        this.toggleButton();

        // display timer
        elem_timer.textContent = "0:00:00"
    }  // constructor

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
        const pos = getClickedPosition(canvas, e);
        const site = getCircleNumber(pos, ConstVal.CENTERS, ConstVal.Rnormal);

        if (site < 0) { return }
        // When clicked in circles,
        //  get response from drug (site), time and parameters
        const isResponse = getResponse(site,
                                       this.timer.getMinute,
                                       this.param.getParameter);
        // display response
        responseDisplay(context, isResponse, site, this.lang, 300);
    }

    //////////////////////////////////
    // select language
    //////////////////////////////////
    private toggleLang(): void {
        this.lang = elem_lang["la"].value;
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
        elem_start.textContent = Labels[id][this.lang];
        elem_newexp.textContent = Labels["newexp"][this.lang];
        elem_quit.textContent = Labels["quit"][this.lang];
        this.toggleButton();

        // slider
        this.printSpeed(elem_slider.value)
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
            this.timer.actionNewExp();
            this.param.setInitParameter();
            elem_slider.value = "1";
            this.setLang()
            setStorageSpeed(elem_slider.value);
        }
    }

    // push Start/Restart/Pause button
    private clickStart(): void {
        // When this.param is absent (after clickQuit),
        //  generate new parameters
        this.param = new Parameter();

        this.timer.actionStart();
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
            elem_start.textContent = Labels["start"][this.lang];
            this.timer.actionQuit();
            elem_slider.value = "1";
            this.changeSpeed();
            clearStorage();
            clearStorageTimer();
        }
    }

    // change buttons status (color)
    private toggleButton(): void {
        if (this.timer.isRunning) {
            elem_start.style.background = "springgreen";
            elem_newexp.style.color = "gray";
            elem_quit.style.color = "gray";
        } else {
            elem_start.style.background = "cyan";
            elem_newexp.style.color = "black";
            elem_quit.style.color = "black";
        }
    }

    //////////////////////////////////
    // change slider (speed)
    //////////////////////////////////
    private changeSpeed(): void {
        let speed: string = elem_slider.value;
        this.printSpeed(speed)
        this.timer.changeSpeed(Number(speed));
        setStorageSpeed(speed);
    }

    private printSpeed(speed: string): void {
        elem_speed_msg.textContent = speed + Labels["speed"][this.lang];
    }

    //////////////////////////////////
    // display timer
    //////////////////////////////////
    displayTimer(): void {
        elem_timer.textContent = this.timer.getTimeStr;
        requestAnimationFrame(() => { this.displayTimer() });
    }
}



//////////////////////////////////
// Set elements
//////////////////////////////////
function setElements(): void {
    elem_newexp = <HTMLInputElement>document.getElementById("newexp");
    elem_start = <HTMLInputElement>document.getElementById("start");
    elem_quit = <HTMLInputElement>document.getElementById("quit");

    elem_speed_msg = <HTMLElement>document.getElementById("speed_msg");
    elem_timer = <HTMLElement>document.getElementById("timer");
    elem_response = <HTMLElement>document.getElementById("response");

    elem_lang = <HTMLFormElement>document.getElementById("select-lang");
    elem_slider = <HTMLSelectElement>document.getElementById("slider");
    elem_canvas = <HTMLCanvasElement>document.getElementById("canvas");
}



//////////////////////////////////
//
// Get position in canvas
//
// Args:
//   canvas: HTMLCanvasElement
//   e: ClickEvent
// Return:
//   [int:x, int:y]: Position
//
//////////////////////////////////
function getClickedPosition(canvas: HTMLCanvasElement,
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
//
// Display response
//
// args:
//   context
//   isResponse: boolean
//   site: number (Drug number)
//   lang: string
//   duration: number (msec)
//
//////////////////////////////////
function responseDisplay(context: CanvasRenderingContext2D,
                         isResponse: boolean,
                         site: number,
                         lang: string,
                         duration: number): void {
    if (isResponse) {
        // effects with response
        Draw.fillRect(context, ConstVal.CENTERS[site], ConstVal.Rrespond);
        Draw.drawCircle(context, ConstVal.CENTERS[site],
                        ConstVal.Rrespond, ConstVal.RrespondCenter, "red");
        elem_response.textContent = Labels["with_response"][lang];
        elem_response.style.color = "red";
        elem_timer.style.color = "red";

        setTimeout(() => {
            Draw.fillRect(context, ConstVal.CENTERS[site], ConstVal.Rrespond);
            Draw.drawCircle(context, ConstVal.CENTERS[site],
                            ConstVal.Rnormal, ConstVal.RnormalCenter, "black");
            elem_response.textContent = "";
            elem_timer.style.color = "black";
        }, 300);
    } else {
        // effects without response
        elem_response.textContent = Labels["without_response"][lang];
        elem_response.style.color = "black";
        setTimeout(() => {
            elem_response.textContent = "";
        }, 300);
    }
}

