import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchBook extends Component {

    state = {
        isFetching : true,
        books : []
    }
    
    searchBook() {
      
        BooksAPI.search("Satire", 100).then(data => {
            if (data.constructor.name === "Array") {
                this.setState({
                    isFetching : false,
                    books: data 
                })    
            } else {
                this.setState({
                    isFetching : false,
                    books: []
                })                    
            }
        })
    }

    componentDidMount() {
        this.searchBook();
    }

    render() {
        console.log(this.state.books);
        let isFetching = this.state.isFetching;
        if (isFetching === false) {
            this.state.books.map( (item) => {
                //console.log(item.title + '   ' + item.authors.join('; '));
            })
        }

        


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
                           { !isFetching ? this.state.books.map( (item) => (
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