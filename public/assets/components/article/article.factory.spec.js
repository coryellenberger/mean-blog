xdescribe('articleManager', function () {
  beforeEach(module('meanBlog'))

  var articleManager
  /* var $q
  var _
  var Article*/

  beforeEach(inject(function (_articleManager_/* , _$q_, ___, _Article_*/) {
    articleManager = _articleManager_
    /* $q = _$q_
    _ = ___
    Article = _Article_*/
  }))

  it('should be able to getArticle from pool', function () {
    expect(articleManager.functionName).toBeDefined()
    var value = 'TEST'
    expect(articleManager.functionName(value)).toEqual(value)
  })
})
