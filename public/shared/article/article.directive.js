(function() {
  // public/shared/article/article.directive.js
  angular.module('flotilla')
         .directive('articleDirective', articleDirective);

  function articleDirective(articleService) {
    return {
      templateUrl: 'shared/article/article.view.html',
      controller: function($scope) {
        articleService.get().then(function successCallback(response) {
          $scope.articles = response.data;
        });
      }
    };
  };
})();