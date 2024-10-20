import { phi } from "../src/ts/MyStat";


test("Check phi function (6-digits)", () => {
    let digits = 6;
    //
    expect(phi(-0.7)).toBeCloseTo(0.241963652223073, digits);
    expect(phi(0)).toBeCloseTo(0.5, digits);
    expect(phi(0.5)).toBeCloseTo(0.691462461274013, digits);
    expect(phi(1.5)).toBeCloseTo(0.9331927987311419, digits);
});

