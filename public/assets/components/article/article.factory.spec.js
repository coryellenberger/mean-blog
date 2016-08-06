describe('articleManager', function () {
  beforeEach(module('flotilla'))

  var articleManager
  var $http

  beforeEach(inject(function (_articleManager_, _$q_, ___, _Article_) {
    articleManager = _articleManager_
  }))

  it('should be able to getArticle from pool', function () {
    expect(articleManager.functionName).toBeDefined()
    var value = 'TEST'
    expect(articleManager.functionName(value)).toEqual(value)
  })
})