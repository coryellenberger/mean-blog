(function() {

  angular.module('lodash', [])
         .factory('_', lodashFactory);

  function lodashFactory() {
    return window._; // Lodash must already be loaded on the page
  }

})();
