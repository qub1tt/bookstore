import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./abovenav.css"
import { Link } from "react-router-dom"; 

const SearchBar = () => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookResponse = await axios.get('http://localhost:8080/book/');
                setBooks(bookResponse.data.data);

                const authorResponse = await axios.get('http://localhost:8080/author');
                setAuthors(authorResponse.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const getAuthorNameById = (authorId) => {
        const author = authors.find(author => author._id === authorId);
        return author ? author.name : '';
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        if (event.target.value === '') {
            setSearchResults([]);
            setSuggestions([]);
        } else {
            const results = books.filter(book =>
                book.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                getAuthorNameById(book.id_author).toLowerCase().includes(event.target.value.toLowerCase())
            ).map(book => book._id);
            setSearchResults(results);

            // Suggestions based on search results
            const suggestions = books.filter(book =>
                book.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                getAuthorNameById(book.id_author).toLowerCase().includes(event.target.value.toLowerCase())
            ).slice(0, 5).map(book => ({...book, authorName: getAuthorNameById(book.id_author)})); // Include author name in suggestions
            setSuggestions(suggestions);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={handleChange}
            />
            <div className='suggestion_search'>
                <div className='suggestion_container'>
                    {suggestions.map((book) => (
                        <div key={book._id} className='suggestion_box'>
                            <Link to={`/book/${book._id}`} className='suggestion_img'>
                                <img src={book.img} alt={book.name} />
                            </Link>
                            <div className='suggestion_box_describe'>
                                <p className='bn'>{book.name}</p>
                                <p className='ba'>{book.authorName}</p>
                                <p className='bp'>{book.price}đ</p> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
