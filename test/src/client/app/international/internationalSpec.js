describe("Language and Currency", function(){

  var intlController,
    navbarController,
    intlScope,
    rootScope,
    hotelFactory;

  beforeEach(module('TravelClApp'));

  beforeEach(function() {
    angular.mock.module('TravelClApp', function($provide) {
      //replace $state to avoid $http backend calls
      $provide.service('$state', function() {
        this.transitionTo = function(stateName) {
          console.log("Mock transition to: " + stateName);
        };
      });
    });
  });

  beforeEach(inject(function($controller, $rootScope, $httpBackend, hotelFactoryMock, _navDataFactory_){
    rootScope = $rootScope;
    intlScope = $rootScope.$new();
    var navScope = intlScope.$new();
    hotelFactory = hotelFactoryMock;
    navDataFactory = _navDataFactory_;

    intlController = $controller('InternationalController', {
      '$rootScope': $rootScope,
      '$scope': intlScope,
      'hotelFactory': hotelFactory
    });

    navbarController = $controller('NavbarController', {
      '$scope': navScope,
      '$rootScope': $rootScope,
      '$httpBackend': $httpBackend,
      'navDataFactory': navDataFactory
    });
  }));

  //Check on Controllers
  it('has an intlController controller', function(){
    expect(intlController).not.toBe(null);
  });

  //Test Model
  it('has async defaults', function(){
    intlScope.$apply();
    expect(intlScope.defaultLang.description).toBe(rootScope.intLang.description);
    expect(intlScope.defaultLang.description).toBe("English");
    expect(intlScope.defaultCurrency).toBe(rootScope.intCurrency);
    expect(intlScope.defaultCurrency).toBe("USD");
  });

  it('should have two empty arrays for Languages and Currencies', function(){
    expect(intlScope.opLanguages.length).toBeLessThan(1);
    expect(intlScope.opCurrencies.length).toBeLessThan(1);
  });

  //Test Behaviour
  it('should format a language using intlFormatter accordingly', function(){
    var languageDescription = 'English (US)';
    var languageCode = 'EN_US';
    expect(intlScope.intlFormatter(languageDescription, ' ')).toBe('English');
    expect(intlScope.intlFormatter(languageCode, '_')).toBe('EN');
  });

  it('changes the rootscope when calling changIntl', function(){
    intlScope.intlSelect = {
      lang: {
        description: 'French',
        languageCode: 'FR'
      },
      curr: 'EUR'
    };
    intlScope.changeIntl();
    expect(intlScope.intlSelect.lang).toBe(rootScope.intLang);
    expect(intlScope.intlSelect.curr).toBe(rootScope.intCurrency);
  });
});
