angular.module('TravelClApp')
  .controller('AccommodationController', ['$rootScope', '$scope', 'toaster','$state', '$document', '$timeout', 'reservationService', 'navDataFactory',
    AccommodationController]);

function AccommodationController($rootScope, $scope,toaster, $state, $document, $timeout, reservationService, navDataFactory) {

  toaster.clear();
  $scope.$state = $state;

  $scope.toggleAcc = {
    listView: false,
    gridView: false,
    roomsView: false,
    packageView: false
  };

  $scope.goGrid = function() {
    $scope.toggleAcc.listView = false;
    $scope.toggleAcc.gridView = true;
  };
  $scope.goList = function() {
    $scope.toggleAcc.listView = true;
    $scope.toggleAcc.gridView = false;
  };

  $scope.goRooms = function() {
    $scope.toggleAcc.roomsView = true;
    $scope.toggleAcc.packageView = false;
    $state.go('accommodation.room');
    $scope.categorized = almightyRooms;
    $scope.currentPackage = null;
  };

  $scope.goPackages = function() {
    $scope.toggleAcc.roomsView = false;
    $scope.toggleAcc.packageView = true;
    $state.go('accommodation.package');
  };

  $scope.goGrid();
  $scope.goRooms();

  /*
   * ROOM CATEGORIZATION SECTION
   * */

  var localCategoryRoom = {};
  var almightyRooms;
  $scope.currentRoom = "";
  var uncategorized = [{
    categoryRooms: []
  }];
  $scope.categorized = [];
  $scope.RoomDetailSwitch = false;
  $scope.services = $rootScope.RatesAvail.roomStays.services;
  $scope.packageServices = $rootScope.PackageAvail.roomStays.services;

  //some logic to display allRooms or allPackages for different states
  var allRooms = $rootScope.RatesAvail.roomStays.roomTypes;
  $scope.allPackages = $rootScope.PackageAvail.roomStays.packages;
  $scope.$on('$stateChangeSuccess', function() {
    $scope.currentStateName = $state.$current.name;

    if ($state.$current.name === 'accommodation.room') {
      allRooms = $rootScope.RatesAvail.roomStays.roomTypes;
    }
    else if ($state.$current.name === 'accommodation.package') {
      allRooms = $rootScope.PackageAvail.roomStays.roomTypes;
    }
  });

  allRooms.forEach(function(el) {
    el.isSelected = false;
  });
  /* START SORTING ROOMS CATEGORIZED */
  allRooms.forEach(function(el) {
    //Sets uncategorized rooms
    if (!el.hasOwnProperty('categoryId')) {
      uncategorized[0].categoryRooms.push(el);
    }
  });
  $scope.categorized.push(uncategorized[0]);
  $rootScope.RatesAvail.roomStays.roomCategories.forEach(function(el) {
    //Sets categorized rooms
    localCategoryRoom = {
      name: el.categoryName,
      categoryId: el.categoryId,
      categoryRooms: []
    };
    allRooms.forEach(function(el2) {
      if (el2.categoryId == el.categoryId)
        localCategoryRoom.categoryRooms.push(el2);
    });

    $scope.categorized.push(localCategoryRoom);
  });

  assignRoomsIds(allRooms);
  function assignRoomsIds(roomsArray) {
    roomsArray = roomsArray.slice();
    var roomTypeId = 0;
    var roomsPerRow = 3;
    for (var i = 0; i < roomsArray.length; i++) {
      var row = [];
      for (var j = 0; j < roomsPerRow; j++) {
        if (roomsArray[0]) {
          roomsArray[0].id = roomTypeId;
          roomTypeId++;
          row.push(roomsArray.shift());
        } else break
      }
    }
  }

  /*
   * ROOM TOGGLING SECTION
   *
   */

  function toggleRoom(localRoom) {
    if (!localRoom.isSelected === true) {
      localRoom.isSelected = true;
    } else {
      localRoom.isSelected = false;
    }
  }

  var currentRoomId = null, thisCurrentRoom = null;
  $scope.toggleSelect = function(room) {
    var selectedRoom = room;
    var selectionId = selectedRoom.id;

    if (selectionId !== currentRoomId) {
      toggleRoom(selectedRoom);
      if (thisCurrentRoom) {
        toggleRoom(thisCurrentRoom);
      }
      currentRoomId = selectedRoom.id;
      thisCurrentRoom = selectedRoom;
    } else {
      toggleRoom(selectedRoom);
      currentRoomId = null;
      thisCurrentRoom = null;
    }
  };

  var oldGridNumber = null, currentDetailId = null;

  function toggleDetail(gridNumber) {
    $scope.myGridNumber = gridNumber;
  }

  $scope.toggleRoomDetail = function(gridNumber, room) {
    //toggle roomType selection
    $scope.toggleSelect(room);
    var selectedDetailId = room.id;

    if (oldGridNumber === gridNumber) {// then toggle Room Detail
      if (currentDetailId !== selectedDetailId) {
        //do not toggle room detail
      } else {
        toggleDetail(null);
      }
    } else { //toggle this and toggle that
      toggleDetail(gridNumber);
    }

    // switch room info
    $scope.currentRoom = room;

    // cache grid number
    oldGridNumber = $scope.myGridNumber;
    currentDetailId = selectedDetailId;

  };

  $scope.closeRoomDetail = function(room) {
    $scope.toggleRoomDetail(null, room);
    $document.scrollTopAnimated($scope.preScrollTop);
  };

  $scope.preScrollTop = null;
  $scope.scrollTo = function(rowDetailId, $event) {
    //need toggleCheck on if the element is already opened
    //need to check if it's a click on close vs click on selection
    //hidden-md-down js-sticky sticky for sm and md

    var navHeight = document.getElementsByTagName('nav')[0].offsetHeight;
    $scope.preScrollTop = $event.target.getBoundingClientRect().top - navHeight - 30;

    var navHeight = document.getElementsByTagName('nav')[0].offsetHeight;
    var myElem = document.getElementById('rowDetail' + rowDetailId);

    $document.scrollToElementAnimated(myElem, navHeight);
  };

  /*
   * NAVBAR FILTER SECTION
   * */
  var cachedAllRooms = $scope.categorized;
  var categoryIndex;
  $scope.rateAvailPlans = $rootScope.RatesAvail.roomStays.ratePlans;
  $scope.rateAvailCategories = $rootScope.RatesAvail.roomStays.roomCategories;
  $scope.navFilterData = {
    ratePlanId: $scope.rateAvailPlans[0]
  };
  $scope.roomCategoriesEnabled = !$rootScope.HotelDescriptiveInfo.roomCategoriesEnabled;
  $scope.setRatePlan = function() {
    $scope.categorized = null;
  };

  $scope.setCategory = function() {
    if ($scope.navFilterData.rateCategories == null)
      $scope.categorized = cachedAllRooms;
    else {
      cachedAllRooms.forEach(function(el, idx) {
        if ($scope.navFilterData.rateCategories.categoryId == el.categoryId) {
          $scope.categorized = [cachedAllRooms[idx]];
        }
      });
    }
  };

  $scope.setPackage = function(myPackage) {
    $scope.goRooms();
    $scope.currentPackage = myPackage;
    cachedAllRooms = $rootScope.PackageAvail.roomStays.roomTypes.filter(function(el) {
      return el.ratePlanId  == myPackage.packageCode;
    });
    $scope.categorized = [{categoryRooms: cachedAllRooms}];
  };

  // ROOMS NAVBAR
  // |--add Code <not now>
  // PACKAGES Button and PACKAGES NAVBAR
  // SUBSTATES - PACKAGES and ROOMS

  //Start the check using Guests & Rooms and Dates of Stay

  /*
   * FINAL DATA PROCESSING SECTION
   * */

  var numRoomsCheck;//need to set persistence on this

  function setDefaultsFromNavbarFactory() {
    //Apply Guests & Rooms
    var navGuestRooms = navDataFactory.stepsById.guestsrooms;
    var navAccomRoomsLength = navDataFactory.stepsById.accommodations.rooms.length;
    if (navGuestRooms.placeholder[0] !== 'S') {
      $rootScope.numberOfGuests = Number(navGuestRooms.placeholder[0]);
      $rootScope.numberOfRooms = Number(navGuestRooms.placeholder.split('/')[1].trim());
      //Set a persistence check on number of rooms
      if (navAccomRoomsLength) {//Logic or things needs fixing for proper number of rooms
        numRoomsCheck = $rootScope.numberOfRooms - navAccomRoomsLength;
      } else
        numRoomsCheck = $rootScope.numberOfRooms;
    } else {
      console.log('You need to set the number of guests for your stay!');
    }

    //Apply Dates of Stay
    var navDatesOfStay = navDataFactory.stepsById.dates;
    if (navDatesOfStay.placeholder[0] !== 'S') {
      $rootScope.numberOfDays = Math.abs(moment(navDatesOfStay.endDate).diff(moment(navDatesOfStay.startDate), 'days'));
    } else {
      console.log('You need to select the dates of stay for your trip!');
    }
  }

  setDefaultsFromNavbarFactory();

  $scope.updateAccommodations = function(room) {
    if (numRoomsCheck > 0) {
      $rootScope.openDrawer();
      if (room !== null) {
        if (!navDataFactory.stepsById.accommodations.rooms)
          navDataFactory.stepsById.accommodations.rooms = [];
        //For loop to add multiply rooms
        var roomToAdd = $rootScope.navData.guestsrooms.placeholder.split(" / ")[1];
        for(var i=0;i<roomToAdd;i++){
          navDataFactory.stepsById.accommodations.rooms.push(room);
          navDataFactory.stepsById.accommodations.placeholder = room.roomTypeName;
          reservationService.setAccommodations(room);
        }
        $timeout($rootScope.closeDrawer, 2000);
        numRoomsCheck--;
        updateTotal();

        //ng-toaster: Good Choice!
        toaster.clear();
        toaster.pop({ type:"warning",title: "",body: "Good Choice Man!!",timeout:3000});

        $state.go('total');
        if (numRoomsCheck !== 0) {
          //When the user hits the selected number of rooms booked
          //Future proof in case user selects multiple rooms individually
        }
      } else {
        alert("no accomodationData");
      }
    } else {
      alert('You cannot select anymore rooms!');
    }
  };

  function updateTotal() {
    var totalCost = 0;
    navDataFactory.stepsById.accommodations.rooms.forEach(function(el) {
      totalCost += $rootScope.numberOfDays * $rootScope.numberOfRooms * el.averageRate;
    });
    $rootScope.navData.total.placeholder = '$' + totalCost;
  };

  almightyRooms = $scope.categorized;
};
