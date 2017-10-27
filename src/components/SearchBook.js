import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import { debounce } from 'throttle-debounce';
import _ from 'underscore';


class SearchBook extends Component {

    state = {
        isFetching: true,
        books: []
    }

    prepareResult(collection, result) {
        return _.map(result, function (element) {
            var treasure = _.findWhere(collection, { id: element.id });
            return _.extend(element, treasure);
        });
    }

    searchBook() {

        let value = document.getElementById('search-input').value;

        if (value) {
            BooksAPI.search(value, 100).then(data => {
                //console.log(this.props.books);
                if (data && (data.constructor.name === "Array")) {
                    this.setState({
                        isFetching: false,
                        books: this.prepareResult(this.props.books, data)
                    })
                } else {
                    this.setState({
                        isFetching: false,
                        books: []
                    })
                }
            });
        } else {
            this.setState({
                isFetching: false,
                books: []
            })
        }
    }

    handleChangeShelf = (shelf, book) => {
        this.props.onChangeShelf(shelf, book);
    }

    render() {
        //console.log(this.state.books);
        let isFetching = this.state.isFetching;
        let isThereResult = this.state.books.lenght > 0;

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input id="search-input" type="text" placeholder="Search by title or author" onKeyUp={debounce(400, this.searchBook.bind(this))} />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {!isFetching ? this.state.books.map((item) => (
                                <li key={item.id}>
                                    <Book onChangeShelf={this.handleChangeShelf} book={item} />
                                </li>
                            )) : ''}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBook;