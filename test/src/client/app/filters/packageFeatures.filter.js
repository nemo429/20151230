angular.module('TravelClApp')
  .filter('packageFeatures', packageFeatures)
  .filter('packageFeaturesImage', packageFeaturesImage);

function packageFeatures() {
  return function(serviceRPH, services) {
    var x;
    services.forEach(function(el) {
      if (serviceRPH == el.serviceRPH) {
        x = el.serviceName;
      }
    });
    return x;
  }
}

function packageFeaturesImage() {
  return function(serviceRPH, services) {
    var x;
    services.forEach(function(el) {
      if (serviceRPH == el.serviceRPH) {
        x = el.image.imageSource;
      }
    });
    return x;
  }
}
