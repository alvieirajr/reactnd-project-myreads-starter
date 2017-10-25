import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchBook extends Component {

    state = {
        books : []
    }

    searchBook() {
        BooksAPI.search("React", 100).then(data => {
            console.log(data);
            console.log(data.constructor.name);
            if (data.constructor.name === "Array") {
                this.setState({
                    books: data 
                })    
            } else {
                this.setState({
                    books: []
                })                    
            }
        })
    }

    componentDidMount() {
        this.searchBook();
    }

    render() {
        console.log(this.state);
        //console.log(this.state.books.length);
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                           { (this.state.books.length > 0) ? this.state.books.map( (item) => (
                                <li key={item.id}>
                                    <Book book={item}/>                  
                                </li>
                            ))  : '' }
                        </ol>
                    </div>
                </div>            
            </div>
        )
    }
}

export default SearchBook;