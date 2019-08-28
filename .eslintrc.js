module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
		"node": true,
		"mocha": true
    },
    "extends": ["eslint:recommended", "google"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
		"valid-jsdoc": "off",
		"indent": ["error", "tab"],
		'max-len': ["error", { "code": 150 }],
		"mocha/no-exclusive-tests": "error",
		"no-tabs" : "off",
		"no-console": "off",
	},
	"plugins": [
		"mocha"
	]
};