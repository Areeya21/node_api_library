const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// login ด้วย email และ password
exports.login = async (req, res) => {
  try {
  const user = await User.findOne(
  {
  where: { email: req.body.email, password: req.body.password }
  });
  if (!user) {
  return res.status(404).json({ message: 'email หรือ password ไม่ถูกต้อง' });
  }
  res.status(200).json(user);
  } catch (error) {
  res.status(500).json({ error: error.message });
  }
  };
// login ด้วย email และ password
exports.login = async (req, res) => {
  try {
     const user = await User.findOne(
  {
      where: { email: req.body.email, password: req.body.password }
  });
  if (!user) {
  return res.status(404).json({ message: 'email หรือ password ไม่ถูกต้อง' });
  }
  res.status(200).json(user);
  } catch (error) {
  res.status(500).json({ error: error.message });
  }
  };
