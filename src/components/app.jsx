import React, { Component } from 'react';
import Wanttoread from './shelves/wanttoread';
import CurrentlyReading from './shelves/currentlyreading';
import Read from './shelves/read';
import { Link,withRouter } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import { Route } from 'react-router-dom'
import Search from './search/search'
import * as BooksAPI from './api/BooksAPI'

class App extends Component {
  state = {
    Books: [],
    SearchedBooks: [],
    inputChar: '',
    whichpage: null,
    location: '/'
  }
  componentDidMount() {
    this.bookFetch();
    BooksAPI.search('Linux').then(response => {
      console.log(response)
    })
    BooksAPI.getAll().then(response => {
      console.log(response)
    })
  }

  bookFetch = () => {
    BooksAPI.getAll().then(
      (books) => {
      this.setState({Books: books})
      })
    }

  updateShelves = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.bookFetch()
    })
  }
  searchFetch = (input) => {
    BooksAPI.search(input).then(
      (b) => {
        (b.length > 0 ?
          this.setState({SearchedBooks: b})
          :
          null
          // this.setState({Books: []})
        )}
      )
    }
  inputDetect = (query) => {
    this.setState({ inputChar: query })
  }
  searchState = () => {
    this.setState ({ whichpage: 'true'})
  }

      render() {
        const {location} = this.props
        const isHome = location.pathname === '/'

        return (
          <div className="App">
            <header className="App-header">
              <div className="grid-x align-middle align-center">
                <h1 className="cell large-6 small-12 App-title align-self-middle align-self-center text-center myreads" >
                  My Reads
                </h1>
                <Link
                  className="cell shrink align-self-middle large-6 small-12 align-self-center text-center align-center"
                  to={!isHome ? '/' : '/search'}>
                <AwesomeButton
                  style={{fontWeight: '900'}}
                  size="large"
                  type={!isHome ?
                    'secondary' : 'primary'}>
                    {!isHome ? 'Home' : 'Search'}
                  </AwesomeButton>
              </Link>
            </div>
          </header>
          <Route exact path="/" render={()=>
            <main style={{padding:"3rem"}} className="grid-container">
              <h2>Currently Reading</h2>
              <hr></hr>
              <article style={{padding:'2.5rem 0'}}>
                <CurrentlyReading
                  changeShelf={this.updateShelves}
                  books={this.state.Books}
                />
              </article>
              <h2>Want To Read</h2>
              <hr></hr>
              <article style={{padding:'2.5rem 0'}}>
                <Wanttoread
                  changeShelf={this.updateShelves}
                  books={this.state.Books}
                />
              </article>
              <h2 >Read</h2>
              <hr></hr>
              <article style={{padding:'2.5rem 0'}}>
                <Read
                  changeShelf={this.updateShelves}
                  books={this.state.Books}
                />
              </article>
            </main>
          }></Route>
          <Route exact path='/search' render={({history}) =>
          <Search
            searchState={this.searchState}
            changeShelf={this.updateShelves}
            books={this.state.Books}
            searchedBooks={this.state.SearchedBooks}
            inputChar={this.state.inputChar}
            inputDetect={this.inputDetect}
            searchedBooks={this.state.SearchedBooks}
            searchIt={this.searchFetch}
          />
        }>
      </Route>
    </div>
  );
}
}


export default withRouter(App);

//look up higher order components
//what is an HOC





// Old ideas


// changeShelf = (whichShelf, specificId) => {             // takes in two parameters of e.target.value and current book.id
// console.log(this.state.books); console.log(specificId) // Always console.log to troubleshoot and learn
// let indexthing = this.state.books                    // this variable has stored in it a newly created array
//     .map((e) => (e.id))                             // this array is of only each book ID
//     .indexOf(specificId)                           //  this indexOf returns index of the book.id(specificId)from the newly mapped array
// let newState = this.state                         // NEVER directly modify state, make instead a variable which contains new state
// newState.books[indexthing].shelf = whichShelf    //take new state and apply our index of that book to find it
//    this.setState({                              // and set it equal to our returned e.target.value (currentlyReading/wantToRead/read)
//      books: newState.books
//    })
// }






// changeShelf = (newShelf,id) =>
// this.setState({Books:this.state.Books.map(book => book.id === id ? {...book,shelf:newShelf} : book)})


// spread operator also look up object.assign vs {...}
// map over each book and IF the book.id is true, then print out a new item with all the book's information
// this is what (...book) means, and then replace ONLY the shelf with the newShelf parameter which is e.target.value
// which is currentlyReading/wantToRead/read and if FALSE then just print out an item in the new map array that just
// copies the old book
