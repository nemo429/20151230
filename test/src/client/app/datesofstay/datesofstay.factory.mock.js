(function() {
  angular.module('TravelClApp')
    .factory('datesOfStayFactoryMock', datesOfStayFactory);

  function datesOfStayFactory($q) {
    return {
      getAllDates: function() {
        return $q.when(datesOfStay)
      }
    }
  }

  var datesOfStay = {
    "hotelCode": 1234,
    "languageCode": "EN_US",
    "currencyCode": "USD",
    "minimumLengthOfStay": 3,
    "dates": [
      {
        "date": "2015-11-23",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-11-24",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-11-25",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-11-26",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-11-27",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-11-28",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-11-29",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-11-30",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-01",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-02",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-03",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-04",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-05",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-06",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-07",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-08",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-09",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-10",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 180
      },
      {
        "date": "2015-12-11",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 180
      },
      {
        "date": "2015-12-12",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 180
      },
      {
        "date": "2015-12-13",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 180
      },
      {
        "date": "2015-12-14",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 180
      },
      {
        "date": "2015-12-15",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 180
      },
      {
        "date": "2015-12-16",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 180
      },
      {
        "date": "2015-12-17",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 200
      },
      {
        "date": "2015-12-18",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 200
      },
      {
        "date": "2015-12-19",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 225
      },
      {
        "date": "2015-12-20",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 225
      },
      {
        "date": "2015-12-21",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 225
      },
      {
        "date": "2015-12-22",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 225
      },
      {
        "date": "2015-12-23",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 250
      },
      {
        "date": "2015-12-24",
        "available": false,
        "status": "NotAvailableForSale",
        "displayStatus": "Sold Out",
        "rate": 250
      },
      {
        "date": "2015-12-25",
        "available": false,
        "status": "NotAvailableForSale",
        "displayStatus": "Sold Out",
        "rate": 250
      },
      {
        "date": "2015-12-26",
        "available": false,
        "status": "NotAvailableForSale",
        "displayStatus": "Sold Out",
        "rate": 250
      },
      {
        "date": "2015-12-27",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 120
      },
      {
        "date": "2015-12-28",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 210
      },
      {
        "date": "2015-12-29",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 210
      },
      {
        "date": "2015-12-30",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 210
      },
      {
        "date": "2015-12-31",
        "available": true,
        "status": "AvailableForSale",
        "displayStatus": null,
        "rate": 210
      }
    ]
  };

})();
