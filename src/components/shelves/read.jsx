import React, { Component } from 'react'


class Read extends Component{
  render() {
    return <ol className="grid-x styling align-center">
      {this.props.books.filter((book) => book.shelf === 'read').map((book) => (
        <li className={`cell large-4 medium-6 text-center align-center grid-x cr-${book.id}`} key={book.id}>
          <div className="cell large-12">
            <img alt={book.title} src={book.imageLinks.smallThumbnail} style={{height:"250px", padding: "1.7rem"}}/>
            </div>
            <div className="cell grid-x large-12 align-center">
            <select className="cell shrink" defaultValue="read" onChange={(e) => this.props.changeShelf(book, e.target.value)}>
              <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
          </div>
              <h4 className="cell large-10">{book.title}</h4>
              <h5 className="cell">{book.authors[0]}</h5>
        </li>
      ))}
    </ol>
  }
}

export default Read
