"use strict";

describe("Accommodations", function() {
  var $rootScope,
    filter,
    $q,
    mainController,
    hotelFactoryMock,
    accommodationController,
    accScope,
    reservationService,
    state,
    $httpBackend;


  beforeEach(module('TravelClApp'));
  beforeEach(module('ui.router'));

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

  beforeEach(inject(function($injector, $controller, $state, $filter, navDataFactory, _reservationService_, _hotelFactoryMock_, datesOfStayFactoryMock, accommodationsFactoryMock, $timeout, $document) {
    $rootScope = $injector.get('$rootScope');
    filter = $injector.get('$filter');
    $q = $injector.get('$q');
    $httpBackend = $injector.get('$httpBackend');
    hotelFactoryMock = _hotelFactoryMock_;
    accScope = $rootScope.$new();
    state = $state;
    reservationService = _reservationService_;

    $httpBackend.whenGET(/^\/.*$/).respond(200);

    mainController = $controller('MainController', {
      '$rootScope': $rootScope,
      'hotelFactory': hotelFactoryMock,
      'datesOfStayFactory': datesOfStayFactoryMock,
      'accommodationsFactory': accommodationsFactoryMock
    });

    $rootScope.$apply();

    accommodationController = $controller('AccommodationController', {
      '$rootScope': $rootScope,
      '$scope': accScope,
      '$state': $state,
      '$document': $document,
      '$timeout': $timeout,
      'reservationService': reservationService,
      'navDataFactory': navDataFactory
    });

  }));

  //Check on Controllers
  it('should have a mainController controller', function() {
    expect(mainController).not.toBe(null);
  });

  it('should have a GuestsAndRoomsController controller', function() {
    expect(accommodationController).not.toBe(null);
  });

  //Test Model
  it('should have defaults from HotelDescriptiveInfo', function() {
    expect(accScope.toggleAcc instanceof Object).toBeTruthy();
  });

});
