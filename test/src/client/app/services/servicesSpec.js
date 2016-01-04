"use strict";

describe("Reservation Service", function() {
  var $rootScope,
    filter,
    $q,
    hotelFactoryMock,
    reservationService,
    $httpBackend,
    Reservation;

  beforeEach(module('TravelClApp'));

  beforeEach(inject(function($injector, $controller, $state, $filter, navDataFactory, _reservationService_, _hotelFactoryMock_, datesOfStayFactoryMock, accommodationsFactoryMock) {
    $rootScope = $injector.get('$rootScope');
    filter = $injector.get('$filter');
    $q = $injector.get('$q');
    $httpBackend = $injector.get('$httpBackend');
    hotelFactoryMock = _hotelFactoryMock_;
    reservationService = _reservationService_;

    Reservation = reservationService.getReservation();
  }));

  //Check on Model
  it('should have a default Reservation Object', function() {
    expect(Reservation instanceof Object).toBeTruthy();
  });
  it('should have a default Hold Mock Object', function() {
    //NOTE: May fail in the future as this information will eventually be removed.
    expect(reservationService.getOldHoldData instanceof Object).toBeTruthy();
  });
  it('should have a 0 count present for each age range in the Reservation Object', function() {
    console.log(Reservation);
    expect(Reservation.resGlobalInfo.guestCounts[0].count).toBe(0);
    expect(Reservation.resGlobalInfo.guestCounts[1].count).toBe(0);
    expect(Reservation.resGlobalInfo.guestCounts[2].count).toBe(0);
  });

  //Check on Behaviour
  it('should set the start and end when calling setTimeSpan', function() {
    var startSpan = '2015-12-20';
    var endSpan = '2015-12-25';
    reservationService.setTimeSpan(startSpan, endSpan);
    expect(Reservation.resGlobalInfo.timeSpan.start).toBe(startSpan);
    expect(Reservation.resGlobalInfo.timeSpan.end).toBe(endSpan);
  });

  it('should set the number of guests according to age range with setGuests', function() {
    var newCount = {
      Adults: 5,
      Children: 4,
      ChildArr: [1,8,13,0]
    };
    var infantMockAge = 1;
    reservationService.setGuests(newCount, infantMockAge);
    expect(Reservation.resGlobalInfo.guestCounts[0].count).toBe(5);
    expect(Reservation.resGlobalInfo.guestCounts[1].count).toBe(2);
    expect(Reservation.resGlobalInfo.guestCounts[2].count).toBe(2);
  });

});
