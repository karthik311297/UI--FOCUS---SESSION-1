import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import BOOK_LIST_API_URL from '../constants';

const BookDetailsPage = () => 
{
    let {id} = useParams();
    const [book, updateBookDetail] = useState(0);

    useEffect(() =>{
        async function fetchData()
        {
            const bookResponse = await fetch(BOOK_LIST_API_URL + '/' + id);
            const bookJson = await bookResponse.json();
            console.log(bookJson);
            updateBookDetail(bookJson);
        }
        fetchData();
    }, []);
    return <div>
        {
            <div>
                <p>{"Title: " + book.title}</p>
                <p>{"Author: " + book.author}</p>
                <img src={book.cover} alt={book.title} ></img>
                <p>{"Description: " + book.description}</p>
                <p></p>
            </div>
        }
    </div>;
}

export default BookDetailsPage;