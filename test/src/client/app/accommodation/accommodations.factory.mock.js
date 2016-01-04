(function() {
  angular.module('TravelClApp')
    .factory('accommodationsFactoryMock', accommodationsFactory);

  function accommodationsFactory($q) {
    return {
      getAllRatesAvail: function() {
        return $q.when(rateAvail);
      },
      getAllPackageAvail: function() {
        return $q.when(packageAvail);
      }
    }
  }

  var rateAvail = {
    "hotelCode": 1234,
    "languageCode": "EN_US",
    "currencyCode": "USD",
    "roomStays": {
      "ratePlans": [
        {
          "ratePlanName": "Best Available Rate",
          "ratePlanId": 100,
          "ratePlanType": "REGULAR",
          "leadRate": 160,
          "sortOrder": 1
        },
        {
          "ratePlanName": "AAA",
          "ratePlanId": 101,
          "ratePlanType": "REGULAR",
          "leadRate": 150,
          "sortOrder": 2
        }
      ],
      "roomCategories": [
        {
          "categoryName": "Main Tower",
          "categoryId": 200,
          "sortOrder": 1
        },
        {
          "categoryName": "Private Villas",
          "categoryId": 300,
          "sortOrder": 2
        }

      ],
      "roomTypes": [
        {
          "roomTypeName": "The Felipe Grand Villa",
          "description": "Our largest and most luxurious suite in the hotel features sweeping views over the mountains and ocean, a large open floor plan with a separate seating area, an Italian marble bathroom and a wraparound terrace.",
          "roomTag": "Most Popular",
          "averageRate": 235,
          "ratePlanId" : 100,
          "ratePlanType" : "REGULAR",
          "roomTypeCode" : 1000,
          "images": [
            {
              "imageSource": "images/accommodations/felipe@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            },
            {
              "imageSource": "http://localhost",
              "type": "IMAGE",
              "sortOrder": 2
            },
            {
              "imageSource": "http://localhost",
              "type": "IMAGE",
              "sortOrder": 3
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "2 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "2.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,035 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Blow Dryer",
              "image": {
                "imageSource": "/assets/images/icons/dryer.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Paseo de Gracia Suite",
          "description": "Cool suite with one king bed",
          "roomTag": "Recommended",
          "averageRate": 210,
          "ratePlanId" : 100,
          "ratePlanType" : "REGULAR",
          "roomTypeCode" : 1001,
          "images": [
            {
              "imageSource": "images/accommodations/paseo@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Zen Standard",
          "description": "Very Zen and Relaxing Room",
          "roomTag": "Best Value",
          "averageRate": 210,
          "ratePlanId" : 100,
          "ratePlanType" : "REGULAR",
          "roomTypeCode" : 1002,
          "images": [
            {
              "imageSource": "images/accommodations/zen@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Zen King",
          "description": "King Bed here",
          "roomTag": "Recommended",
          "averageRate": 190,
          "categoryId" : 200,
          "ratePlanId" : 100,
          "ratePlanType" : "REGULAR",
          "roomTypeCode" : 1003,
          "images": [
            {
              "imageSource": "images/accommodations/zen-king@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Gaudi Standard",
          "description": "King Bed here",
          "roomTag": "Recommended",
          "averageRate": 180,
          "categoryId" : 200,
          "ratePlanId" : 100,
          "ratePlanType" : "REGULAR",
          "roomTypeCode" : 1004,
          "images": [
            {
              "imageSource": "images/accommodations/gaudi@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Work King Suite",
          "description": "King Bed here",
          "roomTag": "Recommended",
          "averageRate": 185,
          "categoryId" : 200,
          "ratePlanId" : 100,
          "ratePlanType" : "REGULAR",
          "roomTypeCode" : 1005,
          "images": [
            {
              "imageSource": "/images/accommodations/work-king@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "The Felipe Grand Villa",
          "description": "Modified for Villa. Our largest and most luxurious suite in the hotel features sweeping views over the mountains and ocean, a large open floor plan with a separate seating area, an Italian marble bathroom and a wraparound terrace.",
          "roomTag": "Most Popular",
          "averageRate": 235,
          "ratePlanId" : 100,
          "categoryId" : 300,
          "ratePlanType" : "REGULAR",
          "roomTypeCode" : 1006,
          "images": [
            {
              "imageSource": "images/accommodations/felipe@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            },
            {
              "imageSource": "http://localhost",
              "type": "IMAGE",
              "sortOrder": 2
            },
            {
              "imageSource": "http://localhost",
              "type": "IMAGE",
              "sortOrder": 3
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "50 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "2000 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "40 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,035 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Blow Dryer",
              "image": {
                "imageSource": "/assets/images/icons/dryer.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Paseo de Gracia Villa",
          "description": "Cool suite with one king bed",
          "roomTag": "Recommended",
          "averageRate": 210,
          "categoryId" : 300,
          "ratePlanId" : 100,
          "ratePlanType" : "REGULAR",
          "roomTypeCode" : 1007,
          "images": [
            {
              "imageSource": "images/accommodations/paseo@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Work King Villa",
          "description": "King Bed here",
          "roomTag": "Recommended",
          "averageRate": 185,
          "categoryId" : 300,
          "ratePlanId" : 100,
          "ratePlanType" : "REGULAR",
          "roomTypeCode" : 1008,
          "images": [
            {
              "imageSource": "/images/accommodations/work-king@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        }

      ],
      "services": [
        {
          "serviceRPH" : "A1",
          "serviceName": "Breakfast Buffet",
          "shortDescription" : "Breakfast Butffet",
          "description": "Enjoy tons of food, the best you'll find, and it's all you can eat.",
          "serviceInventoryCode" : "ENHANCEMENT",
          "serviceRate": 20
        }
      ]
    }
  };

  var packageAvail = {
    "hotelCode": 1234,
    "languageCode": "EN_US",
    "currencyCode": "USD",
    "roomStays": {
      "ratePlans": [
        {
          "ratePlanName": "Best Available Rate",
          "ratePlanId": 100,
          "ratePlanType": "REGULAR",
          "leadRate": 160,
          "sortOrder": 1
        },
        {
          "ratePlanName": "AAA",
          "ratePlanId": 101,
          "ratePlanType": "REGULAR",
          "leadRate": 150,
          "sortOrder": 2
        }
      ],
      "packages" : [
        {
          "packageCode" : "900",
          "packageName" : "City Adventure Package",
          "description" : "Experience Barcelona views in two different ways – by tower and by sea. After you finish lunch, you can use your timed tickets to the legendary cathedral, the Sagrada Familia as well as passes for a boat tour around the waters of the Mediterranean.",
          "packageTag" : "Recommended",
          "lowestRate" : 320,
          "sortOrder" : 1,
          "image" : {
            "imageSource": "/assets/images/accommodations/barcelona-church@1x.jpg",
            "type": "IMAGE"
          },
          "serviceRPHs" : [
            {
              "rph" : "A1",
              "sortOrder" : 1
            },
            {
              "rph" : "A3",
              "sortOrder" : 2
            }
          ]
        },
        {
          "packageCode" : "901",
          "packageName" : "Xarello Package",
          "description" : "Experience Cava wine country like a local. Featuring a guided wine tour and tasting of three of the top Cava producers in Penedes as well as a picnic lunch in the vineyards themselves, this is not to be missed on your trip to Barcelona.",
          "lowestRate" : 300,
          "sortOrder" : 2,
          "image" : {
            "imageSource": "/assets/images/accommodations/xarello@1x.jpg",
            "type": "IMAGE"
          },
          "serviceRPHs" : [
            {
              "rph" : "A2",
              "sortOrder" : 1
            },
            {
              "rph" : "A3",
              "sortOrder" : 2
            },
            {
              "rph" : "A1",
              "sortOrder" : 3
            }
          ]
        }
      ],
      "roomCategories": [
        {
          "categoryName": "Main Tower",
          "categoryId": 200,
          "sortOrder": 1
        },
        {
          "categoryName": "Private Villas",
          "categoryId": 300,
          "sortOrder": 2
        }
      ],
      "roomTypes": [
        {
          "roomTypeName": "The Felipe Grand Villa",
          "description": "Our largest and most beautiful suite",
          "roomTag": "Recommended",
          "averageRate": 235,
          "ratePlanId" : 900,
          "ratePlanType" : "PACKAGE",
          "roomTypeCode" : 1000,
          "sortOrder" : 5,
          "images": [
            {
              "imageSource": "images/accommodations/felipe@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            },
            {
              "imageSource": "http://localhost",
              "type": "IMAGE",
              "sortOrder": 2
            },
            {
              "imageSource": "http://localhost",
              "type": "IMAGE",
              "sortOrder": 3
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "2 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "2.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,035 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Blow Dryer",
              "image": {
                "imageSource": "/assets/images/icons/dryer.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Paseo de Gracia Suite",
          "description": "Cool suite with one king bed",
          "roomTag": "Recommended",
          "averageRate": 210,
          "ratePlanId" : 900,
          "ratePlanType" : "PACKAGE",
          "roomTypeCode" : 1001,
          "sortOrder" : 10,
          "images": [
            {
              "imageSource": "images/accommodations/paseo@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Zen Standard",
          "description": "Very Zen and Relaxing Room",
          "averageRate": 210,
          "ratePlanId" : 901,
          "ratePlanType" : "PACKAGE",
          "roomTypeCode" : 1002,
          "sortOrder" : 15,
          "images": [
            {
              "imageSource": "images/accommodations/zen@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Zen King",
          "description": "King Bed here",
          "roomTag": "Recommended",
          "averageRate": 190,
          "categoryId" : 200,
          "ratePlanId" : 900,
          "ratePlanType" : "PACKAGE",
          "roomTypeCode" : 1004,
          "sortOrder" : 20,
          "images": [
            {
              "imageSource": "images/accommodations/zen-king@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Gaudi Standard",
          "description": "King Bed here",
          "roomTag": "Recommended",
          "averageRate": 180,
          "categoryId" : 200,
          "ratePlanId" : 900,
          "ratePlanType" : "PACKAGE",
          "roomTypeCode" : 1005,
          "sortOrder" : 25,
          "images": [
            {
              "imageSource": "images/accommodations/gaudi@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        },
        {
          "roomTypeName": "Work King Suite",
          "description": "King Bed here",
          "roomTag": "Recommended",
          "averageRate": 185,
          "categoryId" : 300,
          "ratePlanId" : 901,
          "ratePlanType" : "PACKAGE",
          "roomTypeCode" : 1006,
          "sortOrder" : 30,
          "images": [
            {
              "imageSource": "/images/accommodations/work-king@1x.jpg",
              "type": "IMAGE",
              "sortOrder": 1
            }
          ],
          "roomFeatures": [
            {
              "roomFeature": "1 King Beds",
              "image": {
                "imageSource": "/assets/images/icons/bed.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1.5 baths",
              "image": {
                "imageSource": "/assets/images/icons/toilet.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "4 people",
              "image": {
                "imageSource": "/assets/images/icons/occupant.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "1,000 SQ FT",
              "image": {
                "imageSource": "/assets/images/icons/measuring-square.svg",
                "type": "ICON"
              }
            }
          ],
          "amenities": [
            {
              "roomFeature": "Free Wifi",
              "image": {
                "imageSource": "/assets/images/icons/wifi.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Mini Bar",
              "image": {
                "imageSource": "/assets/images/icons/minibar.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Room Service",
              "image": {
                "imageSource": "/assets/images/icons/room-service.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "A/C",
              "image": {
                "imageSource": "/assets/images/icons/ac-unit.svg",
                "type": "ICON"
              }
            },
            {
              "roomFeature": "Safe",
              "image": {
                "imageSource": "/assets/images/icons/safe.svg",
                "type": "ICON"
              }
            }
          ]
        }
      ],
      "services": [
        {
          "serviceRPH" : "A1",
          "serviceName": "Picnic",
          "serviceSummary" : "Picnic for 4",
          "serviceTypeDescription": "Take a walk through the various gardens and have a picnic",
          "serviceInventoryCode" : "PACKAGE_INCLUSION",
          "image" : {
            "imageSource": "/images/icons/food.svg",
            "type": "ICON"
          }
        },
        {
          "serviceRPH" : "A2",
          "serviceName": "Mediterranean Cruise",
          "serviceSummary" : "4-hour sunset boat tour",
          "serviceTypeDescription": "Journey accross the waves of the Mediterranean.",
          "serviceInventoryCode" : "PACKAGE_INCLUSION",
          "image" : {
            "imageSource": "/images/icons/cruise.svg",
            "type": "ICON"
          }
        },
        {
          "serviceRPH" : "A3",
          "serviceName": "Fancy Dinner",
          "serviceSummary" : "Dinner for 4 at the hotel restaurant",
          "serviceTypeDescription": "Treat your taste buds to a wild ride for 4 people at Chez Pix",
          "serviceInventoryCode" : "PACKAGE_INCLUSION",
          "image" : {
            "imageSource": "/images/icons/food.svg",
            "type": "ICON"
          }
        }
      ]
    }
  };

})();
