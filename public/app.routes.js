(function() {
  // public/app.routes.js
  angular.module('flotilla').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix();

    $routeProvider

      .when('/', {
        templateUrl: 'components/home/home.view.html',
        controller: 'HomeController'
      })

      // create article
      .when('/article', {
        templateUrl: 'components/article/article.edit.view.html',
        controller: 'ArticleEditController'
      })

      // visit article
      .when('/article/:articleId', {
        templateUrl: 'components/article/article.view.html',
        controller: 'ArticleController'
      })

      // edit article
      .when('/article/:articleId/edit', {
        templateUrl: 'components/article/article.edit.view.html',
        controller: 'ArticleEditController'
      })

      .otherwise('/');

  }]);

})();
