import Timer from "../src/ts/Timer";

// // disable to save/load local strage
// class Timer2 extends Timer {
//     setStorage() {}
//     getStorage() {
//         return {};
//     }
//     clearStorage() {}
// }


jest.useFakeTimers();

describe("Check Timer class", () => {
    it("Check isRunning/click* functions", () => {
        let timer = new Timer();

        // befor start
        timer.clickNewExp();
        expect(timer.isRunning).toEqual(false);

        // start
        timer.clickStart();
        expect(timer.isRunning).toEqual(true);

        // stop
        timer.clickStart()
        expect(timer.isRunning).toEqual(false);

        // quit (in not running)
        timer.clickQuit()
        expect(timer.isRunning).toEqual(false);

        // quit (in running)
        timer.clickStart() // isRunning => true
        expect(timer.isRunning).toEqual(true);

        // stop
        timer.clickStart()
    });

    it("Check getTime/changeSpeed function", () => {
        let timer = new Timer();
        jest.runAllTimers()

        // befor start
        timer.clickNewExp();

        // start
        timer.clickStart();

        // pass 3 sec
        //  => 3000 (msec)
        jest.advanceTimersByTime(3000);
        expect(timer.getTime).toEqual(3000);

        // change speed
        // pass 3 sec (5x)
        //  => 3000 + 3000 x 5 = 18000
        timer.changeSpeed(5);
        jest.advanceTimersByTime(3000);
        expect(timer.getTime).toEqual(18000);

        // pass 1 sec (10x)
        //  => 18000 + 1000 x 10 = 28000
        timer.changeSpeed(10);
        jest.advanceTimersByTime(1000);
        expect(timer.getTime).toEqual(28000);

        // pass 2 sec (1x)
        //  => 28000 + 2000 = 30000
        timer.changeSpeed(1);
        jest.advanceTimersByTime(2000);
        expect(timer.getTime).toEqual(30000);

        // stop
        // no change
        timer.clickStart()
        jest.advanceTimersByTime(1000);
        expect(timer.getTime).toEqual(30000);
    });

    it("Check getMinute/changeSpeed function", () => {
        let timer = new Timer();
        jest.runAllTimers()

        // befor start
        timer.clickNewExp();

        // start
        timer.clickStart();

        // pass 3 sec
        //  => 3000 (msec)
        jest.advanceTimersByTime(3000);
        expect(timer.getMinute).toEqual(3000/60000);

        // change speed
        // pass 3 sec (5x)
        //  => 3000 + 3000 x 5 = 18000
        timer.changeSpeed(5);
        jest.advanceTimersByTime(3000);
        expect(timer.getMinute).toEqual(18000/60000);

        // pass 1 sec (10x)
        //  => 18000 + 1000 x 10 = 28000
        timer.changeSpeed(10);
        jest.advanceTimersByTime(1000);
        expect(timer.getMinute).toEqual(28000/60000);

        // pass 2 sec (1x)
        //  => 28000 + 2000 = 30000
        timer.changeSpeed(1);
        jest.advanceTimersByTime(2000);
        expect(timer.getMinute).toEqual(30000/60000);

        // stop
        timer.clickStart()
    });

    it("Check getMinute/changeSpeed function ver. 2", () => {
        let timer = new Timer();
        jest.runAllTimers()

        // befor start
        timer.clickNewExp();

        // start
        timer.clickStart();

        // pass 3 sec
        //  => 3000 (msec)
        jest.advanceTimersByTime(3000);

        // change speed
        // pass 3 sec (5x)
        //  => 3000 + 3000 x 5 = 18000
        timer.changeSpeed(5);
        jest.advanceTimersByTime(3000);

        // pass 1 sec (10x)
        //  => 18000 + 1000 x 10 = 28000
        timer.changeSpeed(10);
        jest.advanceTimersByTime(1000);

        // pass 2 sec (1x)
        //  => 28000 + 2000 = 30000
        timer.changeSpeed(1);
        jest.advanceTimersByTime(2000);
        expect(timer.getMinute).toEqual(30000/60000);

        // stop
        timer.clickStart()
    });

    it("Check getTimeStr function", () => {
        let timer = new Timer();
        jest.runAllTimers()

        // befor start
        timer.clickNewExp();

        // start
        timer.clickStart();

        // pass 3 sec
        //  => 3000 (msec)
        jest.advanceTimersByTime(3000);
        expect(timer.getTimeStr).toEqual("0:00:03");

        // change speed
        // pass 3 sec (5x)
        //  => 3000 + 3000 x 5 = 18000 (0:00:18)
        timer.changeSpeed(5);
        jest.advanceTimersByTime(3000);
        expect(timer.getTimeStr).toEqual("0:00:18");

        // pass 60 sec (5x)
        //  => 18000 + 60000 x 5 = 318000 (0:05:18)
        timer.changeSpeed(5);
        jest.advanceTimersByTime(60000);
        expect(timer.getTimeStr).toEqual("0:05:18");

        // pass 60 sec (60x)
        //  => 318000 + 60000 x 60 = 3918000 (1:05:18)
        timer.changeSpeed(60);
        jest.advanceTimersByTime(60000);
        expect(timer.getTimeStr).toEqual("1:05:18");

        // stop
        timer.clickStart()
    });
});

