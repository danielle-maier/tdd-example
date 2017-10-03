module.exports = {
  encode: function(str) {
    if (typeof str === 'undefined') {
      return undefined;
<<<<<<< HEAD
    }
=======
    } else if (typeof str !== 'string') {
      return "not a string";
    } 
>>>>>>> 38a52823a8af60f8ad79ef67b91f7052692e23d0
  }
};
