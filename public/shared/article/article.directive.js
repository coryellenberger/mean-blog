(function() {
  // public/shared/article/article.directive.js
  angular.module('articleDirective', ['articleService']).directive('articleDirective', function(articleService) {
    return {
      templateUrl: 'shared/article/article.view.html',
      controller: function ($scope) {
        articleService.get().then(function successCallback(response) {
          $scope.articles = response.data;
        }, function errorCallback(response) {

        });
      }
    };
  });

})();