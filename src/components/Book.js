import React from 'react';
import ContextMenu from './ContextMenu';

const Book = (props) => {    

    let title = props.book.title;
    let authors = (props.book.authors || []).join('; ');
    let thumbnail = ((props.book.imageLinks ? props.book.imageLinks.smallThumbnail : '') || '');

    function handleChangeShelf(shelf, book) {
        props.onChangeShelf(shelf, book);
    }  
        
    return (
        <div className="book">
            <div className="book-top">                                                         
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})`}}></div>
                <div className="book-shelf-changer">
                    <ContextMenu book={props.book} onChangeShelf={handleChangeShelf}/>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

export default Book;

