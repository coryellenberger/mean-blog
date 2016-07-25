(function () {
  // public/components/article/article.model.factory.js
  angular.module('flotilla')
         .factory('articleModel', articleModel)

  articleModel.$inject = ['$http']

  function articleModel ($http) {
    function Article (articleData) {
      if (articleData) {
        this.setData(articleData)
      }
    }
    Article.prototype = {
      setData: function (articleData) {
        angular.extend(this, articleData)
      },
      delete: function () {
        $http.delete('/api/article/' + this._id)
      },
      update: function () {
        var self = this
        var deferred = $http.post('/api/article', self)
        deferred.then(function (response) {
          self.setData(response.data)
        })
        return deferred
      }
    }
    return Article
  }
})()
