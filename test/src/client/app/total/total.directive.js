angular.module('TravelClApp')
  .directive('totalRoomDetail', totalRoomDetail)
  .directive('totalReservation', totalReservation)
  .directive('totalGuestInfo', totalGuestInfo)
  .directive('totalPaymentMethod', totalPaymentMethod)
  .directive('checkoutFooter', checkoutFooter);

function totalRoomDetail() {
  return {
    restrict: 'E',
    templateUrl: './total/totalRoomDetail.html',
    replace: 'true'
  }
}

function totalReservation() {
  return {
    restrict: 'E',
    templateUrl: './total/total.reservation.html',
    replace: 'true'
  }
}

function totalGuestInfo() {
  return {
    restrict: 'E',
    templateUrl: './total/total.guestInfo.html',
    replace: 'true'
  }
}

function totalPaymentMethod() {
  return {
    restrict: 'E',
    templateUrl: './total/total.paymentMethod.html',
    replace: 'true'
  }
}

function checkoutFooter() {
  return {
    restrict: 'E',
    templateUrl: './total/total.footer.html',
    replace: 'true'
  }
}
