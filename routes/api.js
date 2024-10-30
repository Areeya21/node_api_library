const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bookController = require('../controllers/bookController');
const borrowController = require('../controllers/borrowController');
const returnController = require('../controllers/returnController');

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/login', userController.login);


// Book routes
router.post('/books', bookController.createBook);
router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

// Borrow routes
router.post('/borrows', borrowController.createBorrow);
router.get('/borrows', borrowController.getBorrows);
router.get('/borrows/:id', borrowController.getBorrowById);
router.put('/borrows/:id', borrowController.updateBorrow);
router.delete('/borrows/:id', borrowController.deleteBorrow);

// Return routes
router.post('/returns', returnController.createReturn);
router.get('/returns', returnController.getReturns);
router.get('/returns/:id', returnController.getReturnById);
router.put('/returns/:id', returnController.updateReturn);
router.delete('/returns/:id', returnController.deleteReturn);

module.exports = router;
router.post('/login', userController.login);