(function() {
  // public/components/blog/blog.controller.js
  angular.module('flotilla')
         .controller('BlogController', BlogController);

  function BlogController($scope, $route, articleService) {
    $scope._id = $route.current.params.articleId;

    articleService.get().then(function(response) {
      $scope.article = _.find(response.data, { _id: $scope._id })
    });

    $scope.postArticle = function() {
      articleService.create($scope.article).then(function(response) {
        $scope.backup = $scope.article;
        $scope.editing = false;
      });
    };

    $scope.editMode = function() {
      $scope.backup = _.clone($scope.article);
      $scope.editing = true;
    };

    $scope.cancelEdit = function() {
      $scope.article = $scope.backup;
      $scope.editing = false;
    };

  }

})();