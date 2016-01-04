"use strict";

describe("Total", function() {
  var $rootScope,
    filter,
    $q,
    mainController,
    hotelFactoryMock,
    totalController,
    totalScope,
    reservationService,
    $httpBackend,
    state;

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
    totalScope = $rootScope.$new();
    reservationService = _reservationService_;
    state = $injector.get('$state');

    $httpBackend.whenGET(/^\/.*$/).respond(200);

    mainController = $controller('MainController', {
      '$rootScope': $rootScope,
      'hotelFactory': hotelFactoryMock,
      'datesOfStayFactory': datesOfStayFactoryMock,
      'accommodationsFactory': accommodationsFactoryMock
    });

    totalController = $controller('TotalController', {
      '$rootScope': $rootScope,
      '$scope': totalScope,
      '$state': $state,
      'reservationService': reservationService
    });

    $rootScope.$apply();
  }));

  //Check on Controllers
  it('should have a mainController to use numToArray', function() {
    expect(mainController).not.toBe(null);
  });

  it('should have a TotalController', function() {
    expect(totalController).not.toBe(null);
  });

  //Test Model
  it('should have defaults of a HoldData which comes back from the server', function() {
    expect(totalScope.holdData instanceof Object).toBeTruthy();
  });

  it('should have defaults of a Guest Profile Model which will hold a customer\'s information', function() {
    expect(totalScope.guestProfile instanceof Object).toBeTruthy();
    expect(totalScope.guestProfile.hasOwnProperty('customer')).toBeTruthy();
    expect(totalScope.guestProfile.hasOwnProperty('guarantee')).toBeTruthy();
    expect(totalScope.guestProfile.hasOwnProperty('specialRequests')).toBeTruthy();
    expect(totalScope.guestProfile.hasOwnProperty('shareAllMarketInd')).toBeTruthy();
  });

  it('should have a collapse default to toggle Nights in Reservation', function() {
    expect(totalScope.nightsCollapse).toBeTruthy();
  });

  it('should have default State Codes for the user to select', function() {
    expect(totalScope.stateCodes[0].value).toBe('NY');
    expect(totalScope.stateCodes[1].value).toBe('NJ');
    expect(totalScope.stateCodes[2].value).toBe('CT');
  });

  it('should have default Request Codes for a reservation', function() {
    expect(totalScope.requestCodes[0].value).toBe('I would like a room on a higher floor.');
    expect(totalScope.requestCodes[1].value).toBe('I would like a non-smoking room.');
  });

  //Test Behaviour
  it('is able to increment the number of select-options elements when a customer makes a special request', function() {
    totalScope.incrementRequest();
    expect(totalScope.startRequest).toEqual(2);
  });

  it('should reset guestProfile to defaultProfile when calling bookReservation', function() {
    totalScope.guestProfile = {'filler': 'object'};
    totalScope.bookReservation();
    console.log(totalScope.guestProfile);
    expect(totalScope.guestProfile).toBe(totalScope.defaultProfile);
  });

});
