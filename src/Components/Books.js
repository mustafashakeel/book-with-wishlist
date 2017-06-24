import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Books extends Component {
  render() {
    let bookItems;
    if(this.props.books){
      bookItems = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        let thumbnail = book.volumeInfo.imageLinks.thumbnail;
        let authors = book.volumeInfo.authors;
        let description = book.volumeInfo.description;
        let pageCount = book.volumeInfo.pageCount;
       
        return (
          <div className="book-panel" key={id}>
            <Grid>
              <Row className="book-row">
                <Col xs={12} md={3} lg={3}>
                  <img src={thumbnail} className="book-image" role="presentation" />
                </Col>
                <Col xs={12} md={8} lg={8}>
                <h4 className="book-headers"> {title}</h4>
                  <h6 className="authors">by : {authors} </h6> 
                  <div className="description"> {description}</div>
                  <h5 className="count">Page Count : {pageCount}</h5>
                </Col>
              </Row>
              <Row>
                
              </Row>
            </Grid>
          </div>
        )
      });
    }
    return (
      <div>
        <div className="books-boxes">
          {bookItems}
        </div>
      </div>
    );
  }
}

export default Books;
