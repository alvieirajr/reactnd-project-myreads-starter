import React from 'react';
import ContextMenu from './ContextMenu';

const Book = (props) => {    
    return (
        <div className="book">
            <div className="book-top">                                                         
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.image})`}}></div>
                <div className="book-shelf-changer">
                    <ContextMenu/>
                </div>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors}</div>
        </div>
    )
}

export default Book;

