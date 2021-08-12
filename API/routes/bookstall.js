const booksController = require('../controllers/books')
const bookstall = require('express').Router();

bookstall.get('/books', booksController.getAllBooks);
bookstall.get('/books/:id', booksController.getBookById);

module.exports = bookstall;