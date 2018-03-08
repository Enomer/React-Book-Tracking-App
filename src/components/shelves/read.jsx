import React, { Component } from 'react'


class Read extends Component{
  render() {
    return <ol className="styling grid-x align-middle text-center align-center styling" id="Read">
      {this.props.books.filter((book) => book.shelf === 'read').map((book) => (
        <li className={`cell shrink large-auto cr-${book.id}`} key={book.id}>
          <img alt={book.title} src={book.coverURL} style={{padding: "1.7rem"}} />
          <br></br>
          <select defaultValue="read" onChange={(e) => this.props.changeShelf(e.target.value, book.id)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
          <h4>{book.title}</h4>
          <h5>{book.author}</h5>
        </li>
      ))}
    </ol>
  }
}

export default Read
