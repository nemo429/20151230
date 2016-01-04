angular.module('TravelClApp')
  .directive('calendarDays', calendarDays);

function calendarDays() {
  return {
    restrict: 'E',
    templateUrl: './datesofstay/calendardays.html',
    link: function(scope, el, attrs){
      var calDirectiveToday = moment(new Date()).format('YYYY-MM-DD');
      if(attrs.id == calDirectiveToday){
        el[0].children[0].innerHTML = 'Today';
      }
    }
  }
}
