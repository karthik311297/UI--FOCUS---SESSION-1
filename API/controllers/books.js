const db = require('../config/dbconfig');

//Get All Books
const getAllBooks = (request, response) => {
    db.query(`select * from bookstall.books`, (err, res) =>{
       if(err)
       {
           console.log(err);
           response.status(500).json(err);
       }
       response.status(res.statusCode).json(res.data);
    });
}

const getBookById = (request, response) => {
    console.log(request.params);
    db.query(`select * from bookstall.books where book_id="${request.params.id}"`, (err, res) =>{
        if(err)
        {
            console.log(err);
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
     });
}

module.exports = {
    getAllBooks,
    getBookById
}