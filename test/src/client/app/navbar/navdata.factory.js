angular.module('TravelClApp')
  .factory('navDataFactory', navDataFactory);

function navDataFactory(){
  //May need to account for data coming from API in future
  //Could also save data from server then set this object up locally so can more easily retrieve data
  return {
    "stepsById": {
      "guestsrooms": {
        "id": "guestsrooms",
        "label": "Guests & Rooms",
        "placeholder": "Select"
      },
      "dates": {
        "id": "dates",
        "label": "Dates of Stay",
        "placeholder": "Select",
        "startDate": null,
        "endDate": null
      },
      "accommodations": {
        "id": "accommodations",
        "label": "Accommodations",
        "placeholder": "Select",
        "className": "Header-step--extended",
        "rooms": []
      },
      "total": {
        "id": "total",
        "label": "Total",
        "placeholder": "$0.00",
        "className": "Header-step--total"
      }
    },

    "steps": [
      "guestsrooms",
      "dates",
      "accommodations",
      "total"
    ]
  };

};
