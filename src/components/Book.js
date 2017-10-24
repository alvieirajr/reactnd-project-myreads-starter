import React from 'react';
import ContextMenu from './ContextMenu';

const Book = (props) => {    
    return (
        <div className="book">
            <div className="book-top">                                                         
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`}}></div>
                <div className="book-shelf-changer">
                    <ContextMenu/>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors.join('; ')}</div>
        </div>
    )
}

export default Book;

