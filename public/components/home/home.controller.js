(function () {
  // public/components/home/home.controller.js
  angular.module('flotilla')
         .controller('HomeController', HomeController)

  HomeController.$inject = ['$scope', 'articleManager']

  function HomeController ($scope, articleManager) {
    articleManager.loadAllArticles().then(function (articles) {
      $scope.articles = articles
    })
  }
})()
