import React, { Component } from 'react';
import Book from './Book';
  
class Shelf extends Component {
    render() {
      console.log(this.props.books);
        return(
          <div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
               {this.props.books.map( (item) => (
                <li key={item.id}>
                  <Book 
                    title={item.title}
                    authors={item.authors[0]}
                    image={item.imageLinks.smallThumbnail}
                  />                  
                </li>
               ))}
              </ol>
            </div>
          </div> 
          </div>           
        )
    }
}

export default Shelf; 