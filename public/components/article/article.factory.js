(function() {
  angular.module('flotilla')
     .factory('articleManager', articleManager);

  articleManager.$inject = ['$http', '$q', 'articleModel'];

  function articleManager($http, $q, articleModel) {
    /* Private */
    // articleModel Pool
    var _articles = {};
    // Retrieve an articleModel
    var _retrieveInstance = function(articleId, articleData) {
      // get instance from pool
      var instance = _articles[articleId];
      // if instance exists setData
      if (instance) {
        instance.setData(articleData);
      } else {
        // if instance doesn't exist create new
        instance = new articleModel(articleData);
        // add instance to pool
        _articles[articleId] = instance;
      }
      // return instance
      return instance;
    };
    // Search article by ID
    var _search = function(articleId) {
      // return instance
      return _articles[articleId];
    };
    // Load article by ID
    var _load = function(articleId, deferred) {
      $http.get('/api/article/' + articleId)
        .success(function(articleData) {
          var article = _retrieveInstance(articleData._id, articleData);
          deferred.resolve(article);
        })
        .error(function() {
          deferred.reject();
        });
    };

    /* Public API */
    return {
      /* Use this function in order to get a article instance by it's _id */
      getArticle: function(articleId) {
        // create deferred
        var deferred = $q.defer();
        // search articles
        var article = _search(articleId);
        if (article) {
          // if article returned resolve
          deferred.resolve(article);
        } else {
          // otherwise load article
          _load(articleId, deferred);
        }
        // return deferred
        return deferred.promise;
      },
      /* Use this function in order to get instances of all the articles */
      loadAllArticles: function() {
        var deferred = $q.defer();
        $http.get('/api/articles')
          .success(function(data) {
            var articles = [];
            _.each(data, function(articleData) {
              var article = _retrieveInstance(articleData._id, articleData);
              articles.push(article);
            });

            deferred.resolve(articles);
          })
          .error(function() {
            deferred.reject();
          });
        return deferred.promise;
      },
      /*  This function is useful when we got somehow the article data and we wish to store it or update the pool and get a article instance in return */
      setArticle: function(articleData) {
        var article = _search(articleData._id);
        if (article) {
          article.setData(articleData);
        } else {
          article = _retrieveInstance(articleData);
        }
        return article;
      }
    };
  }

})();
