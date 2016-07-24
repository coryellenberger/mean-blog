(function() {
  // public/components/article/article.edit.controller.js
  angular.module('flotilla')
         .controller('ArticleEditController', ArticleEditController);

  angular.$inject = ['$scope', '$route', 'articleManager']

  function ArticleEditController($scope, $route, articleManager) {
    articleManager.getArticle($route.current.params.articleId).then(function(article) {
      $scope.article = article;
    });
  }

})();