/**
 * ArticleEditController
 * @namespace Controllers
 */
(function () {
  angular
    .module('meanBlog')
    .controller('ArticleEditController', ArticleEditController)

  ArticleEditController.$inject = ['$route', '$location', 'articleManager']

  /**
   * @namespace ArticleEditController
   * @desc Binds the View/Model/Business Logic for Article Edit
   * @memberOf Controllers
   */
  function ArticleEditController ($route, $location, articleManager) {
    /* Public members */
    var vm = this
    vm.cancelClick = cancelClick
    vm.saveClick = saveClick
    vm.deleteClick = deleteClick

    /* Private members */
    var _cancelPath = '#/'
    var _ORIGINAL_PATH = _cancelPath
    var _ARTICLE_ID = $route.current.params.articleId
    if (_ARTICLE_ID) {
      articleManager.getArticle(_ARTICLE_ID).then(function (article) {
        vm.article = article
      })

      _cancelPath = '/article/' + _ARTICLE_ID
    }

    /* event handlers */
    /**
     * @name cancelClick
     * @desc ng-click event handler to cancel editing will navigate home
     * @memberOf Controllers.ArticleEditController
     */
    function cancelClick () {
      $location.path(_cancelPath)
    }
    /**
     * @name cancelClick
     * @desc ng-click event handler to save the article delegating to the articleManager
     * @memberOf Controllers.ArticleEditController
     */
    function saveClick () {
      articleManager.updateArticle(vm.article)
      vm.cancelClick()
    }
    /**
     * @name deleteClick
     * @desc ng-click event handler to delete the article delegating to the articleManager
     * @memberOf Controllers.ArticleEditController
     */
    function deleteClick () {
      articleManager.deleteArticle(vm.article._id)
      _cancelPath = _ORIGINAL_PATH
      vm.cancelClick()
    }
  }
})()
