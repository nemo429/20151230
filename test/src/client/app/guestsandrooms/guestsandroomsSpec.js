"use strict";

describe("Guests and Rooms", function() {
  var $rootScope,
    filter,
    $q,
    mainController,
    hotelFactoryMock,
    guestsAndRoomsController,
    gnrScope,
    reservationService,
    state,
    $httpBackend;

  // Story -> Features -> Units
  // Controllers, Model, Default Behaviour
  //  [_] Clicking Guests & Rooms Navbar makes visible the Guests & Rooms form
  //  [_] Selecting n number of children makes visible n number of option rows
  //  [_] Selecting n number of children makes visible n number of option rows
  //  [_] Has default button with text "Confirm Guests & Rooms"
  //  [_] Clicking Confirm Guests & Rooms Button changes path to Dates Of Stay
  //  [_] Clicking Confirm Guests & Rooms Button changes Reservation with equivalent Info
  //  [x] Clicking Confirm Guests & Rooms Button changes button text to "Update Guests and Rooms"
  //  [_] HotelDescriptionInfo Model

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

  beforeEach(inject(function($injector, $controller, $state, $filter, navDataFactory, _reservationService_, _hotelFactoryMock_, datesOfStayFactoryMock, accommodationsFactoryMock) {
    $rootScope = $injector.get('$rootScope');
    filter = $injector.get('$filter');
    $q = $injector.get('$q');
    $httpBackend = $injector.get('$httpBackend');
    hotelFactoryMock = _hotelFactoryMock_;
    gnrScope = $rootScope.$new();
    state = $state;
    reservationService = _reservationService_;

    $httpBackend.whenGET(/^\/.*$/).respond(200);

    mainController = $controller('MainController', {
      '$rootScope': $rootScope,
      'hotelFactory': hotelFactoryMock,
      'datesOfStayFactory': datesOfStayFactoryMock,
      'accommodationsFactory': accommodationsFactoryMock
    });

    guestsAndRoomsController = $controller('GuestsAndRoomsController', {
      '$rootScope': $rootScope,
      '$scope': gnrScope,
      '$state': $state,
      'navDataFactory': navDataFactory,
      'reservationService': reservationService,
      'hotelFactory': hotelFactory
    });

    $rootScope.$apply();
  }));

  //Check on Controllers
  it('should have a mainController controller', function() {
    expect(mainController).not.toBe(null);
  });

  it('should have a GuestsAndRoomsController controller', function() {
    expect(guestsAndRoomsController).not.toBe(null);
  });

  //Test Model
  it('should have defaults from HotelDescriptiveInfo', function() {
    expect($rootScope.HotelDescriptiveInfo instanceof Object).toBeTruthy();
  });

  it('has maxAdults to equal any number', function() {
    expect(gnrScope.HotelDescriptiveInfo.maxAdults).toEqual(jasmine.any(Number));
  });

  it('has defaultAdults which is a Number', function() {
    expect(gnrScope.HotelDescriptiveInfo.defaultAdults).toEqual(jasmine.any(Number));
  });

  it('has allowChildren which is Boolean', function() {
    expect(gnrScope.HotelDescriptiveInfo.allowChildren).toEqual(jasmine.any(Boolean));
  });

  it('has maxChildren which is a Number', function() {
    expect(gnrScope.HotelDescriptiveInfo.maxChildren).toEqual(jasmine.any(Number));
  });

  it('has defaultChildren which is a Number', function() {
    expect(gnrScope.HotelDescriptiveInfo.defaultChildren).toEqual(jasmine.any(Number));
  });

  it('has allowInfants which is Boolean', function() {
    expect(gnrScope.HotelDescriptiveInfo.allowInfants).toEqual(jasmine.any(Boolean));
  });

  it('has maxInfants which is a Number', function() {
    expect(gnrScope.HotelDescriptiveInfo.maxInfants).toEqual(jasmine.any(Number));
  });
  it('has defaultChildren which is a Number', function() {
    expect(gnrScope.HotelDescriptiveInfo.defaultChildren).toEqual(jasmine.any(Number));
  });
  it('has maxInfantAge which is a Number', function() {
    expect(gnrScope.HotelDescriptiveInfo.maxInfantAge).toEqual(jasmine.any(Number));
  });
  it('has maxChildAge which is a Number', function() {
    expect(gnrScope.HotelDescriptiveInfo.maxChildAge).toEqual(jasmine.any(Number));
  });
  it('has initOptions starting with an empty array in its ChildArr property', function() {
    expect(gnrScope.initOptions.ChildArr).toEqual([]);
  });

  //Test Behaviour
  it('has default string "Confirm Guest & Rooms" when first loading in', function() {
    expect(gnrScope.buttonMsg).toEqual("Confirm Guests & Rooms");
  });

  it('should get false when first instantiating checkReservation so HotelDescriptiveInfo\'s defaults are set', function() {
    expect(gnrScope.checkReservation()).toBeTruthy();
  });

  it('should modify the size of the childArr when ng-change calls updateChildArr to decrease the size', function(){
    gnrScope.initOptions.ChildArr = [1,12,5,9]; //old data
    gnrScope.initOptions.Children = 2;
    gnrScope.updateChildArr();
    expect(gnrScope.initOptions.ChildArr.length).toBe(2);
  });

  it('when setting guests on Reservation service button text will change to \'Update Guests and Rooms\'', function() {
    var fakeGuests = {
      ChildArr: [1, 2, 4],
      Adults: 5,
      Children: 3,
      Rooms: 3
    };
    reservationService.setGuests(fakeGuests);
    gnrScope.checkButton();
    expect(gnrScope.buttonMsg).toEqual("Update Guests & Rooms");
  });

  it('should use the guestsandroomsFilter to format a single quantity as a singular noun form', function() {
    expect(filter('adultsFilter')(1)).toBe('1 adult');
    expect(filter('childrenFilter')(1)).toBe('1 child');
    expect(filter('infantsFilter')(1)).toBe('1 infant');
    expect(filter('roomsFilter')(1)).toBe('1 room');
  });
  it('should use the guestsandroomsFilter to format a quantity into its plural noun form', function() {
    expect(filter('adultsFilter')(2)).toBe('2 adults');
    expect(filter('childrenFilter')(4)).toBe('4 children');
    expect(filter('infantsFilter')(5)).toBe('5 infants');
    expect(filter('roomsFilter')(9)).toBe('9 rooms');
  });

});
