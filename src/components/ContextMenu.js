import React, { Component } from 'react';

class ContextMenu extends Component {

    render() {

        let shelf = this.props.book.shelf ? this.props.book.shelf : "";

        return (
            <select value={shelf} onChange={(event) => this.props.onChangeShelf(event.target.value, this.props.book)}>
                <option value="" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default ContextMenu;