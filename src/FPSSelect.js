import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from 'prop-types';


class FPSSelect extends React.Component {

  state = {
      value: "23.98"
  }
    onClickHandler = event => {
        const value = event.target.innerHTML;
        this.setState({ value })
  }


  render()
  {
      var FPSRate = this.state.value
    return (
        <div >
          <InputGroup >
            <InputGroup.Prepend>

          <InputGroup.Text >Select FPS:</InputGroup.Text>
          </InputGroup.Prepend>
          <InputGroup.Append>
        <DropdownButton variant="warning" title= {this.state.value}>
            <Dropdown.Item active={this.state.value === "23.98"} onClick={this.onClickHandler}>23.98 </Dropdown.Item>
        <Dropdown.Item active={this.state.value === "24"} onClick={this.onClickHandler}>24 </Dropdown.Item>
        <Dropdown.Item active={this.state.value === "PAL"} onClick={this.onClickHandler}>PAL </Dropdown.Item>
        <Dropdown.Item active={this.state.value === "PAL"} onClick={this.onClickHandler}>NTSC DF </Dropdown.Item>
        <Dropdown.Item active={this.state.value === "PAL"} onClick={this.onClickHandler}>NTSC NDF </Dropdown.Item>
        </DropdownButton>
        </InputGroup.Append>
        </InputGroup>
        <p> {FPSRate} </p>
        </div>
    );
  }
}

FPSSelect.protoTypes = {
  callback : PropTypes.func,
}

export default FPSSelect;
