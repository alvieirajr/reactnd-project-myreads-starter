import React, { Component } from 'react';
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI';
import {Link} from 'react-router-dom';

class MyReads extends Component {

  handleChangeShelf = (shelf, book) => {
    this.props.onChangeShelf(shelf, book);
  }  

  render() {
    
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf onChangeShelf={this.handleChangeShelf} title="Currently Reading" books={this.props.books.filter((book) => 
                book.shelf === "currentlyReading" 
                )}/>
              <Shelf onChangeShelf={this.handleChangeShelf} title="Want to Read" books={this.props.books.filter((book) => 
                book.shelf === "wantToRead" 
                )}/>
              <Shelf onChangeShelf={this.handleChangeShelf} title="Read" books={this.props.books.filter((book) => 
                book.shelf === "read" 
              )}/>                         
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MyReads;