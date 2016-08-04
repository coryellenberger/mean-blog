/**
 * Lodash
 * @namespace flotilla.Globals
 */
(function () {
  angular
    .module('lodash', [])
    .factory('_', Lodash)

  /**
   * @namespace Lodash
   * @desc Lodash library made available for injecting into angular components
   * @memberOf flotilla.Globals
   */
  function Lodash () {
    // Lodash must already be loaded on the page
    return window._
  }
})()
