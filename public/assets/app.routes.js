(function () {
  // public/app.routes.js
  angular.module('flotilla')
         .config(RouteConfig)

  RouteConfig.$inject = ['$routeProvider', '$locationProvider']

  function RouteConfig ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix()

    $routeProvider

      .when('/', {
        templateUrl: 'assets/components/home/home.view.html',
        controller: 'HomeController'
      })

      // create article
      .when('/article', {
        templateUrl: 'assets/components/article/article.edit.view.html',
        controller: 'ArticleEditController'
      })

      // visit article
      .when('/article/:articleId', {
        templateUrl: 'assets/components/article/article.view.html',
        controller: 'ArticleController'
      })

      // edit article
      .when('/article/:articleId/edit', {
        templateUrl: 'assets/components/article/article.edit.view.html',
        controller: 'ArticleEditController'
      })

      .otherwise('/')
  }
})()
