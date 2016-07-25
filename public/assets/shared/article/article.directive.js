(function () {
  // public/shared/article/article.directive.js
  angular.module('flotilla')
         .directive('articleDirective', articleDirective)

  articleDirective.$inject = []

  function articleDirective () {
    return {
      templateUrl: 'assets/shared/article/article.view.html',
      restrict: 'E'
    }
  }
})()