angular.module('TravelClApp')
  .directive('navBar', navBar)
  .directive('navBarAccommodationsDrawer', navBarAccommodationsDrawer);

function navBar() {
  return {
    restrict: 'E',
    templateUrl: './navbar/navbar.html',
    controller: NavbarController
    }
};

function navBarAccommodationsDrawer() {
  return {
    restrict: 'E',
    templateUrl: './navbar/navbarAccommodationsDrawer.html',
    replace: 'true'
  }
}

