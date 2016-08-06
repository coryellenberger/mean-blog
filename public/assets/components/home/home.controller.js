/**
 * HomeController
 * @namespace Controllers
 */
(function () {
  angular
    .module('meanBlog')
    .controller('HomeController', HomeController)

  HomeController.$inject = ['articleManager']

  /**
   * @namespace HomeController
   * @desc Binds the View/Model/Business Logic for Home
   * @memberOf Controllers
   */
  function HomeController (articleManager) {
    var vm = this
    articleManager.loadAllArticles().then(function (articles) {
      vm.articles = articles
    })
  }
})()
