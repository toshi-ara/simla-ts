import * as ConstVal from "./ConstVal";
import { random_norm } from "./MyStat";
import MultivariateNormal from "multivariate-normal";
import {
    getStorageParam,
    setStorageParam
} from "./Storage"


export default class Parameter {
    private param;

    constructor() {
        this.param = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];

        // restore parameters if data is saved in localStorage
        const storage = JSON.parse(getStorageParam());
        if (Object.keys(storage).length > 0) {
            this.param = storage.param;
        } else {
            this.setInitParameter();
        }
    }

    setInitParameter() {
        // individual difference
        const d = ConstVal.MU0_adj +
                  random_norm(ConstVal.D_MU0[0], ConstVal.D_MU0[1]);

        // values of saline are 0
        // set parameters for Pro, Lid, Mep, Bup
        //   with random generator following to multivariate normal distribution
        //   using "multivariate-normal" package
        const meanVector = [0, 0, 0, 0, 0, 0, 0, 0];
        const distribution = MultivariateNormal(meanVector,
                                                ConstVal.covarianceMatrix);
        const rand = distribution.sample();

        const n = 6;
        for (let i = 1; i < n - 1; i++) {
            this.param[i][0] = ConstVal.MU0[i - 1][0] + d +
                               ConstVal.MU0[i - 1][1] * rand[i - 1];
            this.param[i][1] = Math.exp(
                ConstVal.LOG_SIGMA0[i - 1][0] +
                ConstVal.LOG_SIGMA0[i - 1][1] * rand[i + 3]
            );
        }
        // Lid + Adr
        this.param[n - 1][0] = this.param[2][0]
        this.param[n - 1][1] = this.param[2][1]
        this.param[n - 1][2] = ConstVal.ADR

        setStorageParam(JSON.stringify({ param: this.param }));
    }

    get getParameter() {
        return this.param
    }
}

