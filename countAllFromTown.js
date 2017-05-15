module.exports = function(registration, loc) {
  var array = [];
  var regNumber = registration.split(',');
  for (var i = 0; i < regNumber.length; i++) {
    //var reg = regNumber[i].trim();
    if (regNumber[i].startsWith(loc)) {
      array.push(regNumber[i]);
    };
    console.log(array);
  };
  return array.length;
};
