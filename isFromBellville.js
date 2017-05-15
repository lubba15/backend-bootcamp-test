module.exports = function(taxi) {
  var regNumber = taxi.startsWith('CY');
  console.log(regNumber);
  return regNumber;
};
