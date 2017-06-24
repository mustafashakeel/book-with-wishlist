import React, { Component } from 'react';
import {Well,Button, FormControl} from 'react-bootstrap';

class SearchInput extends Component {
  constructor(props){
      super(props);
      this.state = {
        value: props.value
      }
  }
  onChange(e){
      this.setState({value: e.target.value});
      this.props.onChange(this.state.value);
  }

  render() {
    return (
      <Well>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Search Books..."
          onChange={this.onChange.bind(this)}
        />
        <Button bsStyle="primary" className="add-button">Add Button</Button>
      </Well>
    );
  }
}

export default SearchInput;
