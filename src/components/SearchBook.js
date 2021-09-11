import React from 'react';
import CloseSearchButton from './CloseSearchButton';
import Book from './Book';
import * as BooksAPI from '../BooksAPI'

class SearchBook extends React.Component {
    state = {
        query: '',
        foundBooks: []
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))

        if (this.state.query.length <= 0) {
            this.setState(() => ({
                foundBooks: []
            }))
        } else {
            BooksAPI.search(this.state.query.trim())
                .then(books => {
                    if (books.error) {
                        this.setState({foundBooks: []})
                    } else {
                        this.setState({foundBooks: books})
                    }
                })
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <CloseSearchButton/>
                    <div className="search-books-input-wrapper">
                        <input
                            onChange={(event) => this.updateQuery(event.target.value)}
                            value={this.state.query}
                            type="text"
                            placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.foundBooks && this.state.foundBooks.map((book) => {
                                book.shelf = 'none'

                                this.props.books.forEach(bookAlreadyInShelf => {
                                    if (book.id === bookAlreadyInShelf.id) {
                                        book.shelf = bookAlreadyInShelf.shelf;
                                    }
                                })

                                return (
                                    <li key={book.id}>
                                        <Book book={book}
                                              onBookShelfChange={this.props.onBookShelfChange}/>
                                    </li>
                                )
                            }
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook
