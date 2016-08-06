xdescribe('articlePool', function () {
  beforeEach(module('meanBlog'))

  var articlePool

  beforeEach(inject(function (_articlePool_, _Article_) {
    articlePool = _articlePool_
  }))

  it('should add an instance to the article pool', function () {
    expect(articlePool.addInstance).toBeDefined()
    var value = 'TEST'
    expect(articlePool.addInstance(value)).toEqual(value)
  })
})
