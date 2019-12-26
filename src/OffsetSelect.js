import React from 'react';
import Component from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from 'prop-types';

class OffsetSelect extends React.Component {
  state = {
      type: "ASM"
  }
  onClickHandlerType= event => {
        const type = event.target.innerHTML;
        this.setState({ type })
  }
  render(){
    var OffsetType = this.state.type
    return (
        <div>
        <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-default">Set Type:</InputGroup.Text>
        <DropdownButton variant="warning" title= {this.state.type}>
            <Dropdown.Item active={this.state.type === "ASM"} onClick={this.onClickHandlerType}>ASM</Dropdown.Item>
            <Dropdown.Item active={this.state.type === "1.5 seconds"} onClick={this.onClickHandlerType}>1.5 seconds </Dropdown.Item>
        </DropdownButton>
        </InputGroup>
        <p> {OffsetType} </p>
        </div>
    );
  }
}

OffsetSelect.protoTypes = {
  callback : PropTypes.func,
}

export default OffsetSelect;