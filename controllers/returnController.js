const Return = require('../models/Return');

exports.createReturn = async (req, res) => {
  try {
    const ret = await Return.create(req.body); // ใช้ชื่อ ret แทน return เพราะ return เป็นคำสงวน
    res.status(201).json(ret);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getReturns = async (req, res) => {
  try {
    const returns = await Return.findAll();
    res.status(200).json(returns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReturnById = async (req, res) => {
  try {
    const ret = await Return.findByPk(req.params.id);
    if (!ret) {
      return res.status(404).json({ message: 'Return not found' });
    }
    res.status(200).json(ret);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateReturn = async (req, res) => {
  try {
    const ret = await Return.findByPk(req.params.id);
    if (!ret) {
      return res.status(404).json({ error: 'Return not found' });
    }
    await ret.update(req.body);
    res.json(ret);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteReturn = async (req, res) => {
  try {
    const ret = await Return.findByPk(req.params.id);
    if (!ret) {
      return res.status(404).json({ error: 'Return not found' });
    }
    await ret.destroy();
    res.json({ message: 'Return deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
