angular.module('TravelClApp')
  .directive('calendarWeeks', calendarWeeks);

function calendarWeeks() {
  return {
    restrict: 'E',
    templateUrl: './datesofstay/calendarweeks.html',
    link: function(scope, element, attrs) {
      scope.weekIndex = attrs.weekAttribute;
    }
  }
}
