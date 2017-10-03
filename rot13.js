module.exports = {
  encode: function(str) {
    if (typeof str === 'undefined') {
      return undefined;
    } else if (typeof str !== 'string') {
      return "not a string";
    } else {
      return str.replace(/[a-z]/ig, c => Buffer([((d = Buffer(c)[0]) & 95) < 78 ? d + 13 : d - 13]));
    }
  }
};
