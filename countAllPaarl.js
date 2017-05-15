module.exports = function(numberPlate) {
  var array = [];
  var number = numberPlate.split(', ');
  for (var i = 0; i < number.length; i++) {
    if (number[i].startsWith('CJ')) {
      console.log(array++)
    }
  }
  return array;
};
