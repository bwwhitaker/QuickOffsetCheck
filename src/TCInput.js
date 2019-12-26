import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './App.css';
import PropTypes from 'prop-types';


class TCInput extends React.Component {

  getContent(event) {
    this.props.callback(event.target.value);
    }

  render() {
    return (
      <div>
      <Container>
        <InputGroup>
          <Form.Control type="text" onChange={this.getContent.bind(this)} placeholder="Enter TC: --:--:--.--"/>
        </InputGroup>
        </Container>
      </div>
    );
  }
}

TCInput.protoTypes = {
  callback : PropTypes.func,
}

export default TCInput;
