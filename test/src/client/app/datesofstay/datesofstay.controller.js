angular.module('TravelClApp')
    .controller('DatesOfStayController', ['$rootScope', '$scope', 'toaster','$state', 'navDataFactory',
      'reservationService',
      DatesOfStayController]);

function DatesOfStayController($rootScope, $scope,toaster, $state, navDataFactory, reservationService) {

  $scope.$state = $state;
  $scope.startDate = null;
  $scope.endDate = null;
  $scope.today = new Date();
  var numCellsCalendar = 35;
  $scope.calendarCells = $rootScope.numToArray(numCellsCalendar);
  $scope.currentYear = $scope.today.getFullYear();
  var currentDay = $scope.today.getDate();
  var currentMonth = $scope.today.getMonth() + 1;
  var dayStringFormat = 'YYYY-MM-DD';

  var todaysDate = $scope.currentYear + '-' + currentMonth + '-' + formatMyNumber(currentDay); //2015-11-30
  $scope.currentMonthName = moment(todaysDate).format('MMMM');
  var numDaysInMonth = daysInMonth(currentMonth, $scope.currentYear);
  var monthStartDay = new Date($scope.currentYear, currentMonth - 1, 1).getDay(); //day of the week starting at 0
  // calendarDayDate is used in the calendardays.html template
  $scope.calendarDayDate = $rootScope.numToArray(numDaysInMonth);
  $scope.calendarDayDate = $scope.calendarDayDate.map(function(num) {
    return formatMyNumber(num + 1);
  });

  startCalendarObj();
  parseCalendarData();

  var Reservation = reservationService.getReservation();
  var reservationStart = Reservation.resGlobalInfo.timeSpan.start;
  var reservationEnd = Reservation.resGlobalInfo.timeSpan.end;
  setTimeout(function() {
    if (reservationStart !== null && reservationEnd !== null) {
      var cachedDate;
      applyStyles(reservationStart, 'is-start-date');
      applyStyles(reservationEnd, 'is-end-date');
      var dateRange = moment(reservationEnd).diff(moment(reservationStart), 'days');
      for (var i = 1; i < dateRange; i++) {
        cachedDate = moment(reservationStart, dayStringFormat).add(i, 'day').format(dayStringFormat);
        applyStyles(cachedDate, 'is-in-range');
      }
      $scope.startDate = reservationStart;
      $scope.endDate = reservationEnd;
      $scope.buttonMsg = 'Update Dates of Stay';
    } else {
      $scope.buttonMsg = 'Confirm Dates of Stay';
    }
  }, 1);

  $scope.applyDefaultClasses = function(calObj) {
    if (typeof calObj == 'object') {
      if (calObj.date == todaysDate) {
        calObj.todayDate = true;
        calObj.cellHeader = 'Today';
      }
      else if (moment(calObj.date) < moment(todaysDate)) {
        calObj.disabledDate = true;
        calObj.pastDate = true;
      }
      else if (calObj.status == "NotAvailableForSale") {
        calObj.disabledDate = true;
        calObj.soldOutDate = true;
      }else if (calObj.date === undefined){
        calObj.blankDate = true;
        calObj.disabledDate = true;
      }
    }
  };

  function formatMyNumber(num) {
    var formattedNumber = num + "";
    if (formattedNumber.length === 1)
      return "0" + formattedNumber;
    else
      return formattedNumber;
  }

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  function parseCalendarData() {
    var calendarData = $rootScope.BasicAvailbilityInfo.dates;
    $scope.calendarCells.forEach(function(calObj, calIndex) { //el, i, arr
      if (calObj.dayIndex) {
        var calMatch = $scope.currentYear + '-' + currentMonth + '-' + calObj.dayIndex;
        $scope.calendarCells[calIndex] = _.merge(_.where(calendarData, {date: calMatch})[0], $scope.calendarCells[calIndex]);
        setTodayHeader(calIndex);
      }
    });
  }

  //Create the calendarCells scope array for month
  function startCalendarObj() {
    for (var i = 0; i < numCellsCalendar; i++) {
      $scope.calendarCells[i] = {
        dayIndex: $scope.calendarDayDate[i - monthStartDay],
        startDate: false,
        endDate: false,
        inRangeDate: false,
        soldOutDate: false,
        disabledDate: false,
        pastDate: false,
        todayDate: false,
        blankDate: false
      }
    }
  }

  $scope.startDate = null;
  $scope.endDate = null;
  $scope.selectDates = function(selectedData) {
    var selectedDate = selectedData.date;
    if (selectedDate) {
      //clear if selectDate is equal to startDate (? and there is no endDate)
      if (!!$scope.startDate && selectedData.date === $scope.startDate) {
        clearDatesAndStyling();
        return;
      }

      //If selectedDate is sold out clearDatesAndStyling
      if (selectedData.status === "NotAvailableForSale") {
        clearDatesAndStyling();
        return;
      }
      //Disallow clicks on past days
      if (moment(selectedDate) < moment(todaysDate)) {
        return;
      }

      //Check to make sure that date exists or else
      if ($scope.startDate && $scope.endDate) {
        //IF HAVE START AND END DATE CLEAR EVERYTHING
        clearDatesAndStyling();
      } else if ($scope.startDate && !$scope.endDate) {
        //IF NO END DATE
        var minimumLengthOfStay = $rootScope.BasicAvailbilityInfo.minimumLengthOfStay;
        var lenOfStay = Math.abs(moment(selectedDate).diff(moment($scope.startDate), 'days'));
        if (lenOfStay >= minimumLengthOfStay) {
          toaster.clear();
          var dayIdString = moment($scope.startDate, dayStringFormat).format(dayStringFormat);
          if (moment(selectedDate, dayStringFormat) < moment($scope.startDate, dayStringFormat)) {
            // convert dates for comparison
            $scope.endDate = $scope.startDate;
            $scope.startDate = selectedDate;
            applyStyles($scope.startDate, 'is-start-date');
          } else {
            $scope.endDate = selectedDate;
          }

          applyStyles($scope.endDate, 'is-end-date');
          for (var i = 1; i <= lenOfStay - 1; i++) {
            //Check to make sure date in range is not sold out
            $rootScope.BasicAvailbilityInfo.dates.forEach(function(el) {
              if (el.status === 'NotAvailableForSale') {
                if (dayIdString == el.date) {
                  clearDatesAndStyling();
                  console.log('You cannot select this date range');
                  return;
                }
              }
            });
            dayIdString = moment($scope.startDate, dayStringFormat).add(i, 'day').format(dayStringFormat);
            applyStyles(dayIdString, 'is-in-range');
          }
        }
        else {
          //ng-toaster
          toaster.clear();
          toaster.error({title: "", body: "Whoops!There is a " + minimumLengthOfStay + " days minimum length of stay for this arrival date."});


          console.log("Please select another checkout date:\nOur minimum length of stay is " + minimumLengthOfStay + " nights");
        }
      } else {
        //SET START DATE
        $scope.startDate = selectedDate;
        applyStyles($scope.startDate, 'is-start-date');
      }
    }
  };

  function applyStyles(date, styleType) {
    var i = _.findIndex($scope.calendarCells, function(el) {
      return el.date == date;
    });
    if (i > 0) {//Because i may be negative -1
      switch (styleType) {
        case 'is-start-date':
          $scope.calendarCells[i].startDate = true;
          $scope.calendarCells[i].endDate = false;
          $scope.calendarCells[i].inRangeDate = false;
          $scope.calendarCells[i].cellHeader = "Check In";
          break;
        case 'is-end-date':
          $scope.calendarCells[i].startDate = false;
          $scope.calendarCells[i].endDate = true;
          $scope.calendarCells[i].inRangeDate = false;
          $scope.calendarCells[i].cellHeader = "Check Out";
          break;
        case 'is-in-range':
          $scope.calendarCells[i].startDate = false;
          $scope.calendarCells[i].endDate = true;
          $scope.calendarCells[i].inRangeDate = false;
          $scope.calendarCells[i].cellHeader = null;
          break;
      }
    }

  }

  function clearDatesAndStyling() {
    $scope.startDate = null;
    $scope.endDate = null;
    $scope.calendarCells.forEach(function(el, idx) {
      el.startDate = false;
      el.endDate = false;
      el.inRangeDate = false;
      el.cellHeader = null;
      setTodayHeader(idx);
    });
  }

  function setTodayHeader(idx) {
    if ($scope.calendarCells[idx].date === todaysDate)
      $scope.calendarCells[idx].cellHeader = 'Today';
  }

  $scope.submitDates = function() {
    if ($scope.startDate && $scope.endDate) {
      reservationService.setTimeSpan($scope.startDate, $scope.endDate);

      navDataFactory.stepsById.dates.placeholder = formatNavPlaceholder($scope.startDate, $scope.endDate);
      navDataFactory.stepsById.dates.startDate = $scope.startDate;
      navDataFactory.stepsById.dates.endDate = $scope.endDate;
      $state.go('accommodation');
    } else {
      alert('You must select a date range first!');
    }
  };

  function formatNavPlaceholder(startDate, endDate) {
    var monthStart = moment(startDate).format('MMM');
    var monthEnd = moment(endDate).format('MMM');
    var dateStart = moment(startDate).format('D');
    var dateEnd = moment(endDate).format('D');
    if (monthStart === monthEnd)
      return monthStart + ' ' + dateStart + '-' + dateEnd;
    else
      return monthStart + ' ' + dateStart + '-' + monthEnd + ' ' + dateEnd;
  }
}
