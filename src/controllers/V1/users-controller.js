const userModel = require('../../mongo/models/users');
const createUser = async (req, res) => {
  try {

    const { username, email, password, data } = req.body;

    await userModel.create({
      username,
      email,
      password,
      data
    });

    res.send({ status: 'OK', message: 'User Created' });
  } catch (error) {
    if (error.code && error.code === 11000) {
      res
        .status(400)
        .send({ status: 'DUPLICATED_VALUES', message: error.keyValue });
      return;
    }
    console.log('User creation Error: ', error);
    res.status(500).send({ status: 'ERROR', message: 'Unkwon' });
  }
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
