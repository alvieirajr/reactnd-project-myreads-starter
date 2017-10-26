import React, { Component } from 'react';
 
class ContextMenu extends Component {    
    render() {
        return (
            <select value={this.props.book.shelf} onChange={(event) => this.props.onChangeShelf(event.target.value, this.props.book)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default ContextMenu;