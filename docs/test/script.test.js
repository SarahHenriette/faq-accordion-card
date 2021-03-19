const activeQuestion = require('./../js/script');


test('check that there is an active question', () => {
  expect(activeQuestion()).toBe(0);
});