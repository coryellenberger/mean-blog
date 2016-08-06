/**
 * Lodash
 * @namespace Globals
 */
(function () {
  angular
    .module('lodash', [])
    .factory('_', Lodash)

  /**
   * @namespace Lodash
   * @desc Lodash library made available for injecting into angular components
   * @memberOf Globals
   */
  function Lodash () {
    // Lodash must already be loaded on the page
    return window._
  }
})()
