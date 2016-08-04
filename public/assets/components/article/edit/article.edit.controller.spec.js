describe('ArticleEditController', function () {
  beforeEach(module('flotilla'))

  var $controller
  var $scope
  var deferred
  var articleManager
  var _MOCK_ARTICLE = {
    _MOCK_TITLE: 'TITLE',
    _MOCK_DETAIL: 'DETAIL'
  }
  var _ARTICLE_ID = 'ID'
  var $route = {
    current: {
      params: {
        articleId: _ARTICLE_ID
      }
    }
  }

  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _articleManager_) {
    $controller = _$controller_
    $scope = _$rootScope_.$new()
    deferred = _$q_.defer()
    articleManager = _articleManager_
  }))

  describe('should', function () {
    it('get $scope.article from articleManager.getArticle at construction if articleId in $route.current.params', function () {
      spyOn(articleManager, 'getArticle').and.returnValue(deferred.promise)

      var controller = $controller('ArticleController', {
        $route: $route,
        articleManager: articleManager
      })

      deferred.resolve(_MOCK_ARTICLE)

      $scope.$apply()

      expect(controller.article).toEqual(_MOCK_ARTICLE)
      expect(articleManager.getArticle).toHaveBeenCalledWith(_ARTICLE_ID)
    })

    it('not set $scope.article if $route.current.params.articleId is missing', function () {
      // TODO: update this test to not load $scope.article
      spyOn(articleManager, 'getArticle').and.returnValue(deferred.promise)

      var controller = $controller('ArticleController', {
        $route: $route,
        articleManager: articleManager
      })

      deferred.resolve(_MOCK_ARTICLE)

      $scope.$apply()

      expect(controller.article).toEqual(_MOCK_ARTICLE)
      expect(articleManager.getArticle).toHaveBeenCalledWith(_ARTICLE_ID)
    })
  })
})
