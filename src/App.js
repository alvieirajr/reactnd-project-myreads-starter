import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './components/MyReads';
import SearchBook from './components/SearchBook';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
  
  state = {
    books : []
  }

  componentDidMount() {
    this.getBooks();
    //console.log(this.props);
  }  

  getBooks = () => {
    BooksAPI.getAll().then((data) => {
      console.log(data);
      this.setState({ 
        books: data
      });
    });
  }

  handleChangeShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then((result) => {
      this.getBooks();
    });  
  }
  
  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() => <MyReads onChangeShelf={this.handleChangeShelf} books={this.state.books}/>}/>
          <Route path="/search" component={SearchBook}/>
      </div>
    )
  }
}

export default BooksApp
