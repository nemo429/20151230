angular.module('TravelClApp')
  .factory('accommodationsFactory', accommodationsFactory);

function accommodationsFactory($http) {
  var rateAvailPromise = $http.get('/api/RateAvail.json').then(function(response) {
    return response.data;
  });

  var packageAvailPromise = $http.get('/api/PackageAvail.json').then(function(response) {
    return response.data;
  });

  return {
    getAllRatesAvail: function() {
      return rateAvailPromise;
    },
    getAllPackageAvail: function() {
      return packageAvailPromise;
    }
  }
}
