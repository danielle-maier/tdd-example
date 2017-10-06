module.exports = {
  encode: function(str) {
    let errorMsg = "not a string";
    let upperCaseACode = 65;
    let lowerCaseACode = 97;
    let characterShift = 13;
    let characterCount = 26;
    if (typeof str === 'undefined') {
      return undefined;
    } else if (typeof str !== 'string') {
      return errorMsg;
    } else {
      return str.replace(/[a-zA-Z]/g, function(currentChar) {
        var start = currentChar <= 'Z' ? upperCaseACode : lowerCaseACode;
        return String.fromCharCode(start + (currentChar.charCodeAt(0) - start + characterShift) % characterCount); 
      });
    }
  }
};
