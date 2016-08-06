describe('articlePool', function () {
  beforeEach(module('flotilla'))

  var articlePool
  var Article

  beforeEach(inject(function (_articlePool_, _Article_) {
    articlePool = _articlePool_
    Article = _Article_
  }))

  it('should add an instance to the article pool', function () {
    expect(articlePool.addInstance).toBeDefined()
    var value = 'TEST'
    expect(articlePool.addInstance(value)).toEqual(value)
  })
})

