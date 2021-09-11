import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SearchBook from "./components/SearchBook";
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from "./components/ListBooks";


class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = () => {
        BooksAPI.getAll().then((books) => {
                this.setState({books: books})
            }
        )
    }

    handleShelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                BooksAPI.getAll().then((books) => {
                        this.setState({books: books})
                    }
                )
            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <Route exact path='/'>
                        <ListBooks key={Date.now()}
                                   books={this.state.books}
                                   onBookShelfChange={this.handleShelfChange}/>
                    </Route>
                    <Route path='/search'>
                        <SearchBook books={this.state.books}
                                    onBookShelfChange={this.handleShelfChange}/>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default BooksApp
