(function() {
  angular.module('TravelClApp')
    .factory('hotelFactoryMock', hotelFactory);

  function hotelFactory($q) {
    var hotelPromise = $q.when(hotel);

    return {
      getHotelInfo: function() {
        return hotelPromise;
      }
    }
  }

  var hotel = {
    "hotelCode": 1234,
    "hotelName": "The Andreu Hotel",
    "maxRoomsPerBooking": 3,
    "maxAdults": 9,
    "maxChildren": 5,
    "maxInfants": 2,
    "maxChildAge": 17,
    "maxInfantAge" : 2,
    "allowChildren": true,
    "allowInfants": true,
    "webAddress": "http://localhost",
    "defaultAdults": 2,
    "defaultChildren": 0,
    "defaultInfants": 0,
    "delightfulMessagesEnabled": true,
    "language": {
      "isPrimaryLanguage": true,
      "languageCode": "EN_US",
      "description": "English (US)"
    },
    "languages": [
      {
        "isPrimaryLanguage": true,
        "languageCode": "EN_US",
        "description": "English (US)"
      },
      {
        "isPrimaryLanguage": false,
        "languageCode": "ES_ES",
        "description": "Español"
      }
    ],
    "currency": {
      "currencyCode": "USD",
      "displayFormat": "############.##"
    },
    "currencies": [
      {
        "something": "USD",
        "displayFormat": "############.##"
      },
      {
        "something": "EUR",
        "displayFormat": "############.##"
      }
    ],
    "hotelLogo": {
      "type": "image",
      "imageSource": "./images/global/logo-nav-andreu-hotel.png"
    }
  }

})();
