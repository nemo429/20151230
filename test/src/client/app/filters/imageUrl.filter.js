angular.module('TravelClApp')
  .filter('imageUrlFilter', imageUrlFilter);

function imageUrlFilter(){
  return function(imageUrl){
    //var imageRegex = new RegExp("images/(.*)g", 'i');
    var imageRegex = new RegExp("/assets/", 'i');
    return imageUrl.replace(imageRegex, '');
  }
}
