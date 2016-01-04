angular.module('TravelClApp')
  .controller('InternationalController', ['$rootScope', '$scope', 'hotelFactory', InternationalController]);

function InternationalController($rootScope, $scope, hotelFactory){

  $scope.opLanguages = [];
  $scope.opCurrencies = [];
  hotelFactory.getHotelInfo().then(function(data){
    data.currencies.forEach(function(el){
      $scope.opCurrencies.push(el.something);

    });
    data.languages.forEach(function(el){
      var formattedDescription = intlFormatter(el.description, ' ');
      var formattedLanguageCode = intlFormatter(el.languageCode, '_');
      $scope.opLanguages.push({
        description: formattedDescription,
        languageCode: formattedLanguageCode
      });
    });
    if ($rootScope.intLang === undefined && $rootScope.intCurrency === undefined) {
      data.languages.forEach(function(langEl){
        if (langEl.isPrimaryLanguage) {
          $scope.defaultLang = $rootScope.intLang = {
            description: intlFormatter(langEl.description, ' '),
            languageCode: intlFormatter(langEl.languageCode, '_')
          }
        }
      });

      $scope.defaultCurrency = $rootScope.intCurrency = intlFormatter(data.currency.currencyCode, '_');

      $scope.intlSelect = {
        lang: $scope.defaultLang,
        curr: $scope.defaultCurrency
      };
    }
  });

  $scope.toggleIntl = function(){
    $rootScope.toggle.intlMenu = !$rootScope.toggle.intlMenu;
    $rootScope.toggle.collapse = true;
  };

  $scope.changeIntl = function(){
    $rootScope.intLang = $scope.intlSelect.lang;
    $rootScope.intCurrency = $scope.intlSelect.curr;
    $scope.toggleIntl();
  };

  $scope.intlFormatter = intlFormatter;

  function intlFormatter(item, symbol){
    return item.split(symbol)[0];
  }
}
