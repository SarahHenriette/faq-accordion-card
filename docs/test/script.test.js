import activeQuestion from './../js/script';

console.log(activeQuestion)
// let questionActive= document.querySelectorAll('.contain-question.active')

test('check that there is an active question', () => {
  expect(activeQuestion).toBe(true);
});