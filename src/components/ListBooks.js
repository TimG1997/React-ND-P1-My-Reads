import React from 'react';
import BookShelf from "./BookShelf";
import AddBookButton from "./AddBookButton";

class ListBooks extends React.Component {
    render() {
        const currentlyReadingBooks = this.props.books.filter(book => book.shelf === 'currentlyReading')
        const wantToReadBooks = this.props.books.filter(book => book.shelf === 'wantToRead')
        const readBooks = this.props.books.filter(book => book.shelf === 'read')

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title="Currently Reading"
                            books={currentlyReadingBooks}
                            onBookShelfChange={this.props.onBookShelfChange}
                        />
                        <BookShelf
                            title="Want to Read"
                            books={wantToReadBooks}
                            onBookShelfChange={this.props.onBookShelfChange}
                        />
                        <BookShelf
                            title="Read"
                            books={readBooks}
                            onBookShelfChange={this.props.onBookShelfChange}
                        />
                    </div>
                </div>
                <AddBookButton/>
            </div>
        )
    }
}

export default ListBooks
