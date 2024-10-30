const Borrow = require('../models/Borrow');

exports.createBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.create(req.body);
    res.status(201).json(borrow);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBorrows = async (req, res) => {
  try {
    const borrows = await Borrow.findAll();
    res.status(200).json(borrows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBorrowById = async (req, res) => {
  try {
    const borrow = await Borrow.findByPk(req.params.id);
    if (!borrow) {
      return res.status(404).json({ message: 'Borrow not found' });
    }
    res.status(200).json(borrow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.findByPk(req.params.id);
    if (!borrow) {
      return res.status(404).json({ error: 'Borrow not found' });
    }
    await borrow.update(req.body);
    res.json(borrow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.findByPk(req.params.id);
    if (!borrow) {
      return res.status(404).json({ error: 'Borrow not found' });
    }
    await borrow.destroy();
    res.json({ message: 'Borrow deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
