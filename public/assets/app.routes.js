(function () {
  // public/app.routes.js
  angular
    .module('meanBlog')
    .config(RouteConfig)

  RouteConfig.$inject = ['$routeProvider', '$locationProvider']

  function RouteConfig ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix()

    $routeProvider

      .when('/', {
        templateUrl: 'assets/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })

      // create article
      .when('/article', {
        templateUrl: 'assets/components/article/edit/article-edit.html',
        controller: 'ArticleEditController',
        controllerAs: 'vm'
      })

      // visit article
      .when('/article/:articleId', {
        templateUrl: 'assets/components/article/article.html',
        controller: 'ArticleController',
        controllerAs: 'vm'
      })

      // edit article
      .when('/article/:articleId/edit', {
        templateUrl: 'assets/components/article/edit/article-edit.html',
        controller: 'ArticleEditController',
        controllerAs: 'vm'
      })

      .otherwise('/')
  }
})()
