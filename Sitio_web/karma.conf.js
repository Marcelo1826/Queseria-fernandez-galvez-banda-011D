module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],

    files: [
      "tests-jasmine/**/*.spec.js"
    ],

    preprocessors: {
      "tests-jasmine/**/*.spec.js": ["webpack"]
    },

    webpack: {
      mode: "development",
      devtool: "inline-source-map"
    },

    reporters: ["progress"],

    browsers: ["ChromeHeadless"],

    singleRun: true,

    autoWatch: false,

    client: {
      clearContext: false
    }
  });
};