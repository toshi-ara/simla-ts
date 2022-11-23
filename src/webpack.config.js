const path = require('path');

module.exports = {
    mode: 'production', // "production" | "development" | "none"

    // entrypoint
    entry: './ts/main.ts',

    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js"
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },

    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            '.ts', '.js'
        ]
    }
};

