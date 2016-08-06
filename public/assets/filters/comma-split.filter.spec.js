describe('commaSplit', function () {
  beforeEach(module('flotilla'))

  var commaSplitFilter
  var _TEST1 = 'TEST1'
  var _TEST2 = 'TEST2'
  var _TEST3 = 'TEST3'
  var _INPUT = _TEST1 + ',' + _TEST2 + ',' + _TEST3
  var _ARRAY = [_TEST1, _TEST2, _TEST3]

  beforeEach(inject(function (_commaSplitFilter_) {
    commaSplitFilter = _commaSplitFilter_
  }))

  it('should take in CSV and return an array of values', function () {
    expect(commaSplitFilter).toBeDefined()
    expect(commaSplitFilter()(_INPUT)).toEqual(_ARRAY)
  })

  it('should return nothing if no input', function () {
    expect(commaSplitFilter).toBeDefined()
    expect(commaSplitFilter()()).toEqual()
  })

  it('should return nothing if no input 0 is empty', function () {
    expect(commaSplitFilter).toBeDefined()
    expect(commaSplitFilter()(',')).toEqual()
  })
})
