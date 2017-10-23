import React, { Component } from 'react';
import ContextMenu from './ContextMenu';
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
      console.log(data);
      this.setState({ 
        books: data
      });
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
                <Shelf title="Currently Reading"/>
                <Shelf title="Want to Read"/>
                <Shelf title="Read"/>                
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