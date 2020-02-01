const userModel = require('../../mongo/models/users');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.send({ status: 'OK', data: {} });
      } else {
        res.send({ status: 'INVALID_PASSWORD', message: '' });
      }
    } else {
      res
        .status(401)
        .send({ status: 'USER_NOT_FOUND', message: 'User not existed' });
    }
  } catch (error) {
    res.status(500).send({ status: 'ERROR', message: error.message });
  }
};

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

const updateUser = async (req, res) => {
  try {
    const { username, email, data, userId } = req.body;
    await userModel.findByIdAndUpdate(userId, { username, email, data });

    res.send({ status: 'OK', message: 'User updated ' });
  } catch (error) {
    if (error.code && error.code === 11000) {
      res
        .status(400)
        .send({ status: 'DUPLICATED_VALUES', message: error.keyValue });
      return;
    }
    res.status(500).send({ status: 'ERROR', message: 'Unkwon' });
  }
};

const getUsers = (req, res) => {
  res.send({ status: 'OK', message: 'Users got ' });
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  login
};
