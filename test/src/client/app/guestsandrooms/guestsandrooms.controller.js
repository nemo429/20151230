
angular.module('TravelClApp')
    .controller('GuestsAndRoomsController', ['$rootScope','toaster', '$scope', '$state', 'navDataFactory', 'reservationService', 'hotelFactory',
      GuestsAndRoomsController]);

function GuestsAndRoomsController($rootScope, toaster,$scope, $state, navDataFactory, reservationService, hotelFactory){

  toaster.clear();
  $scope.$state = $state;

  var hotelInfo;
  var Reservation = reservationService.getReservation();
  var shortRes = Reservation.resGlobalInfo.guestCounts;
  $scope.ageReservation = shortRes[3].ageList;

  //If HotelDescriptiveInfo is loaded in from main controller, else call factory
  if ($rootScope.HotelDescriptiveInfo) {
    hotelInfo = $rootScope.HotelDescriptiveInfo;
    setGuests();
  } else {
    hotelFactory.getHotelInfo().then(function(data){
      $rootScope.HotelDescriptiveInfo = data;
      $rootScope.HotelDescriptiveInfo.defaultRooms = 1;
      hotelInfo = $rootScope.HotelDescriptiveInfo;
    }).finally(setGuests);
  }

  function setGuests(){
    $scope.guests = {
      maxAdults: $rootScope.numToArray(hotelInfo.maxAdults),
      maxChildren: $rootScope.numToArray(hotelInfo.maxChildren),
      //mInfants: $rootScope.numToArray(hotelInfo.maxInfants),
      maxRooms: $rootScope.numToArray(hotelInfo.maxRoomsPerBooking),
      defaultAdults: checkReservation() ? $rootScope.HotelDescriptiveInfo.defaultAdults : shortRes[0].count,
      defaultChildren: checkReservation() ? $rootScope.HotelDescriptiveInfo.defaultChildren : (shortRes[1].count + shortRes[2].count)
    };
  }

  function checkReservation(){
    var reservationDefault = (shortRes[0].count === 0) && (shortRes[1].count === 0) && (shortRes[2].count === 0);
    if (reservationDefault)
      return reservationDefault;
    else
      return false;
  }

  $scope.checkReservation = checkReservation;

  $scope.initOptions = {
    ChildArr: checkReservation() ? [] : shortRes[3].ageList
    //Adults:
    //Children:
    //Rooms:
  };

  $scope.updateChildArr = function(){
    var oldArrSize = $scope.initOptions.ChildArr.length;
    var newArrSize = $scope.initOptions.Children;

    if (oldArrSize > newArrSize) {
      for (var i = newArrSize; i < oldArrSize; i++) {
        $scope.initOptions.ChildArr.pop();
      }
    }
  };

  $scope.checkButton = function(){
    if (checkReservation())
      $scope.buttonMsg = "Confirm Guests & Rooms";
    else
      $scope.buttonMsg = "Update Guests & Rooms";
  };
  $scope.checkButton();

  $scope.updateGuests = function(){
    if (!GuestsAndRoomsForm.$invalid) {
      //console.log($scope.initOptions);
      var initOptions = $scope.initOptions;
      var guestTotal = initOptions.Adults + initOptions.Children;
      var roomTotal = initOptions.Rooms;

      reservationService.setGuests(initOptions, $scope.HotelDescriptiveInfo.maxInfantAge);

      navDataFactory.stepsById.guestsrooms.placeholder = guestTotal + ' / ' + roomTotal;
      //Pop button ng-toaster

      //method1

      //var flag = false;
      //for(var i = 0;i<$scope.initOptions.ChildArr.length;i++){
      //  if ($scope.initOptions.ChildArr[i] == null ){
      //    flag = true;
      //  }
      //}
      //if($scope.initOptions.ChildArr.length != $scope.initOptions.Children){
      //  flag=true;
      //}
      //console.log($scope.initOptions.ChildArr.length != $scope.initOptions.Children);
      //console.log($scope.initOptions.ChildArr.length);
      //console.log($scope.initOptions.Children);
      //console.log(flag);
      //if(flag){
      //  toaster.clear();
      //  toaster.error({title: "wait", body: "Please select children ages"});
      //}
      //else {
      //  toaster.clear();
      //}


      //method 2,


      var childrenSelection = [];
      angular.forEach($scope.initOptions.ChildArr,function(data){
        if (data.name)
        childrenSelection.push(data);
      })




      if(childrenSelection.length != $scope.initOptions.Children){
        toaster.clear();
        toaster.error({title: "", body: "Please select children ages"});

      }
      else {
        toaster.clear();
        $state.go('datesofstay');
      }
    }

    else {
      alert('You must fill out the necessary information for your reservation.');
      //Pop button ng-toaster
      //  console.log("good");
      //  toaster.clear();
      //  toaster.error({title: "wait", body:"Please select children ages"});
    }
  };


}
