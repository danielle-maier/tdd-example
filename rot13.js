module.exports = {
  encode: function(str) {
    if (typeof str === 'undefined') {
      return undefined;
    } else if (typeof str !== 'string') {
      return "not a string";
    } else {
      return str.replace(/[a-zA-Z]/g, function(chr) {
        var start = chr <= 'Z' ? 65 : 97;
        return String.fromCharCode(start + (chr.charCodeAt(0) - start + 13) % 26);
      });
    }
  }
};
