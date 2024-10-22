import Timer from "./Timer";


const storageName = "SimLaTime";

export default class TimerStorage extends Timer {
    constructor() {
        super();

        // restore parameters if data is saved in localStorage
        const storage = this.getStorage();
        if (Object.keys(storage).length > 0) {
            this._isRunning = storage.isRunning;
            this._start = storage.start;
            this._elapsed = storage.elapsed;
            this._total = storage.total;
            this._speed = storage.speed;
        }
    }


    //////////////////////////////////
    // push buttons / change slider
    //////////////////////////////////
    // push new experiment button
    clickNewExp() {
        if (!this.isRunning) {
            super.clickNewExp();
            this.setStorage();
        }
    };

    // push start/restart/pause button
    clickStart() {
        super.clickStart();
        this.setStorage();
    };

    // push quit button
    clickQuit() {
        super.clickQuit();
        if (!this.isRunning) {
            this.clearStorage();
        }
    };

    // change slider
    changeSpeed(speed: number) {
        super.changeSpeed(speed);
        if (this.isRunning) {
            this.setStorage();
        }
    };

    //////////////////////////////////
    // localStrage
    //////////////////////////////////
    // save data to localStorage
    setStorage() {
        localStorage.setItem(storageName, JSON.stringify({
            isRunning: this._isRunning,
            start: this._start,
            elapsed: this._elapsed,
            total: this._total,
            speed: this._speed
        }));
    }

    // get data in localStorage
    getStorage() {
        const params = localStorage.getItem(storageName);
        return params ? JSON.parse(params) : {};
    }

    // delete data in localStorage
    clearStorage() {
        localStorage.removeItem(storageName);
    }
}

