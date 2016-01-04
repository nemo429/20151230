angular.module('TravelClApp')
    .controller('MainController', ['$rootScope','hotelFactory', 'datesOfStayFactory', 'accommodationsFactory', MainController]);

function MainController($rootScope, hotelFactory, datesOfStayFactory, accommodationsFactory) {
  //Pop button ng-toaster
  //$scope.pop = function(){
  //  console.log("good")
  //};
  //$scope.pop = function(){
  //  toaster.clear();
  //  toaster.error({title: "wait", body:"Please select your date"});
  //};
  hotelFactory.getHotelInfo().then(function(data) {
    $rootScope.HotelDescriptiveInfo = data;
    $rootScope.HotelDescriptiveInfo.defaultRooms = 1;
  });

  datesOfStayFactory.getAllDates().then(function(data) {
    $rootScope.BasicAvailbilityInfo = data;
  });

  accommodationsFactory.getAllRatesAvail().then(function(data) {
    $rootScope.RatesAvail = data;
  });

  accommodationsFactory.getAllPackageAvail().then(function(data) {
    $rootScope.PackageAvail = data;
  });

  // Helper functions on $rootScope
  $rootScope.numToArray = function(to) {
    var newArr = new Array(to);
    for (var i = 0; i < to; i++) {
      newArr[i] = i;
    }
    return newArr;
  };

  function formatAgeOptions(num) {
    if (num === 0)
      return {name: "<1", id: num};
    else
      return {name: num, id: num};
  }

  function rangeToArray(numFrom, numTo) {
    var count = numTo - numFrom;
    var newArr = new Array(count);
    for (var i = 0; i < count; i++) {
      newArr[i] = formatAgeOptions(numFrom);
      numFrom++;
    }
    return newArr;
  }

  $rootScope.ageOptions = rangeToArray(0, 18);

  $rootScope.formatAgeOptions = formatAgeOptions

}
