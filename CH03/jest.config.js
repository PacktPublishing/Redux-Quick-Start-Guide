module.exports = {
  moduleDirectories: ["node_modules", "app"],
  moduleNameMapper: {
    ".*\\.(css|less|styl|scss|sass)$": "<rootDir>/testing/mocks/cssModule.js",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/testing/mocks/image.js"
  },
  setupTestFrameworkScriptFile: "<rootDir>/testing/test-bundler.js",
  setupFiles: ["raf/polyfill", "<rootDir>/testing/enzyme-setup.js"],
  testRegex: "/__tests__/.*.(test.js)$",
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
