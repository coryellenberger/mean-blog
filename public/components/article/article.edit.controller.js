(function () {
  // public/components/article/article.edit.controller.js
  angular.module('flotilla')
         .controller('ArticleEditController', ArticleEditController)

  ArticleEditController.$inject = ['$scope', '$route', '$location', 'articleManager']

  function ArticleEditController ($scope, $route, $location, articleManager) {
    var _cancelPath = '#/'
    var _ARTICLE_ID = $route.current.params.articleId

    if (_ARTICLE_ID) {
      articleManager.getArticle(_ARTICLE_ID).then(function (article) {
        $scope.article = article
      })

      _cancelPath = '/article/' + _ARTICLE_ID
    }

    $scope.cancelClick = function () {
      $location.path(_cancelPath)
    }

    $scope.saveClick = function () {
      articleManager.updateArticle($scope.article)
      $scope.cancelClick()
    }
  }
})()
