(function() {
  // public/components/article/article.controller.js
  angular.module('flotilla')
         .controller('ArticleController', ArticleController);

  angular.$inject = ['$scope', '$route', 'articleManager']

  function ArticleController($scope, $route, articleManager) {
    articleManager.getArticle($route.current.params.articleId).then(function(article) {
      $scope.article = article;
    });
  }

})();