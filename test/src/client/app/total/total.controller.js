angular.module('TravelClApp')
  .controller('TotalController', ['$rootScope', '$scope', '$state', 'reservationService', TotalController]);

function TotalController($rootScope, $scope, $state, reservationService) {

  $scope.$state = $state;
  $scope.holdData = reservationService.getHoldData();
  //Necessary if you want default data or else populate from flow
  if ($scope.holdData.reservations[0].roomRates === undefined)
    $scope.holdData = reservationService.getOldHoldData();

  //convert holdData to totalData
  $scope.totalData = {};
  function updateReservationInfo() {

    $scope.totalData.packageTitle = 'City Adventure Package';
    $scope.totalData.roomData = enumRooms($scope.holdData.reservations[0].roomRates[0]);
    enumCalculations();

    $scope.totalData.specialRequest = ['I would like a room on a higher floor.'];

  }

  var enumRooms = function(holdRooms) {
    //Need to create check based on Reservation's numberOfUnits in holdData's reservation
    var roomsData = [];
    var roomData = {
      roomTypeName: '',
      roomPrice: '',
      datesOfStay: []
    };
    var lineTotal = 0;

    for (var i = 0; i < holdRooms.numberOfUnits; i++) {
      //roomData.roomTypeName = 'The Felipe Grande Villa';
      roomData.roomTypeName = holdRooms.roomTypeName;
      holdRooms.rates.forEach(function(el) {
        roomData.datesOfStay.push({date: moment(el.effectiveDate, "YYYY-MM-DD").format('ddd, MMM DD YYYY'), price: el.base.amountBeforeTax});
        lineTotal += Number(el.base.amountBeforeTax);
      });
      roomData.roomPrice = lineTotal;
      roomsData.push(roomData);
    }
    return roomsData;
  };

  var enumCalculations = function() {
    $scope.totalData.subtotal = Number($scope.holdData.reservations[0].total.amountBeforeTax);
    $scope.totalData.code = {codeName: 'FallSpecial2015', discount: '-100'};
    $scope.totalData.taxes = Number($scope.holdData.reservations[0].total.amountAfterTax) - Number($scope.holdData.reservations[0].total.amountBeforeTax);
    //$scope.totalData.resortFees =  Number('50.00'); //will include in future
    $scope.totalData.resortFees = 0;
    $scope.totalData.total = Number($scope.totalData.subtotal + $scope.totalData.taxes + $scope.totalData.resortFees) + Number($scope.totalData.code.discount);
  };

  updateReservationInfo();

  //page behavior
  $scope.nightsCollapse = true;
  $scope.collapseNights = function() {
    $scope.nightsCollapse = !$scope.nightsCollapse;
  };

  //TODO: Need to add in select-options
  $scope.requestCodes = [
    {
      'key': 'HF',
      'value': 'I would like a room on a higher floor.'
    }, {
      'key': 'NS',
      'value': 'I would like a non-smoking room.'
    }
  ];

  $scope.startRequest = 1;
  $scope.specialRequests = $rootScope.numToArray($scope.startRequest);
  $scope.incrementRequest = function() {
    $scope.startRequest++;
    $scope.specialRequests = $rootScope.numToArray($scope.startRequest);
  };

  $scope.stateCodes = [
    {
      key: 'NY',
      value: 'NY'
    }, {
      key: 'NJ',
      value: 'NJ'
    },{
      key: 'CT',
      value: 'CT'
    }
  ];

  $scope.bookReservation = function() {
    reservationService.setGuestTotals($scope.guestProfile);
    $state.go('confirmation');
    $scope.guestProfile = defaultProfile;
  };
  var defaultProfile = {
    customer: {
      givenName: '',
      surName: '',
      emails: [],
      telephones: [{
        phoneNumber: '',
        phoneUseType: 1
      }],
      address: [{
        countryCode: '',
        useType: 1
      }, {
        addressLine1: '',
        addressLine2: '',
        useType: 3,
        cityName: '',
        stateCode: '',
        postalCode: ''
      }]//It was a face! {O,O}
    },
    guarantee: {
      guaranteesAccepted: [{
        paymentCard: {
          cardNumber: '',
          expireDate: '',
          seriesCode: ''
        }
      }]
    },
    specialRequests: [],
    shareAllMarketInd: true
  };

  $scope.defaultProfile = defaultProfile;

  $scope.guestProfile = {
    customer: {
      givenName: '',
      surName: '',
      emails: [],
      telephones: [{
        phoneNumber: '',
        phoneUseType: 1
      }],
      address: [{
        countryCode: '',
        useType: 1
      }, {
        addressLine1: '',
        addressLine2: '',
        useType: 3,
        cityName: '',
        stateCode: '',
        postalCode: ''
      }]
    },
    guarantee: {
      guaranteesAccepted: [{
        paymentCard: {
          cardNumber: '',
          expireDate: '',
          seriesCode: ''
        }
      }]
    },
    specialRequests: [],
    shareAllMarketInd: true
  };
};
