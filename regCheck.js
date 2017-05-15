module.exports = function(regNumber, location) {
  var isEC = regNumber.endsWith(location);
  //console.log(isEC);
  return isEC;
};
