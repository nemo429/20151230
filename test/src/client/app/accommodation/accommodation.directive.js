angular.module('TravelClApp')
  .directive('accommodationGridRow', accommodationGridRow)
  .directive('accommodationListRow', accommodationListRow)
  .directive('accommodationGrid', accommodationGrid)
  .directive('accommodationGridPackage', accommodationGridPackage)
  .directive('accommodationList', accommodationList)
  .directive('accommodationListPackage', accommodationListPackage)
  .directive('accommodationRoomDetail', accommodationRoomDetail);


function accommodationGridRow() {
  return {
    restrict: 'E',
    templateUrl: './accommodation/accommodationGridRow.html',
    link: function(scope, el, attrs){
      scope.gridRow = attrs.specificRow;
    }
  }
}

function accommodationListRow() {
  return {
    restrict: 'E',
    templateUrl: './accommodation/accommodationListRow.html',
    link: function(scope, el, attrs){
      scope.gridRow = attrs.specificRow;
    }
  }
}

function accommodationGrid() {
  return {
    restrict: 'E',
    templateUrl: './accommodation/accommodationGrid.html'
  }
}

function accommodationGridPackage() {
  return {
    restrict: 'E',
    templateUrl: './accommodation/accommodationGridPackage.html'
  }
}

function accommodationList() {
  return {
    restrict: 'E',
    templateUrl: './accommodation/accommodationList.html'
  }
}

function accommodationListPackage() {
  return {
    restrict: 'E',
    templateUrl: './accommodation/accommodationListPackage.html'
  }
}

function accommodationRoomDetail() {
  return {
    restrict: 'E',
    templateUrl: './accommodation/accommodationRoomDetail.html'
  }
}
