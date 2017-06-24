import React, { Component } from 'react';
import {Grid, Row, Button,Modal, Col} from 'react-bootstrap';

class Books extends Component {

  constructor(props){
    super(props);
    this.state = {
      wishList:[],
      showModal: false
    }
  }
  addWishlist(e){

this.setState({ wishList: this.state.wishList.concat([e.target.value]) })
 
  }

    close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });

  }



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
            <Button bsStyle="info" className="view-wishlist" onClick={this.open.bind(this)}>View WishList</Button>
            <Grid>
              <Row className="book-row">
                <Col xs={12} md={3} lg={3}>
                  <img src={thumbnail} className="book-image" role="presentation" />
                </Col>
                <Col xs={12} md={8} lg={8}>
                <Button bsStyle="primary" value={title} onClick={this.addWishlist.bind(this)}className="add-button">Add Button</Button>
                <h4 className="book-headers"> {title}</h4>
                  <h6 className="authors">by : {authors} </h6> 
                  <div className="description"> {description}</div>
                  <h5 className="count">Page Count : {pageCount}</h5>
                </Col>
              </Row>
              <Row>
                
              </Row>
            </Grid>

             <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Book WishList</Modal.Title>
          </Modal.Header>
          <Modal.Body><ul>
            {
              this.state.wishList.map(item =>{
               let book = item;
               return(<li key={book}>{book}</li>);
            })}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
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
