import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./abovenav.css";
import { Link } from "react-router-dom"; 

const SearchBar = () => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const searchRef = useRef(null);

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
            setSuggestions([]);
        } else {
            const filteredBooks = books.filter(book =>
                book.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                getAuthorNameById(book.id_author).toLowerCase().includes(event.target.value.toLowerCase())
            );
            const suggestions = filteredBooks.slice(0, 5).map(book => ({
                ...book,
                authorName: getAuthorNameById(book.id_author)
            }));
            setSuggestions(suggestions);
        }
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSuggestions([]);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={searchRef}>
            <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={handleChange}
            
            />
            {suggestions.length > 0 && (
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
            )}
        </div>
    );
};

export default SearchBar;
