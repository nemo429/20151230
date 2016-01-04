angular.module('TravelClApp')
  .directive('intlBar', intlBar);

function intlBar() {
  return {
    restrict: 'E',
    templateUrl: './international/international.html',
    controller: InternationalController
  }
};

