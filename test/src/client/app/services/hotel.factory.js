angular.module('TravelClApp')
  .factory('hotelFactory', hotelFactory);

function hotelFactory($http){
  var dataPromise = $http.get('/api/HotelDescriptiveInfo.json').then(function(response) {
    return response.data;
  });

  return {
    getHotelInfo: function() {
      return dataPromise;
    }
  }
}
