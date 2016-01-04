angular.module('TravelClApp')
  .factory('datesOfStayFactory', datesOfStayFactory);

function datesOfStayFactory($http){
  var availPromise = $http.get('/api/BasicAvail.json').then(function(response) {
    return response.data;
  });

  return {
    getAllDates: function() {
      return availPromise
    }
  }
}
