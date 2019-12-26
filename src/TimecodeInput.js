import React from 'react';
import Component from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';

class TimecodeInput extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    select(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            value: event.target.innerText
        });
    }
render () {
  return (
    <div >
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <span
        onClick={this.toggle}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={this.state.dropdownOpen}
      >{this.state.value}
      </span>
      <DropdownButton>
        <div onclick={this.select}>23.98</div>
        <div onclick={this.select}>24</div>
        <div onclick={this.select}>PAL</div>
        <div onclick={this.select}>NTSC</div>
        <div onclick={this.select}>NTSC DF</div>
    </DropdownButton>
      </Dropdown>
              <InputGroup >

                <FormControl placeholder="hours" id="hours" maxLength="2"/>
                <FormControl placeholder="minutes" id="minutes" maxLength="2"/>
                <FormControl placeholder="seconds" id="seconds" maxLength="2"/>
                <FormControl placeholder="frames" id="frames" maxLength="2"/>
                <InputGroup.Append>
                    <Button variant="warning">Get ASM</Button>
                </InputGroup.Append>
            </InputGroup>
    </div>

  );
}
}

export default TimecodeInput;
