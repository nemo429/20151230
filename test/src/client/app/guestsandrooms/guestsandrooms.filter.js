angular.module('TravelClApp')
  .filter('adultsFilter', adultsFilter)
  .filter('childrenFilter', childrenFilter)
  .filter('infantsFilter', infantsFilter)
  .filter('roomsFilter', roomsFilter);

function adultsFilter(){
  return function(number){
    if(number === 1)
      return number + ' adult';
    else
      return number + ' adults';
  }
}

function childrenFilter(){
  return function(number){
    if(number === 1)
      return number + ' child';
    else
      return number + ' children';
  }
}

function infantsFilter(){
  return function(number){
    if(number === 1)
      return number + ' infant';
    else
      return number + ' infants';
  }
}

function roomsFilter(){
  return function(number){
    if(number === 1)
      return number + ' room';
    else
      return number + ' rooms';
  }
}
