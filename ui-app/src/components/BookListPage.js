import React, {useEffect, useState} from 'react';
import BOOK_LIST_API_URL from '../constants';
import { useHistory } from 'react-router';

const BookListPage = () => 
{
    const [bookList, updateBookList] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        async function fetchData()
        {
            const bookListResponse = await fetch(BOOK_LIST_API_URL);
            const bookListJson = await bookListResponse.json();
            updateBookList(bookListJson);
        }
        fetchData();
    }, []);


    return <div>{
        bookList.map(book => 
            <div>
                <p>{"Title: " + book.title}</p>
                <p>{"Author: " + book.author}</p>
                <img src={book.cover} alt={book.title} onClick={() => history.push(`/bookdetails/${book.book_id}`)}></img>
                <p>{"Description: " + book.description}</p>
                <p></p>
            </div>
            )
        }</div>
}

export default BookListPage;