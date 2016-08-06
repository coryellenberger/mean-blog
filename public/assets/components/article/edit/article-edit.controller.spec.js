describe('ArticleEditController', function () {
  beforeEach(module('meanBlog'))

  var $controller
  var $scope
  var deferred
  var articleManager
  var _MOCK_ARTICLE = {
    _MOCK_TITLE: 'TITLE',
    _MOCK_DETAIL: 'DETAIL',
    _id: _ARTICLE_ID
  }
  var _ARTICLE_ID = 'ID'
  var $route = {
    current: {
      params: {
        articleId: _ARTICLE_ID
      }
    }
  }
  var $location = {
    path: function () {}
  }
  var _CANCEL_PATH = '#/'

  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _articleManager_) {
    $controller = _$controller_
    $scope = _$rootScope_.$new()
    deferred = _$q_.defer()
    articleManager = _articleManager_
  }))

  beforeEach(function () {
    $route.current.params.articleId = _ARTICLE_ID
  })

  describe('constructor should', function () {
    it('not set vm.article if routed for new article: /article', function () {
      // clear the articleID
      spyOn(articleManager, 'getArticle')
      delete $route.current.params.articleId

      var controller = $controller('ArticleEditController', {
        $route: $route,
        articleManager: articleManager
      })

      $scope.$apply()

      expect(controller.article).not.toBeDefined()
      expect(articleManager.getArticle).not.toHaveBeenCalled()
    })

    it('set vm.article using articleManager.getArticle if routed with articleId: /article/:articleId/edit', function () {
      spyOn(articleManager, 'getArticle').and.returnValue(deferred.promise)

      var controller = $controller('ArticleEditController', {
        $route: $route,
        articleManager: articleManager
      })

      deferred.resolve(_MOCK_ARTICLE)

      $scope.$apply()

      expect(controller.article).toEqual(_MOCK_ARTICLE)
      expect(articleManager.getArticle).toHaveBeenCalledWith(_ARTICLE_ID)
    })
  })

  describe('click event handler', function () {
    it('vm.cancelClick: should route to #/ if routed for new article /article', function () {
      spyOn(articleManager, 'getArticle')
      spyOn($location, 'path')
      delete $route.current.params.articleId

      var controller = $controller('ArticleEditController', {
        $route: $route,
        $location: $location,
        articleManager: articleManager
      })

      $scope.$apply()

      expect(controller.cancelClick).toBeDefined()
      controller.cancelClick()
      expect($location.path).toHaveBeenCalledWith(_CANCEL_PATH)
    })

    it('vm.cancelClick: should route to /article/id if routed with articleId: /article/:articleId/edi', function () {
      spyOn(articleManager, 'getArticle').and.returnValue(deferred.promise)
      spyOn($location, 'path')

      var controller = $controller('ArticleEditController', {
        $route: $route,
        $location: $location,
        articleManager: articleManager
      })

      $scope.$apply()

      expect(controller.cancelClick).toBeDefined()
      controller.cancelClick()
      expect($location.path).toHaveBeenCalledWith('/article/' + _ARTICLE_ID)
    })

    it('vm.saveClick should updateArticle passing the vm.article model then trigger cancelClick', function () {
      spyOn(articleManager, 'getArticle').and.returnValue(deferred.promise)
      spyOn(articleManager, 'updateArticle')

      var controller = $controller('ArticleEditController', {
        $route: $route,
        articleManager: articleManager
      })

      spyOn(controller, 'cancelClick')

      deferred.resolve(_MOCK_ARTICLE)

      $scope.$apply()

      expect(controller.saveClick).toBeDefined()
      controller.saveClick()
      expect(controller.cancelClick).toHaveBeenCalled()
      expect(articleManager.updateArticle).toHaveBeenCalledWith(_MOCK_ARTICLE)
    })

    it('vm.deleteClick should deleteArticle passing the vm.article._id then update the _cancelPath to original and trigger cancelClick', function () {
      spyOn(articleManager, 'getArticle').and.returnValue(deferred.promise)
      spyOn(articleManager, 'deleteArticle')
      spyOn($location, 'path')

      var controller = $controller('ArticleEditController', {
        $route: $route,
        $location: $location,
        articleManager: articleManager
      })

      spyOn(controller, 'cancelClick').and.callThrough()

      deferred.resolve(_MOCK_ARTICLE)

      $scope.$apply()

      expect(controller.deleteClick).toBeDefined()
      controller.deleteClick()
      expect(controller.cancelClick).toHaveBeenCalled()
      expect(articleManager.deleteArticle).toHaveBeenCalledWith(_MOCK_ARTICLE._id)
      expect($location.path).toHaveBeenCalledWith(_CANCEL_PATH)
    })
  })
})
