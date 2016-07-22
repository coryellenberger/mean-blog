(function() {
  // public/components/blog/blog.controller.js
  angular.module('blogController', ['articleService']).controller('BlogController', function($scope, $route, articleService) {

      articleService.get().then(function (response) {
        $scope.article = _.find(response.data, { id: parseInt($route.current.params.articleId) })
      });

  });

})()