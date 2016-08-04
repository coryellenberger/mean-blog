describe('HomeController', function () {
  beforeEach(module('flotilla'))

  var $controller
  var $scope
  var deferred
  var articleManager
  var _MOCK_ARTICLE = {
    _MOCK_TITLE: 'TITLE',
    _MOCK_DETAIL: 'DETAIL'
  }

  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _articleManager_) {
    $controller = _$controller_
    $scope = _$rootScope_.$new()
    deferred = _$q_.defer()
    articleManager = _articleManager_
  }))

  it('should get $scope.articles from articleManager.loadAllArticles at construction', function () {
    spyOn(articleManager, 'loadAllArticles').and.returnValue(deferred.promise)

    var controller = $controller('HomeController', {
      articleManager: articleManager
    })

    deferred.resolve(_MOCK_ARTICLE)

    $scope.$apply()

    expect(controller.articles).toEqual(_MOCK_ARTICLE)
  })
})
