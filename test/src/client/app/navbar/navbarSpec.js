describe("Navbar", function(){

  var mainController,
    navDataFactory,
    navbarController,
    hotelFactory,
    mainScope,
    navScope,
    rootScope,
    state;

  beforeEach(module('TravelClApp'));

  beforeEach(inject(function($controller, $rootScope, $state, $httpBackend, _navDataFactory_, _hotelFactory_){
    navDataFactory = _navDataFactory_;
    hotelFactory = _hotelFactory_;
    mainScope = $rootScope.$new(true);
    navScope = mainScope.$new();
    rootScope = $rootScope;
    state = $state;
    // instantiate MainController
    mainController = $controller('MainController', {
        '$scope': mainScope,
        '$rootScope': $rootScope,
        '$httpBackend': $httpBackend
      }
    );

    navbarController = $controller('NavbarController', {
      '$rootScope': $rootScope,
      '$scope': navScope,
      '$state': $state,
      'navDataFactory': navDataFactory
    });
  }));

  //Check on Controllers
  it('should have a MainController controller', function(){
    expect(mainController).not.toBe(null);
  });

  it('should have a NavbarController controller', function(){
    expect(navbarController).not.toBe(null);
  });

  //Test Model
  it('NavbarController.navData is not null', function(){
    //expect(navScope.navData).toBe(navDataFactory.stepsById);
    expect(rootScope.navData).toBe(navDataFactory.stepsById);
  });

  it('navDataFactory returns an object', function(){
    expect(navDataFactory instanceof Object).toBeTruthy();
  });

  it('navDataFactory returns an object', function(){
    expect(navDataFactory instanceof Object).toBeTruthy();
  });

  it('should have a default Toggle set for the Navbar', function(){
    expect(rootScope.toggle instanceof Object).toBeTruthy();
    expect(rootScope.toggle.intlMenu).toBeFalsy();
    expect(rootScope.toggle.collapse).toBeTruthy();
  });

  //Test Behaviour
  it('hotelFactory returns an object with a function getHotelInfo', function(){
    expect(hotelFactory instanceof Object).toBeTruthy();
    expect(hotelFactory.getHotelInfo).toEqual(jasmine.any(Function));
  });

  it('openDrawer should set the accommodationDraw to true', function(){
    rootScope.openDrawer();
    expect(rootScope.toggle.accommodationDraw).toBeTruthy();
  });
  it('closeDrawer should set the accommodationDraw to false', function(){
    rootScope.closeDrawer();
    expect(rootScope.toggle.accommodationDraw).toBeFalsy();
  });

});
