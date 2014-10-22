module.exports = function(config) {
  config.set({
    frameworks: ["jasmine"],
    browsers: ["Chrome"],
    autowatch: false,
    singleRun: true,

    preprocessors: {
      "../src/*.js": "coverage"
    },

    reporters: ["spec", "failed", "coverage"],
    coverageReporter: {
      reporters: [
        {
          type: "lcovonly",
          dir: "coverage",
          subdir: "."
        },
        {
          type: "text-summary"
        }
      ]
    },
  });
};
