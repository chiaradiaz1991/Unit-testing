const functions = require('./functions');

test('Add 1 +1 to equal 2', ()=> {
  expect(functions.add(1, 1)).toBe(2);
});

test('Add 1 +1 to not equal 2', ()=> {
  expect(functions.add(1, 1)).not.toBe(3);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy(); // null is a falsy value like others such as 0, undefined.
});


test('User should name last name object ', () => {
  expect(functions.createUser()).toEqual({name: 'first name', lastName: 'last name'}); // to Equal is to compare objects and arrays
});

test('Should be under 2500', ()=> {
  const number = 900;
  const number2 = 1000;
  expect(number + number2).toBeLessThan(2500);
})

test('Sol should be in usernames', () => {
  names = ['Jua', 'Cristal', 'Sol'];
  expect(names).toContain('Sol'); // array toContain
})