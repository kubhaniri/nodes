const createUser = (req, res) => {
  console.log('req.body', req.body);

  res.send({ status: 'OK', message: 'User Created' });
};

const deleteUser = (req, res) => {
  res.send({ status: 'OK', message: 'User deleted ' });
};

const updateUser = (req, res) => {
  res.send({ status: 'OK', message: 'User updated ' });
};

const getUsers = (req, res) => {
  res.send({ status: 'OK', message: 'Users got ' });
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser
};
