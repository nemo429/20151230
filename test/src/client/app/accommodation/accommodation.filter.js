angular.module('TravelClApp')
    .filter('ratePlanFilter', ratePlanFilter)
    .filter('guestsFilter', guestsFilter)
    .filter('daysFilter', daysFilter)
    .filter('nightsFilter', nightsFilter);

function ratePlanFilter(){
    return function(ratePlanObj){
        return ratePlanObj.ratePlanName + ' - $' + ratePlanObj.leadRate;
    }
}

function guestsFilter(){
    return function(number){
        if(number === 1)
            return number + ' Guest';
        else
            return number + ' Guests';
    }
}

function daysFilter(){
    return function(number){
        if(number === 1)
            return number + ' Day';
        else
            return number + ' Days';
    }
}

function nightsFilter(){
    return function(number){
        if(number === 1)
            return number + ' Night';
        else
            return number + ' Nights';
    }
}
