(function () {
  // public/components/navbar/navbar.directive.js
  angular.module('flotilla')
         .directive('navbarDirective', navbarDirective)

  function navbarDirective () {
    return {
      templateUrl: 'assets/components/navbar/navbar.view.html',
      controller: function ($scope) {
        $scope.title = 'Flotilla'
        $scope.tagline = 'Where we speak our minds'
      }
    }
  }
})()
