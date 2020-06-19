/**
* @jest-environment jsdom
*/

const Navigation = require("../views/partials/navigation.handlebars");

test('Home link should be selected', () => {
  const templateHTML = Navigation();
  const element = document.createElement('div');
  
  element.innerHTML = templateHTML;
  
  const link = element.querySelector('li');
  
  expect(link).toHaveClass('navigation__item');
});
