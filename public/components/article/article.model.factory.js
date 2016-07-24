(function() {
  // public/components/article/article.model.factory.js
  angular.module('flotilla')
         .factory('articleModel', articleModel);

  articleModel.$inject = ['$http'];

  function articleModel($http) {
    function Article(articleData) {
      if (articleData) {
        this.setData(articleData);
      }
    }
    Article.prototype = {
      setData: function(articleData) {
        angular.extend(this, articleData);
      },
      delete: function(articleId) {
        $http.delete('/api/article/' + articleId);
      },
      update: function(articleData) {
        $http.post('/api/article', articleData);
      }
    };
    return Article;
  }

})();
