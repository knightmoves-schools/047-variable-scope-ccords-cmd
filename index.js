const distanceInMiles = 100;
var estimatedReturnTime = function () {
  var milesPerHour = 50;
  return distanceInMiles/milesPerHour;
};
document.getElementById('result').innerHTML = estimatedArrivalTime;




