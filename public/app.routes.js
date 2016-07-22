(function() {
  // public/app.routes.js
  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

      .when('/', {
        templateUrl: 'components/home/home.view.html',
        controller: 'HomeController'
      })

      .when('/blog', {
        templateUrl: 'components/blog/blog.view.html',
        controller: 'BlogController'
      })

      // nerds page that will use the NerdController
      .when('/blog/:articleId', {
        templateUrl: 'components/blog/blog.view.html',
        controller: 'BlogController'
      })

      .otherwise('/');

    $locationProvider.html5Mode(true);

  }]);

})();
