describe('angularjs homepage todo list', function () {
  it('should add a todo', function () {
    browser.get('http://localhost:3000/#/');

    element(by.id('new-article')).click();

    expect(completedAmount.count()).toEqual(2);
  });
});