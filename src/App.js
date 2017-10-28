import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './components/MyReads';
import SearchBook from './components/SearchBook';
import { Route } from 'react-router-dom';

class BooksApp extends Component {

    state = {
        books: [],
        isFetching: true
    }

    componentDidMount() {
        this.getBooks();
        //console.log(this.props);
    }

    getBooks = () => {
        BooksAPI.getAll().then((data) => {
            //console.log(data);
            this.setState({
                books: data,
                isFetching: false
            });
        });
    }

    handleChangeShelf = (shelf, book) => {
        //console.log(book);
        this.setState({
            books: this.state.books.map((item) => {
                if (item.id === book.id) {
                    item.shelf = shelf;
                }
                return item;
            }),
            isFetching: false
        });

        BooksAPI.update(book, shelf).then((result) => {
            //this.getBooks();
        });
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => <MyReads isFetching={this.state.isFetching} onChangeShelf={this.handleChangeShelf} books={this.state.books} />} />
                <Route path="/search" render={() => <SearchBook onChangeShelf={this.handleChangeShelf} books={this.state.books} />} />
            </div>
        )
    }
}

export default BooksApp
