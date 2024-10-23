import Timer from "./Timer";
import {
    getStorageTimer,
    setStorageTimer,
    clearStorageTimer
} from "./Storage"



export default class TimerStorage extends Timer {
    constructor() {
        super();

        // restore parameters if data is saved in localStorage
        const storage = JSON.parse(getStorageTimer());
        if (Object.keys(storage).length > 0) {
            this._isRunning = storage.isRunning;
            this._start = storage.start;
            this._elapsed = storage.elapsed;
            this._total = storage.total;
            this._speed = storage.speed;
        }
    }

    // convert paramters to JSON
    private getJSONdata(): string {
        return JSON.stringify({
            isRunning: this._isRunning,
            start: this._start,
            elapsed: this._elapsed,
            total: this._total,
            speed: this._speed
        })
    }

    //////////////////////////////////
    // push buttons / change slider
    //////////////////////////////////
    // push new experiment button
    clickNewExp() {
        if (this.isRunning) { return }
        super.clickNewExp();
        setStorageTimer(this.getJSONdata());
    };

    // push start/restart/pause button
    clickStart() {
        super.clickStart();
        setStorageTimer(this.getJSONdata());
    };

    // push quit button
    clickQuit() {
        super.clickQuit();
        if (!this.isRunning) {
            clearStorageTimer();
        }
    };

    // change slider
    changeSpeed(speed: number) {
        super.changeSpeed(speed);
        setStorageTimer(this.getJSONdata());
    };
}

