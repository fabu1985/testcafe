let os = require("os");

module.exports = {
  src: 'tests/**/*.js',
  browsers: ['chrome'],
  skipJsErrors: true,
  hostname: os.hostname(),
  // other settings
  baseUrl: 'http://www.google.com',
  // concurrency: 2,
};