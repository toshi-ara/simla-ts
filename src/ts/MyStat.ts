//////////////////////////////////
// statistical functions
//////////////////////////////////

const M_SQ_2 = 0.7071067811865475;

// Cumulative distribution function (CDF)
// q -> p
// Abramowitz and Stegun (1964) formula 7.1.26
// precision: abs(err) < 1.5e-7
export function phi(x: number, upper: boolean = false): number {
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;

    // AS formula 7.1.26
    const sign = x < 0 ? -1 : 1;
    const xx = Math.abs(x) * M_SQ_2;  // = Math.abs(x) / Math.sqrt(2);
    const t = 1 / (1 + p * xx)
    const erf = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-xx * xx);

    const signup = upper ? -1 : 1;
    return (1 + signup * sign * erf) * 0.5;
}

// Random generation according to standard normal distribution
// Box-Muller transform
// https://qiita.com/kyonsi/items/579a61edab661f27e3a5
export function random_norm(mu = 0, sd = 1): number {
    let x = Math.random();
    let y = Math.random();
    let z1 = Math.sqrt(-2 * Math.log(x)) * Math.cos(2 * Math.PI  * y);
    // let z2 = Math.sqrt(-2 * Math.log(x)) * Math.sin(2 * Math.PI  * y);
    return mu + z1 * sd;
}

