import React from 'react';
import Book from "./Book";

class BookShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.title}>
                                <Book book={book}
                                      onBookShelfChange={this.props.onBookShelfChange}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )

    }
}

export default BookShelf
