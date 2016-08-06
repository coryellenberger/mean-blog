/**
 * articlePool
 * @namespace Factories
 */
(function () {
  angular
    .module('meanBlog')
    .factory('articlePool', articlePool)

  articlePool.$inject = ['Article']

  /**
   * @namespace articlePool
   * @desc description
   * @memberOf Factories
   */
  function articlePool (Article) {
    var service = {
      addInstance: addInstance,
      getInstance: getInstance,
      load: load,
      getPool: getPool
    }
    return service

    /* Private */
    // Article Pool
    var _articles

    /**
     * @name addInstance
     * @desc add an article instance to the pool
     * @param {String} articleInstance article to be added to the pool
     * @memberOf Factories.articlePool
     */
    function addInstance (articleInstance) {
      if (!_articles) {
        _articles = {}
      }
      _articles[articleInstance._id] = articleInstance
    }

    /**
     * @name getPool
     * @desc get the entire pool of instances
     * @returns {String} _articles the object literal of key ID | value Article pairs
     * @memberOf Factories.articlePool
     */
    function getPool () {
      return _articles
    }

    /**
     * @name getInstance
     * @desc get a specific instance based on id provided
     * @param {String} articleId id of the article to get
     * @returns {String} instance the article instance from the pool
     * @memberOf Factories.articlePool
     */
    function getInstance (articleId) {
      if (!_articles) {
        return
      }
      // return instance
      return _articles[articleId]
    }
    /**
     * @name load
     * @desc load an article from Article model based on id
     * @param {String} articleId the article id to be loaded
     * @param {Promise} deferred promise to be resolved with article
     * @memberOf Factories.articlePool
     */
    function load (articleId, deferred) {
      Article.get({ id: articleId }, function (article) {
        addInstance(article)
        deferred.resolve(article)
      })
    }
  }
})()
