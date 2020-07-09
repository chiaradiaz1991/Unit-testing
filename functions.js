const functions = {
  add: (element1, element2) => element1 + element2,
  isNull: () => null,
  checkValue: (a) => a,
  createUser: () => {
    const user = {
      name: 'first name',
    }
    user['lastName'] = 'last name';
    return user;
  }
}

module.exports= functions;