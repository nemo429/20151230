angular.module('TravelClApp')
  .factory('reservationService', reservationService);

function reservationService() {
  //FUTURE CONCERN: Will this become asynchronous?
  var MainReservation = {
    "hotelCode": 1234,
    "languageCode": "EN_US",
    "currencyCode": "USD",
    "reservations": [
      {
        resGlobalInfo: {
          "timeSpan": {
            "start": null,
            "end": null
          },
          "guestCounts": [
            {
              "ageQualifyingCode": "ADULT",
              "count": 0
            },
            {
              "ageQualifyingCode": "CHILD",
              "count": 0
            },
            {
              "ageQualifyingCode": "INFANT",
              "count": 0
            },
            {
              ageList: []
            }
          ],
          specialRequests: []
        },
        resGuests: [{
          profiles: [{customer: ''}]
        }]
      }
    ]
  };
  var Reservation = MainReservation.reservations[0];

  function setGuests(countData, maxInfantAge) {

    if (Reservation.resGlobalInfo.guestCounts[0].count !== countData.Adults) {
      Reservation.resGlobalInfo.guestCounts[0].count = countData.Adults;
    }
    var infantCount = 0;
    countData.ChildArr.forEach(function(el) {
      if (el <= maxInfantAge) {
        infantCount++;
      }
    });
    countData.Children = countData.Children - infantCount;
    countData.Infants = infantCount;
    if (Reservation.resGlobalInfo.guestCounts[1].count !== countData.Children) {
      Reservation.resGlobalInfo.guestCounts[1].count = countData.Children
    }
    if (Reservation.resGlobalInfo.guestCounts[2].count !== countData.Infants) {
      Reservation.resGlobalInfo.guestCounts[2].count = countData.Infants
    }
    if (Reservation.resGlobalInfo.guestCounts[3].ageList !== countData.ChildArr) {
      Reservation.resGlobalInfo.guestCounts[3].ageList = countData.ChildArr
    }
  }

  function setTimeSpan(startDate, endDate) {
    Reservation.resGlobalInfo.timeSpan = {
      start: startDate,
      end: endDate
    };
  }

  function setCodes(codeData, key) {
    Reservation[key] = codeData;
  }

  function setAccommodations(room) {
    if (Reservation.roomStays === undefined) {
      Reservation.roomStays = {ratePlans: [], roomRates: []};
    }

    //// update reservation with first room AND any other rooms with this data
    //Iterate over array and check to see if exists and increment
    if (Reservation.roomStays.ratePlans.length) {
      Reservation.roomStays.ratePlans.forEach(function(el, idx) {
        //check if element exists
        if (el.ratePlanId === room.ratePlanId) {
          console.log('duplicate');
        } else {
          Reservation.roomStays.ratePlans.push(
            {
              ratePlanId: room.ratePlanId,
              ratePlanType: room.ratePlanType
            }
          );
        }
      });
    }
    else {
      Reservation.roomStays.ratePlans.push(
        {
          ratePlanId: room.ratePlanId,
          ratePlanType: room.ratePlanType
        }
      );
    }

    //Iterate over array and check to see if roomtypecode exists and increment
    if (Reservation.roomStays.roomRates.length) {
      Reservation.roomStays.roomRates.forEach(function(el, idx) {
        //check if element exists
        if (el.roomTypeCode === room.roomTypeCode) {
          Reservation.roomStays.roomRates[idx].numberOfUnits++;
        } else {
          Reservation.roomStays.roomRates.push(
            {
              numberOfUnits: 1,
              roomTypeCode: room.roomTypeCode
            }
          );
        }
      });
    } else {
      Reservation.roomStays.roomRates.push(
        {
          numberOfUnits: 1,
          roomTypeCode: room.roomTypeCode
        }
      );
    }

    addNightsAndTotalToReservation(room);

  }

  function removeAccommodation(room) {
    // Remove one matching ratePlanId and roomTypeId from Reservation
    //indexOf ratePlanId
    var pos = _.findIndex(Reservation.roomStays.ratePlans, function(el) {
      return el.ratePlanId == room.ratePlanId;
    });
    Reservation.roomStays.ratePlans.splice(pos, 1);
    //rem from roomRates by roomTypeCode
    Reservation.roomStays.roomRates.splice(pos, 1);
  }

  function getReservation() {
    return Reservation;
  }

  // mock data
  var holdData = {
    "hotelCode": 1234,
    "languageCode": "EN_US",
    "currencyCode": "USD",
    "reservations": [
      {
        "uniqueId": 9999,
        "resGlobalInfo": {
          "timeSpan": {
            "start": "2015-11-25",
            "end": "2015-11-30"
          }
        },
        "roomStays": {
          "ratePlans": [
            {
              "ratePlanId": 0,
              "ratePlanType": "PACKAGE"
            }
          ],
          "roomRates": [
            {
              "numberOfUnits": 0,
              "roomTypeCode": 0
            }
          ]
        },
        "roomRates": [
          {
            "roomTypeCode": "0",
            "numberOfUnits": 1,
            "rates": [
              {
                "effectiveDate": " 2015-12-15",
                "unitMultiplier": 1,
                "base": {
                  "amountBeforeTax": "100.00"
                }
              },
              {
                "effectiveDate": " 2015-12-16",
                "unitMultiplier": 2,
                "base": {
                  "amountBeforeTax": "100.00"
                }
              },
              {
                "effectiveDate": " 2015-12-17",
                "unitMultiplier": 3,
                "base": {
                  "amountBeforeTax": "100.00"
                }
              }
            ]
          }
        ],
        "total": {
          "amountBeforeTax": "300.00",
          "amountAfterTax": "450.00"
        }
      }
    ]
  };

  function getHoldData() {
    // async call to server not created yet

    // TODO: assignment as mock async call to server - remove in the future
    holdData.reservations = [];
    holdData.reservations.push(Reservation);

    return holdData;
  }

  var oldAmountBeforeTax = 0, oldAmountAfterTax = 0;

  function addNightsAndTotalToReservation(room) {
    //function to send reservation data from accomodations to server
    //also temporarily mocks a backend post request
    //mock reservation to look like hold.json assumption: "amountBeforeTax": room.averageRate
    //[rates] info needs to come from Reservations.resGlobalInfo.timeSpan
    //Reservation.total.ammountAfterTax needs tax info in resGlobalInfo
    var start = moment(Reservation.resGlobalInfo.timeSpan.start, "YYYY-MM-DD").format('DD');
    var end = moment(Reservation.resGlobalInfo.timeSpan.end, "YYYY-MM-DD").format('DD');
    var nights = Number(end) - Number(start);
    Reservation.total = {amountBeforeTax: 0, amountAfterTax: 0};

    //Needed to finish building hold.json
    if (Reservation.roomRates !== undefined) {
      //NOTE: Likely taken care of in server but when max rooms > 2 then must change logic
      var subMultiplier = 2;
      Reservation.roomRates[0].numberOfUnits = 2;
    }
    else {
      var subMultiplier = 2;
      Reservation.roomRates = [];
      Reservation.roomRates[0] = {
        "roomTypeCode": room.roomTypeCode,
        "roomTypeName": room.roomTypeName,
        "numberOfUnits": 1,
        rates: []
      };

      for (var i = 0; i < nights; i++) {
        var currentDate = moment(Reservation.resGlobalInfo.timeSpan.start, 'YYYY-MM-DD').add(i, 'days').format('YYYY-MM-DD');
        Reservation.roomRates[0].rates.push({
          "effectiveDate": currentDate, //"2015-12-15", //start to end
          "unitMultiplier": 1,
          "base": {
            "amountBeforeTax": room.averageRate
          }
        });
        oldAmountBeforeTax += Reservation.roomRates[0].rates[0].base.amountBeforeTax;
        oldAmountAfterTax = oldAmountBeforeTax;
      }
    }

    //no packageTitle is passed to mimic server hold.json response
    //no roomTypeName is passed to mimic server hold.json response

    Reservation.total.amountBeforeTax = oldAmountBeforeTax * subMultiplier;
    Reservation.total.amountAfterTax += oldAmountAfterTax * subMultiplier;

    //inspect Reservation
  }

  function getOldHoldData() {
    return {
      "hotelCode": 1234,
      "languageCode": "EN_US",
      "currencyCode": "USD",
      "reservations": [
        {
          "uniqueId": 9999,
          "resGlobalInfo": {
            "timeSpan": {
              "start": "2015-11-25",
              "end": "2015-11-30"
            }
          },
          "roomStays": {
            "ratePlans": [
              {
                "ratePlanId": 0,
                "ratePlanType": "PACKAGE"
              }
            ],
            "roomRates": [
              {
                "numberOfUnits": 0,
                "roomTypeCode": 0
              }
            ]
          },
          "roomRates": [
            {
              "roomTypeCode": "0",
              "numberOfUnits": 2,
              "rates": [
                {
                  "effectiveDate": " 2015-12-15",
                  "unitMultiplier": 1,
                  "base": {
                    "amountBeforeTax": "100.00"
                  }
                },
                {
                  "effectiveDate": " 2015-12-16",
                  "unitMultiplier": 2,
                  "base": {
                    "amountBeforeTax": "100.00"
                  }
                },
                {
                  "effectiveDate": " 2015-12-17",
                  "unitMultiplier": 3,
                  "base": {
                    "amountBeforeTax": "100.00"
                  }
                }
              ]
            }
          ],
          "total": {
            "amountBeforeTax": "300.00",
            "amountAfterTax": "450.00"
          }
        }
      ]
    }
  }

  function setGuestTotals(guestTotalData) {
    Reservation.resGuests[0].profiles[0].customer = guestTotalData.customer;
    Reservation.resGuests[0].profiles[0].shareAllMarketInd = guestTotalData.shareAllMarketInd;
    Reservation.resGlobalInfo.guarantee = guestTotalData.guarantee;
    Reservation.resGlobalInfo.specialRequests = guestTotalData.specialRequests;
    //console.log(MainReservation);
  }

  return {
    setGuests: setGuests,
    setTimeSpan: setTimeSpan,
    setCodes: setCodes,
    removeAccommodation: removeAccommodation,
    setAccommodations: setAccommodations,
    getReservation: getReservation,
    getHoldData: getHoldData,
    getOldHoldData: getOldHoldData,
    setGuestTotals: setGuestTotals
  }
}
