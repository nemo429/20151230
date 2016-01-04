describe("Days of Stay", function() {

  // Story -> Features -> Units
  // Controllers, Model, Default Behaviour
  //  [_] DatesOfStayController has functions startCalendarObj, selectDates, and submitDates
  //  [_] Clicking Dates of Stay Navbar does not make visible the Dates of Stay page until Guests & Rooms
  //  [_] Clicking Dates of Stay Navbar makes visible the Dates of Stay page after Guests & Rooms data
  //  [_] Clicking Dates of Stay Navbar after updating with Reservation info and navigating away Persists
  //  [_] Clicking a SOLD OUT (NotAvailableForStay) calendar day will show no change to the element

  //  [_] Clicking a blanked  calendar day will show no change to the element
  //  [_] Clicking a past calendar day will show no change to the element
  //  [_] Clicking an "AvailableforStay" calendar day will toggle it
  //  [_] Has default button with text "Go back" and "Update"
  //  [_] Clicking button "Update" populates Reservations and Dates of Stay on the Nav bar

  //  [_] Clicking button "Update" navigates to Accomodations
  //  [_] Clicking button "Go Back" navigates to Guests & Rooms
  //  [_] Clicking button Next disables it, hides current month and shows next month
  //  [_] Clicking button Prev disables it, shows current month and hides next month
  //  [_] Today is displayed and on the calendar day for today

  //  [_] Current month is displayed by default
  //  [_] Currency menu change displays respective currency format in calendar days

  var mainController,
    datesOfStayController,
    datesOfStayScope,
    hotelFactoryMock,
    rootScope,
    filter;

  beforeEach(module('TravelClApp'));

  beforeEach(function() {
    angular.mock.module('TravelClApp', function($provide) {
      //replace $state to avoid $http backend calls
      $provide.service('$state', function() {
        this.transitionTo = function(stateName) {
          console.log("Mock transition to: " + stateName);
        };
        this.go = function(stateName){
          console.log("Fake going to: " + stateName);
        };
      });
    });
  });

  beforeEach(
    inject(function($rootScope, $controller, $state, $filter, $httpBackend, _navDataFactory_, _reservationService_, _hotelFactoryMock_, datesOfStayFactoryMock, _hotelFactory_, _datesOfStayFactory_, accommodationsFactoryMock) {

      rootScope = $rootScope;
      datesOfStayScope = $rootScope.$new();
      reservationService = _reservationService_;
      navDataFactory = _navDataFactory_;
      hotelFactory = _hotelFactory_;
      hotelFactoryMock = _hotelFactoryMock_;
      datesOfStayFactory = _datesOfStayFactory_;
      filter = $filter;

      $httpBackend.whenGET(/^\/.*$/).respond(200);

      mainController = $controller('MainController', {
        '$rootScope': $rootScope,
        'hotelFactory': hotelFactoryMock,
        'datesOfStayFactory': datesOfStayFactoryMock,
        'accommodationsFactory': accommodationsFactoryMock
      });

      $rootScope.$apply();

      datesOfStayController = $controller('DatesOfStayController', {
        '$rootScope': $rootScope,
        '$scope': datesOfStayScope,
        '$state': $state,
        'reservationService': reservationService,
        'navDataFactory': navDataFactory
      });
    }));

  it('should have a mainController controller', function() {
    expect(mainController).not.toBe(null);
  });

  it('should have a DatesOfStayController controller', function(){
    expect(datesOfStayController).not.toBe(null);
  });

  //Test Model

  //Test Behaviour
  it('should return a formatted day rate if the calendarObject is available for sale', function() {
    var calendarTestObjectAvailable = {
      "date": "2015-11-24",
      "available": true,
      "status": "AvailableForSale",
      "displayStatus": null,
      "rate": 120
    };
    expect(filter('calRatesFilter')(calendarTestObjectAvailable)).toBe('From $120');
  });

  it('should return \'Sold Out\' if the calendarObject is not available for sale', function() {
    var calendarTestObjectNotAvailable = {
      "date": "2015-12-26",
      "available": false,
      "status": "NotAvailableForSale",
      "displayStatus": "Sold Out",
      "rate": 250
    };
    expect(filter('calRatesFilter')(calendarTestObjectNotAvailable)).toBe('Sold Out');
  });
});
