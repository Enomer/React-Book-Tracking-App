import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {
  render() {
    let showingBooks
    if (this.props.inputChar)  {
      this.props.searchIt(this.props.inputChar)
      const match = new RegExp(escapeRegExp(this.props.inputChar), 'i')
      showingBooks = this.props.searchedBooks.filter(
        (book) => match.test(book.title)
      )
    } else {
      showingBooks = this.props.searchedBooks
    }

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

      <ol className="grid-x styling align-center">
        {showingBooks.map((book) => (
          <li className={`cell large-4 medium-6 text-center align-center grid-x cr-${book.id}`} key={book.id}>
            <div className="cell large-12">
              {console.log(book.imageLinks)}
              <img alt={book.title} src={book.imageLinks === undefined ? 'https://fthmb.tqn.com/GJLd_80qHxwJ2OwWjss_VaEUMEI=/768x0/filters:no_upscale()/question_mark-166836001-56af9f3c3df78cf772c6c639.jpg' : book.imageLinks.thumbnail} style={{height:"250px", padding: "1.7rem"}}/>
          </div>
          <div className="cell grid-x large-12 align-center">
            {book.id !== 'nothing' ?
            <select className="cell shrink" defaultValue="None" onChange={(e) => this.props.changeShelf(book, e.target.value)}>
              <option value="none" >Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      <option value="none">None</option>
  </select>
  :
  <p>oh wellz</p>
}
</div>
<h4 className="cell large-12 small-12">{book.title}</h4>
<h5 className="cell ">{book.authors}</h5>
</li>
))
}


</ol>

</div>
)
}
}

export default Search
