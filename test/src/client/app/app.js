angular.module('TravelClApp',
  ['ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'toaster',
    'duScroll']);

angular.module('TravelClApp')
  .run([
    "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      return $rootScope.$stateParams = $stateParams;
    }
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
    $uiViewScrollProvider.useAnchorScroll();
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('guestsandrooms', {
        url: '/guestsandrooms',
        templateUrl: 'guestsandrooms/guestsandrooms.html',
        controller: 'GuestsAndRoomsController'
      })
      .state('datesofstay', {
        url: '/datesofstay',
        templateUrl: 'datesofstay/datesofstay.html',
        controller: 'DatesOfStayController'
      })
      .state('accommodation', {
        url: '/accommodation',
        templateUrl: 'accommodation/accommodation.html',
        controller: 'AccommodationController'
      })
      .state('accommodation.room', {
        url: '/room',
        templateUrl: 'accommodation/room.html'
      })
      .state('accommodation.package', {
        url: '/package',
        templateUrl: 'accommodation/package.html'
      })
      .state('international', {
        url: '/international',
        templateUrl: 'international/international.html',
        controller: 'InternationalController'
      })
      .state('total', {
        url: '/total',
        templateUrl: 'total/total.html',
        controller: 'TotalController'
      })
      .state('confirmation', {
        url: '/researcher-confirmation',
        templateUrl: 'confirmation/confirmation.html',
        controller: 'ConfirmationController'
      });
  });
