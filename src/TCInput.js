import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import './App.css';
import './index.css'
import PropTypes from 'prop-types';
import Cleave from 'cleave.js/react';



class TCInput extends React.Component {

  getContent(event) {
    this.props.callback(event.target.value);
    }

  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">TC:</InputGroup.Text>
      </InputGroup.Prepend>
      <InputGroup.Append id="inputGroup-sizing-sm">
        <Cleave class="input" placeholder="" options={{delimiters: [':', ':', '.'],blocks: [2,2,2,2], numericOnly: true}}
                onChange={this.getContent.bind(this)}/>
      </InputGroup.Append>
        </InputGroup>
        </Container>
    );
  }
}

TCInput.protoTypes = {
  callback : PropTypes.func,
}

export default TCInput;
