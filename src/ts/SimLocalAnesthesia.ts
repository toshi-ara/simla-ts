type Position = [number, number];

class SimLocalAnesthesia {
    private lang: number;
    private time: Timer;
    private param: Parameter;
    private elem_newexp: HTMLInputElement;
    private elem_start: HTMLInputElement;
    private elem_quit: HTMLInputElement;
    private elem_lang: HTMLFormElement;
    private elem_slider: HTMLSelectElement;
    private elem_canvas: HTMLCanvasElement;
    private elem_speed_msg: HTMLElement;
    private elem_timer: HTMLElement;
    private elem_response: HTMLElement;

    constructor() {
        this.time = new Timer();
        this.param = new Parameter();

        // objects for elements
        this.elem_newexp = <HTMLInputElement>document.getElementById("newexp");
        this.elem_start = <HTMLInputElement>document.getElementById("start");
        this.elem_quit = <HTMLInputElement>document.getElementById("quit");
        this.elem_lang = <HTMLFormElement>document.getElementById("lang");

        this.elem_speed_msg = <HTMLElement>document.getElementById("speed_msg");
        this.elem_timer = <HTMLElement>document.getElementById("timer");
        this.elem_response = <HTMLElement>document.getElementById("response");

        this.elem_slider = <HTMLSelectElement>document.getElementById("slider");
        this.elem_canvas = <HTMLCanvasElement>document.getElementById("canvas");

        // set canvas
        const context = this.elem_canvas.getContext("2d")!;
        const img = new Image();
        img.src = ConstVal.path_to_fig;
        img.onload = () => {
            // display image
            context.drawImage(img, 0, 0);
            // draw circles
            ConstVal.CENTERS.forEach(function(center) {
                Draw.drawCircle(context, center,
                                ConstVal.Rnormal, ConstVal.RnormalCenter, "black")
            });
        };

        // PC or tablet
        const clickEventType = (window.ontouchstart === undefined) ? "mousedown" : "touchstart";

        // add EventListener to buttons, slider, timer and canvas
        this.elem_newexp.addEventListener(clickEventType,
            () => {this.clickNewExp()}, false);
        this.elem_start.addEventListener(clickEventType,
            () => {this.clickStart()}, false);
        this.elem_quit.addEventListener(clickEventType,
            () => {this.clickQuit()}, false);

        this.elem_lang.addEventListener("change",
            () => {this.toggleLang()}, false);
        this.elem_slider.addEventListener("input",
            () => {this.sliderChanged()}, false);
        this.elem_canvas.addEventListener(clickEventType,
            (e: MouseEvent | TouchEvent) => {
                this.clickCanvas(this.elem_canvas, context, e)
            }, false);

        this.elem_slider.value = this.getStorageSpeed();
        this.lang = this.getStorageLang();
        this.elem_lang["la"][this.lang].checked = true;
        this.setLang();

        // change buttons status
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
    // mousedown in canvas area
    //////////////////////////////////
    private clickCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D,
                        e: MouseEvent | TouchEvent): void {
        if (!this.time.isRunning) { return }
        // running
        const pos = this.getClickedPosition(canvas, e);
        const site = this.getCircleNumber(pos, ConstVal.CENTERS, ConstVal.Rnormal);

        if (site < 0) { return }
        // when clicked in circles
        const isResponse = this.getResponse(site, this.time.getMinute,
                                            this.param.getParameter);

        if (isResponse) {
            // effects with response
            Draw.fillRect(context, ConstVal.CENTERS[site], ConstVal.Rrespond);
            Draw.drawCircle(context, ConstVal.CENTERS[site],
                            ConstVal.Rrespond, ConstVal.RrespondCenter, "red");
            this.elem_response.textContent = Labels.with_response[this.lang];
            this.elem_response.style.color = "red";

            setTimeout(() => {
                Draw.fillRect(context, ConstVal.CENTERS[site], ConstVal.Rrespond);
                Draw.drawCircle(context, ConstVal.CENTERS[site],
                                ConstVal.Rnormal, ConstVal.RnormalCenter, "black");
                this.elem_response.textContent = "";
            }, 300);
        } else {
            // effects without response
            this.elem_response.textContent = Labels.without_response[this.lang];
            this.elem_response.style.color = "black";
            setTimeout(() => {
                this.elem_response.textContent = "";
            }, 300);
        }
    }

    //////////////////////////////////
    // buttons
    //////////////////////////////////
    // redraw buttons in each language
    private toggleLang(): void {
        this.lang = this.elem_lang["la"].value;
        this.setLang()
        this.setStorageLang()
    }

    private setLang(): void {
        // start/restart/pause button
        let lab;
        if (this.time.isRunning) {
            lab = Labels.pause;
        } else {
            if (this.time.getTotalTime == 0) {
                lab = Labels.start;
            } else {
                lab = Labels.restart;
            }
        }
        this.elem_start.textContent = lab[this.lang];
        this.elem_newexp.textContent = Labels.newexp[this.lang];
        this.elem_quit.textContent = Labels.quit[this.lang];
        this.toggleButton();

        // slider
        this.printSpeed(this.elem_slider.value)
    }

    // push new experiment button
    private clickNewExp(): void {
        if (this.time.isRunning) { return }
        // in pause
        const check = window.confirm(Labels.msg_newexp[this.lang]);
        if (check) {
            this.time.clickNewExp();
            this.param.setInitParameter();
            this.elem_slider.value = "1";
            this.setStorageSpeed();
            this.setLang()
        }
    }

    // push start/restart/pause button
    private clickStart(): void {
        this.time.clickStart();
        this.setLang()
        this.toggleButton();
        this.setStorageSpeed();
    }

    // push quit button
    private clickQuit(): void {
        if (this.time.isRunning) { return }
        // in pause
        const check = window.confirm(Labels.msg_quit[this.lang]);
        if (check) {
            window.alert(Labels.msg_close[this.lang]);
            this.time.clickQuit();
            this.param.clearStorage();
            this.clearStorage();
        }
    }

    private toggleButton(): void {
        if (this.time.isRunning) {
            this.elem_newexp.style.color = "gray";
            this.elem_quit.style.color = "gray";
        } else {
            this.elem_newexp.style.color = "black";
            this.elem_quit.style.color = "black";
        }
    }

    //////////////////////////////////
    // change slider
    //////////////////////////////////
    private sliderChanged(): void {
        this.printSpeed(this.elem_slider.value)
        this.time.sliderChanged();
        this.setStorageSpeed();
    }

    private printSpeed(speed: string): void {
        this.elem_speed_msg.textContent = speed + Labels.speed[this.lang];
    }

    //////////////////////////////////
    // function for simulation
    //////////////////////////////////
    // Get position in canvas
    //
    // Args:
    //   canvas
    //   e
    // Return: [int:x, int:y]
    private getClickedPosition(canvas: HTMLCanvasElement,
                               e: MouseEvent | TouchEvent): Position {
        let touch;
        const borderWidth = 0;

        // https://cpoint-lab.co.jp/article/202111/21267/
        const isTouchEvent = (e: MouseEvent | TouchEvent):
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

        const position: Position = [canvasX, canvasY];
        return position
    }

    // Return whether position is present in circle
    //
    // Args:
    //   position: position of mouse click
    //   center: position of center of circle
    //   radius:
    // Return: true/false
    private isInCircle(position: Position, center: number[], radius: number): boolean {
        const l2 = Math.pow(position[0] - center[0], 2) +
                   Math.pow(position[1] - center[1], 2);
        return l2 <= Math.pow(radius, 2);
    }

    // Return the number which circle coordinate is present
    //
    // Args:
    //   centers: 2D-array of coordinates of the center of the circle
    //   radius
    // Return: circle number
    //   (return -1 when coordinate is out of circles)
    private getCircleNumber(position: Position,
                            centers: number[][], radius: number): number {
        let result = -1;
        for (let i = 0; i < centers.length; i++) {
            if (this.isInCircle(position, centers[i], radius)) {
                result = i
            }
        }
        return result
    }

    // Return probability to respond from time (min) and parameters
    //
    // Args:
    //   time (min)
    //   param[mu, sigma, adr]
    // Return: probability (0-1)
    private getProbability(time: number, param: number[]): number {
        let X = 100 - (1 - param[2]) * time;
        return MyStat.phi_approx_upper((X - param[0]) / param[1])
    }

    // Return "respond / not respond" with random number
    //   from time (min) and parameters
    //
    // Args
    //   num: kind of drug (integer)
    //   time:  minute
    //   param[mu, sigma, adr]
    // Return: true/false
    private getResponse(num: number, time: number, param: number[][]): boolean {
        let prob;
        if (num == 0) {
            // saline
            prob = 0.99;
        } else {
            prob = this.getProbability(time, param[num]);
            // not respond when probability is less than threshold
            if (prob < ConstVal.ProbThreshold) {
                return false
            }
        }
        // return respond / not respond with random number
        //   under calculated probability
        return Math.random() <= prob
    }

    //////////////////////////////////
    // timer
    //////////////////////////////////
    // display timer
    displayTimer(): void {
        this.elem_timer.textContent = this.time.getTimeStr(Number(this.elem_slider.value));
        requestAnimationFrame(() => {this.displayTimer()});
    }

    //////////////////////////////////
    // localStrage
    //////////////////////////////////
    // save data to localStorage
    private setStorageSpeed(): void {
        localStorage.setItem(ConstVal.storageNameSpeed, String(this.elem_slider.value));
    }

    // get data in localStorage
    private getStorageSpeed(): string {
        const speed = localStorage.getItem(ConstVal.storageNameSpeed);
        return speed ? speed : "1";
    }

    // save data to localStorage (lang)
    private setStorageLang(): void {
        localStorage.setItem(ConstVal.storageNameLang, String(this.lang))
    }

    // get data in localStorage (lang)
    private getStorageLang(): number {
        const lang = localStorage.getItem(ConstVal.storageNameLang);
        return lang ? Number(lang) : 0
    }

    // delete data in localStorage
    private clearStorage(): void {
        localStorage.removeItem(ConstVal.storageNameSpeed);
        localStorage.removeItem(ConstVal.storageNameLang);
    }
}

