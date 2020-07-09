const asyncFunctions = require('./asynchronous');


test('User fetched name should be Ervin Howell', ()=> { // promise
  expect.assertions(1) // assertions only test if the fetch called
  return asyncFunctions.fetchUser()
    .then(data=>{
      expect(data.name).toEqual('Ervin Howell')
    })
});

test('User fetched name should be Ervin Howell', async ()=> { // async await
  expect.assertions(1) // assertions only test if the fetch called
  const data = await asyncFunctions.fetchUser();
  expect(data.name).toEqual('Ervin Howell')

});