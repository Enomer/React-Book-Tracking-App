import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'


class Search extends Component {
  state = {
    BookFeed: [],
    void: 'none',
    alive: 'flex'

  }

  render() {
    // let showingBooks
    // let emptySearch = this.state.void              ///REG EXPRESSION maybe try to do on each keypress ? web socket??
    // if (this.state.inputChar)  {
    //   const match = new RegExp(escapeRegExp(this.state.inputChar), 'i')
    //   emptySearch = this.state.alive
    //   showingBooks = this.props.Books.filter(
    //     (book) => match.test(book.title)
    //   )
    // } else {
    //   showingBooks = this.props.Books
    // }
    return (
      <div>
        <div className="large-6-up grid-x align-middle align-center searchPad">
          <input
            className="cell large-6 medium-10 small-12"
            type="text"
            placeholder="Search Book"
            value={this.props.inputChar}
            onKeyPress={this.props.handleKeyPress}
            onChange={(event) => this.props.inputDetect(event.target.value)}
            />
        </div>


        <ol id="searchList" className="grid-x styling" style={{display: 'inherit', padding: "2rem"}}>
            {this.props.searchedBooks.map((book) => (
            <li className={`cell large-4 medium-6 text-center align-center grid-x cr-${book.id}`} key={book.id}>
              <div className="cell large-12">
                <img alt={book.title} src={book.imageLinks.smallThumbnail} style={{height:"250px", padding: "1.7rem"}}/>
              </div>
              <div className="cell grid-x align-center">
                <select className="cell shrink" defaultValue="None" onChange={(e) => this.props.changeShelf(book, e.target.value)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
              <h4 className="cell large-12 small-12">{book.title}</h4>
              <h5 className="cell ">{book.author}</h5>
            </li>
          ))
        }
        </ol>

      </div>
    )
  }
}

export default Search
