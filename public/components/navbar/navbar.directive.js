(function() {
  angular.module('flotilla')
         .directive('navbarDirective', navbarDirective);

  function navbarDirective() {
    return {
      templateUrl: 'components/navbar/navbar.view.html',
      controller: function($scope) {
        $scope.title = 'Flotilla';
        $scope.tagline = 'Where we speak our mind'
      }
    };
  };

})();
