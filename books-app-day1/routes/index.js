const router = require("express").Router()

const Book = require('./../models/Book.model')

/* GET home page */
router.get("/", (req, res, next) => res.render("index"))


// Books list
router.get('/libros/listado', (req, res) => {

  Book
    .find()
    .select('title')
    .then(books => res.render('books-list', { books }))
    .catch(err => console.log(err))
})


// Book details
router.get('/libros/detalles/:book_id', (req, res) => {

  const { book_id } = req.params

  Book
    .findById(book_id)
    .then(book => res.render('book-details', book))
    .catch(err => console.log(err))
})

module.exports = router