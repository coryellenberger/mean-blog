/**
 * commaSplit
 * @namespace Filters
 */
(function () {
  angular
    .module('flotilla')
    .filter('commaSplit', commaSplit)

  /**
   * @namespace commaSplit
   * @desc description
   * @param {String} input the csv to be split
   * @returns {Array} split array of string
   * @memberOf Filters
   */
  function commaSplit () {
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
