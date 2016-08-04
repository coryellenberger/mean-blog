/**
 * ArticleEditController
 * @namespace Controllers
 */
(function () {
  angular
    .module('flotilla')
    .controller('ArticleEditController', ArticleEditController)

  ArticleEditController.$inject = ['$route', '$location', 'articleManager']

  /**
   * @namespace ArticleEditController
   * @desc Binds the View/Model/Business Logic for Article Edit
   * @memberOf flotilla.Controllers
   */
  function ArticleEditController ($route, $location, articleManager) {
    /* Public members */
    var vm = this
    vm.cancelClick = cancelClick
    vm.saveClick = saveClick
    vm.deleteClick = deleteClick

    var _cancelPath = '#/'
    var _ORIGINAL_PATH = _cancelPath
    var _ARTICLE_ID = $route.current.params.articleId
    if (_ARTICLE_ID) {
      articleManager.getArticle(_ARTICLE_ID).then(function (article) {
        vm.article = article
      })

      _cancelPath = '/article/' + _ARTICLE_ID
    }

    /**
     * @name cancelClick
     * @desc ng-click event handler to cancel editing will navigate home
     * @memberOf flotilla.Controllers.ArticleEditController
     */
    function cancelClick () {
      $location.path(_cancelPath)
    }
    /**
     * @name cancelClick
     * @desc ng-click event handler to save the article delegating to the articleManager
     * @memberOf flotilla.Controllers.ArticleEditController
     */
    function saveClick () {
      articleManager.updateArticle(vm.article)
      vm.cancelClick()
    }

    function deleteClick () {
      articleManager.deleteArticle(vm.article._id)
      _cancelPath = _ORIGINAL_PATH
      vm.cancelClick()
    }
  }
})()
