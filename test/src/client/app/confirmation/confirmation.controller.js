angular.module('TravelClApp')
  .controller('ConfirmationController', ['$scope', '$state', 'reservationService', ConfirmationController]);

function ConfirmationController($scope, $state, reservationService) {

  $scope.$state = $state;
  $scope.myReservation = reservationService.getReservation();
  $scope.toggleConfirm = true;

  $scope.toggleCofirmView = function(){
    $scope.toggleConfirm = !$scope.toggleConfirm;
  };

  //Mock Data to populate
  if ($scope.myReservation.resGuests[0].profiles[0].customer === '') {
    $scope.myReservation.resGuests[0].profiles[0].customer = {
      surName: 'Tina',
      givenName: 'Fey',
      emails: [{
        email: 'tina.fey@gmail.com'
      }],
      telephones: [{
        phoneNumber: '+1 555-555-5555',
        phoneUseType: 1
      }],
      address: [{
        countryCode: 'United States'
      }, {
        addressLine1: '',
        addressLine2: '',
        cityName: '',
        postalCode: '',
        stateCode: '',
        useType: 3
      }]
    }
  }
  if ($scope.myReservation.resGlobalInfo.guarantee !== undefined) {
    var shortCard = $scope.myReservation.resGlobalInfo.guarantee.guaranteesAccepted[0].paymentCard.cardNumber;
    $scope.myReservation.lastFour = shortCard.slice(shortCard.length - 4);
  } else {
    $scope.myReservation.lastFour = 1234;
  }

  if ($scope.myReservation.resGlobalInfo.timeSpan.start === null) {
    var startNight = '2015-12-20';
    var endNight = '2015-12-25';
    $scope.myReservation.totalNights = Math.abs(moment(endNight).diff(moment(startNight), 'days'));
  }

  //End of mock data

}
