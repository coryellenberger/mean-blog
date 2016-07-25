(function () {
  // public/filters/comma.split.filter.js
  angular.module('flotilla')
         .filter('commaSplit', commaSplitFilter)

  commaSplitFilter.$inject = []

  function commaSplitFilter () {
    return function (input) {
      if (!input) {
        return
      }
      var split = input.split(',')
      if (split[0] === '') {
        return
      }
      return split
    }
  }
})()
