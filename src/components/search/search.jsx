import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'


class Search extends Component {
  state = {
    inputChar: '',
    void: 'none',
    alive: 'flex'
  }
  inputDetect = (query) => {
    this.setState({ inputChar: query })
  }
  render() {
    let showingBooks
    let emptySearch = this.state.void
    if (this.state.inputChar)  {
      const match = new RegExp(escapeRegExp(this.state.inputChar), 'i')
      emptySearch = this.state.alive
      showingBooks = this.props.books.filter(
        (book) => match.test(book.title)
      )
    } else {
      showingBooks = this.props.books
    }
    return (
      <div>
        <div className="large-6-up grid-x align-middle align-center searchPad">
          <input
            className="cell large-6 medium-10 small-12"
            type="text"
            placeholder="Search Book"
            value={this.state.inputChar}
            onChange={(event) => this.inputDetect(event.target.value)}
            />
        </div>
        <ol id="searchList" className="grid-x styling" style={{display: emptySearch, padding: "2rem"}}>
          {showingBooks.map((book) => (
            <li className={`cell large-4 medium-6 text-center align-center grid-x cr-${book.id}`} key={book.id}>
              <div className="cell large-12">
                <img alt={book.title} src={book.coverURL} style={{height:"250px", padding: "1.7rem"}}/>
              </div>
              <div className="cell grid-x align-center">
                <select className="cell shrink" defaultValue={book.shelf} onChange={(e) => this.props.changeShelf(e.target.value, book.id)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="Currently Reading">Currently Reading</option>
                  <option value="Want to Read">Want to Read</option>
                  <option value="Read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
              <h4 className="cell large-12 small-12">{book.title}</h4>
              <h5 className="cell ">{book.author}</h5>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Search
