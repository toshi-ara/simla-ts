import Timer from "../src/ts/Timer";


jest.useFakeTimers();

test("Check Timer class", () => {
    // disable to save/load local strage
    class Timer2 extends Timer {
        setStorage() {}
        getStorage() {
            return {};
        }
        clearStorage() {}
    }

    let timer = new Timer2();
    jest.runAllTimers()

    // befor start
    timer.clickNewExp();
    expect(timer.isRunning).toEqual(false);

    // start
    timer.clickStart();
    expect(timer.isRunning).toEqual(true);

    // pass 3 sec
    jest.advanceTimersByTime(3000);
    expect(timer.getTime(1)).toEqual(3000);

    // change speed
    // pass 3 sec (5x)
    timer.sliderChanged();
    jest.advanceTimersByTime(3000);
    expect(timer.getTime(5)).toEqual(18000);

    // pass 1 sec (10x)
    timer.sliderChanged();
    jest.advanceTimersByTime(1000);
    expect(timer.getTime(10)).toEqual(28000);

    // stop
    timer.clickStart()
    expect(timer.isRunning).toEqual(false);
});
