describe('ArticleController', function () {
  beforeEach(module('flotilla'));

  var $controller
  var $scope
  var deferred
  var articleManager
  var _MOCK_ARTICLE = {
    _MOCK_TITLE: 'TITLE',
    _MOCK_DETAIL: 'DETAIL'
  }
  var _ARTICLE_ID = 'ID'

  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _articleManager_) {
    $controller = _$controller_
    $scope = _$rootScope_.$new()
    deferred = _$q_.defer()
    articleManager = _articleManager_
  }));

  describe('should', function() {
    it('get $scope.article from articleManager.getArticle at construction if articleId in $route.current.params', function() {
      var $route = {
        current: {
          params: {
            articleId: _ARTICLE_ID
          }
        }
      }

      spyOn(articleManager, 'getArticle').and.returnValue(deferred.promise)

      $controller('ArticleController', {
        $scope: $scope,
        $route: $route,
        articleManager: articleManager
      })

      deferred.resolve(_MOCK_ARTICLE)

      $scope.$apply()

      expect($scope.article).toEqual(_MOCK_ARTICLE)
      expect(articleManager.getArticle).toHaveBeenCalledWith(_ARTICLE_ID)
    });

    it('not set $scope.article if $route.current.params.articleId is missing', function() {
      // TODO: update this test to not load $scope.article
      var $route = {
        current: {
          params: {
            articleId: _ARTICLE_ID
          }
        }
      }

      spyOn(articleManager, 'getArticle').and.returnValue(deferred.promise)

      $controller('ArticleController', {
        $scope: $scope,
        $route: $route,
        articleManager: articleManager
      })

      deferred.resolve(_MOCK_ARTICLE)

      $scope.$apply()

      expect($scope.article).toEqual(_MOCK_ARTICLE)
      expect(articleManager.getArticle).toHaveBeenCalledWith(_ARTICLE_ID)
    });
  });
});