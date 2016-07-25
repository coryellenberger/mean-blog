(function () {
  // public/components/article/article.factory.js
  angular.module('flotilla')
         .factory('articleManager', articleManager)

  articleManager.$inject = ['$http', '$q', '_', 'articleModel']

  function articleManager ($http, $q, _, ArticleModel) {
    /* Private */
    // ArticleModel Pool
    var _articles = {}
    // Retrieve an ArticleModel
    var _retrieveInstance = function (articleId, articleData) {
      // get instance from pool
      var instance = _articles[articleId]
      // if instance exists setData
      if (instance) {
        instance.setData(articleData)
      } else {
        // if instance doesn't exist create new
        instance = new ArticleModel(articleData)
        // add instance to pool
        _articles[articleId] = instance
      }
      // return instance
      return instance
    }
    // Search article by ID
    var _search = function (articleId) {
      // return instance
      return _articles[articleId]
    }
    // Load article by ID
    var _load = function (articleId, deferred) {
      $http.get('/api/article/' + articleId)
        .success(function (articleData) {
          var article = _retrieveInstance(articleData._id, articleData)
          deferred.resolve(article)
        })
        .error(function () {
          deferred.reject()
        })
    }

    /* Public API */
    return {
      /* Use this function in order to get a article instance by it's _id */
      getArticle: function (articleId) {
        // create deferred
        var deferred = $q.defer()
        // search articles
        var article = _search(articleId)
        if (article) {
          // if article returned resolve
          deferred.resolve(article)
        } else {
          // otherwise load article
          _load(articleId, deferred)
        }
        // return deferred
        return deferred.promise
      },
      /* Use this function in order to get instances of all the articles */
      loadAllArticles: function () {
        // create deferred
        var deferred = $q.defer()
        // get all articles
        $http.get('/api/articles')
          .success(function (data) {
            // on success
            var articles = []
            // loop over the returned articles
            _.each(data, function (articleData) {
              // add each as an instance to the pool
              var article = _retrieveInstance(articleData._id, articleData)
              articles.push(article)
            })
            // resolve deferred with articles
            deferred.resolve(articles)
          })
          .error(function () {
            deferred.reject()
          })
        return deferred.promise
      },
      updateArticle: function (articleData) {
        var article = _search(articleData._id)
        if (article) {
          article.update()
        } else {
          // if instance doesn't exist create new
          article = new ArticleModel(articleData)
          article.update().then(function () {
            _retrieveInstance(article)
          })
        }
        return article
      },
      deleteArticle: function (articleId) {
        var article = _search(articleId)
        if (article) {
          article.delete()
        }
      }
    }
  }
})()
