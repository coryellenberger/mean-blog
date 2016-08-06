/**
 * articleManager
 * @namespace Factories
 */
(function () {
  angular
    .module('flotilla')
    .factory('articleManager', articleManager)

  articleManager.$inject = ['$q', '_', 'Article', 'articlePool']

  /**
   * @namespace articleManager
   * @desc article CRUD apis and storing articles in memory
   * @memberOf Factories
   */
  function articleManager ($q, _, Article, articlePool) {
    var service = {
      getArticle: getArticle,
      loadAllArticles: loadAllArticles,
      updateArticle: updateArticle,
      deleteArticle: deleteArticle
    }

    /**
     * @name getArticle
     * @desc get an article instance by it's _id
     * @param {String} articleId _id of the article to get
     * @returns {Array} deferred promise returned from $http request
     * @memberOf Factories.articleManager
     */
    function getArticle (articleId) {
      // create deferred
      var deferred = $q.defer()
      // search articles
      var article = articlePool.getInstance(articleId)
      if (article) {
        // if article returned resolve
        deferred.resolve(article)
      } else {
        // otherwise load article
        articlePool.load(articleId, deferred)
      }
      // return deferred
      return deferred.promise
    }

    /**
     * @name loadAllArticles
     * @desc load all article instances into the pool using retrieveInstance
     * @returns {Array} deferred promise returned from $http request
     * @memberOf Factories.articleManager
     */
    function loadAllArticles () {
      var deferred = $q.defer()

      if (articlePool.getPool()) {
        deferred.resolve(articlePool.getPool())
      } else {
        var articles = Article.query(function () {
          // loop over the returned articles
          _.each(articles, function (article) {
            // add each as an instance to the pool
            articlePool.addInstance(article)
          })

          // resolve deferred with articles
          deferred.resolve(articles)
        })
      }

      return deferred.promise
    }

    /**
     * @name updateArticle
     * @desc updated an article
     * @param {String} articleData article model to be updated
     * @returns {Array} article the updated article
     * @memberOf Factories.articleManager
     */
    function updateArticle (articleData) {
      // create deferred
      var deferred = $q.defer()
      // search for this instance of the article
      var article = articlePool.getInstance(articleData._id)
      // if it exists update
      if (!article) {
        // if instance doesn't exist create new
        article = new Article(articleData)
      }
      // post the article
      article.$save(function (article) {
        // resolve deferred with article
        deferred.resolve(article)
        articlePool.addInstance(article)
      })
      // return the updated article
      return deferred.promise
    }

    /**
     * @name deleteArticle
     * @desc delete article by _id; we can assume the article exists locally
     * @param {String} articleId _id of article to be deleted
     * @memberOf Factories.articleManager
     */
    function deleteArticle (articleId) {
      // retrieve instance
      var article = articlePool.getInstance(articleId)
      if (article) {
        // use article model to delete instance
        article.$remove({ id: article._id })
      }
    }

    return service
  }
})()
