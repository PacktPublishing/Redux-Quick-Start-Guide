/* eslint-disable */

String.prototype.humanize = function () {
  return this.replace(/(?:_| |\b)(\w)/g, function(key, p1) {
    return p1.toUpperCase()
  });
};
