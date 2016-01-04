describe("Global Filters", function() {

  var filter,
    packageRPH,
    servicesPackageReference;

  beforeEach(module('TravelClApp'));
  beforeEach(
    inject(function($rootScope, $filter) {

      rootScope = $rootScope;
      filter = $filter;
      packageRPH = {
        "rph": "A2",
        "sortOrder": 1
      };
      servicesPackageReference = [
        {
          "serviceRPH": "A1",
          "serviceName": "Picnic",
          "serviceSummary": "Picnic for 4",
          "serviceTypeDescription": "Take a walk through the various gardens and have a picnic",
          "serviceInventoryCode": "PACKAGE_INCLUSION",
          "image": {
            "imageSource": "/images/icons/food.svg",
            "type": "ICON"
          }
        },
        {
          "serviceRPH": "A2",
          "serviceName": "Mediterranean Cruise",
          "serviceSummary": "4-hour sunset boat tour",
          "serviceTypeDescription": "Journey accross the waves of the Mediterranean.",
          "serviceInventoryCode": "PACKAGE_INCLUSION",
          "image": {
            "imageSource": "/images/icons/cruise.svg",
            "type": "ICON"
          }
        }];
    }));

  it('should format the imageUrl so that it can be parsed properly by the Front End', function() {
    var jsonImageUrl = '/assets/images/accommodations/xarello@1x.jpg';
    expect(filter('imageUrlFilter')(jsonImageUrl)).toBe('images/accommodations/xarello@1x.jpg');
  });
  it('should take the serviceName out of RPH', function() {
    expect(filter('packageFeatures')(packageRPH.rph, servicesPackageReference)).toBe('Mediterranean Cruise');
  });
  it('should take the image out of RPH', function() {
    expect(filter('packageFeaturesImage')(packageRPH.rph, servicesPackageReference)).toBe('/images/icons/cruise.svg');
  });
});
