/**
 * articleManager
 * @namespace flotilla.Factories
 */
(function () {
  angular
    .module('flotilla')
    .factory('articleManager', articleManager)

  articleManager.$inject = ['$http', '$q', '_', 'Article']

  /**
   * @namespace articleManager
   * @desc article CRUD apis and storing articles in memory
   * @memberOf flotilla.Factories
   */
  function articleManager ($http, $q, _, Article) {
    var service = {
      getArticle: getArticle,
      loadAllArticles: loadAllArticles,
      updateArticle: updateArticle,
      deleteArticle: deleteArticle
    }

    /* Private */
    // Article Pool
    var _articles
    // add article instance
    function _addInstance (articleInstance) {
      if (!_articles) {
        _articles = {}
      }
      _articles[articleInstance._id] = articleInstance
    }
    // get article instance by id
    function _getInstance (articleId) {
      if (!_articles) {
        return
      }
      // return instance
      return _articles[articleId]
    }
    // Load article by id
    function _load (articleId, deferred) {
      Article.get({ id: articleId }, function (article) {
        _addInstance(article)
        deferred.resolve(article)
      })
    }

    /**
     * @name getArticle
     * @desc get an article instance by it's _id
     * @param {String} articleId _id of the article to get
     * @returns {Array[object]} deferred promise returned from $http request
     * @memberOf flotilla.Factories.articleManager
     */
    function getArticle (articleId) {
      // create deferred
      var deferred = $q.defer()
      // search articles
      var article = _getInstance(articleId)
      if (article) {
        // if article returned resolve
        deferred.resolve(article)
      } else {
        // otherwise load article
        _load(articleId, deferred)
      }
      // return deferred
      return deferred.promise
    }

    /**
     * @name loadAllArticles
     * @desc load all article instances into the pool using retrieveInstance
     * @returns {Array[object]} deferred promise returned from $http request
     * @memberOf flotilla.Factories.articleManager
     */
    function loadAllArticles () {
      var deferred = $q.defer()

      if (_articles) {
        deferred.resolve(_articles)
      } else {
        var articles = Article.query(function () {
          // loop over the returned articles
          _.each(articles, function (article) {
            // add each as an instance to the pool
            _addInstance(article)
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
     * @returns {Array[object]} article the updated article
     * @memberOf flotilla.Factories.articleManager
     */
    function updateArticle (articleData) {
      // create deferred
      var deferred = $q.defer()
      // search for this instance of the article
      var article = _getInstance(articleData._id)
      // if it exists update
      if (!article) {
        // if instance doesn't exist create new
        article = new Article(articleData)
      }
      // post the article
      article.$save(function (article) {
        // resolve deferred with article
        deferred.resolve(article)
        _addInstance(article)
      })
      // return the updated article
      return deferred.promise
    }

    /**
     * @name deleteArticle
     * @desc delete article by _id; we can assume the article exists locally
     * @param {String} articleId _id of article to be deleted
     * @memberOf flotilla.Factories.articleManager
     */
    function deleteArticle (articleId) {
      // retrieve instance
      var article = _getInstance(articleId)
      if (article) {
        // use article model to delete instance
        article.$remove({ id: article._id })
      }
    }

    return service
  }
})()
