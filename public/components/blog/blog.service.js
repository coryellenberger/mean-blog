// public/shared/article/blog.service.js
angular.module('blogService', []).factory('BlogService', ['$http', function($http) {

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