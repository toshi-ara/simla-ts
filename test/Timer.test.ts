import Timer from "../src/ts/Timer";

// disable to save/load local strage
class Timer2 extends Timer {
    setStorage() {}
    getStorage() {
        return {};
    }
    clearStorage() {}
}


jest.useFakeTimers();

describe("Check Timer class", () => {
    it("Check isRunning function", () => {
        let timer = new Timer2();

        // befor start
        timer.clickNewExp();
        expect(timer.isRunning).toEqual(false);

        // start
        timer.clickStart();
        expect(timer.isRunning).toEqual(true);

        // stop
        timer.clickStart()
        expect(timer.isRunning).toEqual(false);
    });

    it("Check sliderChanged function", () => {
        let timer = new Timer2();
        jest.runAllTimers()

        // befor start
        timer.clickNewExp();

        // start
        timer.clickStart();

        // pass 3 sec
        //  => 3000 (msec)
        jest.advanceTimersByTime(3000);
        expect(timer.getTime(1)).toEqual(3000);

        // change speed
        // pass 3 sec (5x)
        //  => 3000 + 3000 x 5 = 18000
        timer.sliderChanged();
        jest.advanceTimersByTime(3000);
        expect(timer.getTime(5)).toEqual(18000);

        // pass 1 sec (10x)
        //  => 18000 + 1000 x 10 = 28000
        timer.sliderChanged();
        jest.advanceTimersByTime(1000);
        expect(timer.getTime(10)).toEqual(28000);

        // pass 2 sec (1x)
        //  => 28000 + 2000 = 30000
        timer.sliderChanged();
        jest.advanceTimersByTime(2000);
        expect(timer.getTime(1)).toEqual(30000);

        // stop
        timer.clickStart()
    });
});

