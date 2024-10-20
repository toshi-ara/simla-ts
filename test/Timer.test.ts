import Timer from "../src/ts/Timer";


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
