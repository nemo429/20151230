angular.module('TravelClApp')
  .filter('calRatesFilter', calRatesFilter);

function calRatesFilter(){
  return function(calObj){
    if(calObj.status === "NotAvailableForSale")
      return calObj.displayStatus;
    else if(calObj.status === "AvailableForSale")
      return 'From $' + calObj.rate;
  }
}


//HotelDescriptiveInfo currency selector displayFormat **What is "something?!"
//"currency": {
//  "currencyCode": "USD",
//    "displayFormat": "############.##"
//},
//"currencies": [
//  {
//    "something": "USD",
//    "displayFormat": "############.##"
//  },
//  {
//    "something": "EUR",
//    "displayFormat": "############.##"
//  }
