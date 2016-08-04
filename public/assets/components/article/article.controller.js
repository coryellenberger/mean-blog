/**
 * ArticleController
 * @namespace Controllers
 */
(function () {
  angular
    .module('flotilla')
    .controller('ArticleController', ArticleController)

  ArticleController.$inject = ['$route', 'articleManager']

  /**
   * @namespace ArticleController
   * @desc Binds the View/Model/Business Logic for Article
   * @memberOf flotilla.Controllers
   */
  function ArticleController ($route, articleManager) {
    var vm = this
    articleManager.getArticle($route.current.params.articleId).then(function (article) {
      vm.article = article
    })
  }
})()

