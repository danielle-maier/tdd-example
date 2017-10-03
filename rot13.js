module.exports = {
  encode: function(str) {
    if (typeof str === 'undefined') {
      return undefined;
    } else if (typeof str !== 'string') {
      return "not a string";
    } else {
      let output = '';
      for (let i = 0; i < str.length; i++) {
        let c = str[i];
        const code = str.charCodeAt(i);
        if ((code >= 97) && (code <= 122)) {
          c = String.fromCharCode(((code - 97 + 13) % 26) + 97);
          output += c;
        }
      }
      return output;
    }
  }
};
