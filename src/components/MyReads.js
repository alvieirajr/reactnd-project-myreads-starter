import React, { Component } from 'react';
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI';
 
class MyReads extends Component {

  state =  {
    books: []
  }
  
  componentDidMount() {
    this.getAll();
  }
  
  getAll = () => {
    BooksAPI.getAll().then((data) => {
      this.setState({ 
        books: data
      });
    });
  }

  handleChange = (shelf, book) => {
    BooksAPI.update(book, shelf).then((result) => {
      this.getAll();
    });  
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
              <Shelf onChange={this.handleChange} title="Currently Reading" books={this.state.books.filter((book) => 
                book.shelf === "currentlyReading" 
                )}/>
              <Shelf onChange={this.handleChange} title="Want to Read" books={this.state.books.filter((book) => 
                book.shelf === "wantToRead" 
                )}/>
              <Shelf onChange={this.handleChange} title="Read" books={this.state.books.filter((book) => 
                book.shelf === "read" 
              )}/>              
              { this.state.books.filter((book) => book.shelf === "none").length > 0 ?
                <Shelf onChange={this.handleChange} title="None" books={this.state.books.filter((book) => 
                  book.shelf === "none" 
                )}/> : '' }              
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MyReads;