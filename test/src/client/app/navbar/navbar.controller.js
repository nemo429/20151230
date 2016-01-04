angular.module('TravelClApp')
  .controller('NavbarController', ['$rootScope', '$scope', '$state', 'navDataFactory', 'reservationService', NavbarController]);

function NavbarController($rootScope, $scope, $state, navDataFactory, reservationService) {

  // navData is the navbar Data Model temporarily initialized by navDataFactory (a backend mock)
  $rootScope.navData = navDataFactory.stepsById;
  //$scope.navData = navDataFactory.stepsById;

  $scope.goToView = function(state) {
    $state.go(state);
    $rootScope.toggle.collapse = true;
  };

  $rootScope.toggle = {
    intlMenu: false,
    collapse: true,
    accommodationDraw: false
  };
  $rootScope.openDrawer = function(){
    $rootScope.toggle.accommodationDraw = true
  };
  $rootScope.closeDrawer = function(){
    $rootScope.toggle.accommodationDraw = false
  };

  $scope.removeAccommodation = function(room, position) {
    //NOTE: For future use if want to remove rooms from accommodation
    var shortAccRooms = navDataFactory.stepsById.accommodations.rooms;
    shortAccRooms.splice(position, 1);
    reservationService.removeAccommodation(room);
  }
}
