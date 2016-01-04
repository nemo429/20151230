angular.module('TravelClApp')
  .directive('confirmReservation', confirmReservation)
  .directive('confirmEnhance', confirmEnhance)
  .directive('confirmGetAround', confirmGetAround)


function confirmReservation() {
  return {
    restrict: 'E',
    templateUrl: './confirmation/confirmReservation.html'
  }
}

function confirmEnhance() {
  return {
    restrict: 'E',
    templateUrl: './confirmation/confirmEnhance.html'
  }
}

function confirmGetAround() {
  return {
    restrict: 'E',
    templateUrl: './confirmation/confirmGetAround.html'
  }
}