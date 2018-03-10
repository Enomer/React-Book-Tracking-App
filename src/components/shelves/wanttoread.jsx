import React, { Component } from 'react'


class Wanttoread extends Component{
  render() {
    return <ol className="styling">
      {this.props.books.filter((book) => book.shelf === 'wantToRead').map((book) => (
        <li className={`cr-${book.id}`} key={book.id}>
            <img alt={book.title} src={book.coverURL} style={{height:"250px", padding: "1.7rem"}}/>
        <br></br>
            <select defaultValue="wantToRead" onChange={(e) => this.props.changeShelf(e.target.value, book.id)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
              <h4>{book.title}</h4>
              <h5>{book.author}</h5>
        </li>
      )
    )
  }
</ol>
}
}

export default Wanttoread
