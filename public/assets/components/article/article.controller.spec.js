describe('ArticleController', function () {
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

  it('should get $scope.article from articleManager.getArticle at construction', function () {
    spyOn(articleManager, 'getArticle').and.returnValue(deferred.promise)

    var controller = $controller('ArticleController', {
      $route: $route,
      articleManager: articleManager
    })

    deferred.resolve(_MOCK_ARTICLE)

    $scope.$apply()

    expect(controller.article).toEqual(_MOCK_ARTICLE)
  })
})
