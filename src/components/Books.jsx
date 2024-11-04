import { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } ,[])

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Books :{books.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {
                books.map(book => <Book book= {book} key={books.bookId} ></Book> )
            }
            </div>
        </div>
    );
};

export default Books;