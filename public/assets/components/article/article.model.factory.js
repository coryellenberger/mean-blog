/**
 * Article
 * @namespace Factories
 */
(function () {
  angular
    .module('flotilla')
    .factory('Article', Article)

  Article.$inject = ['$resource']

  /**
   * @namespace Article
   * @desc description
   * @memberOf Factories
   */
  function Article ($resource) {
    return $resource('/api/article/:id', { id: '@id' })
  }
})()
