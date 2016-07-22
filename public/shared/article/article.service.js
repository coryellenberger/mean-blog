// public/shared/article/article.service.js
angular.module('articleService', []).factory('articleService', ['$http', function($http) {

  return {
    // call to get all articles
    get: function() {
      return $http.get('/api/article');
    },

    // these will work when more API routes are defined on the Node side of things
    // call to POST and create a new article
    create: function(nerdData) {
      return $http.post('/api/article', nerdData);
    },

    // call to DELETE a article
    delete: function(id) {
      return $http.delete('/api/article/' + id);
    }
  }

}]);