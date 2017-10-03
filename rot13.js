module.exports = {
  encode: function(str) {
    if (typeof str === 'undefined') {
      return undefined;
    } else if (typeof str !== 'string') {
      return "not a string";
    }
  }
};
