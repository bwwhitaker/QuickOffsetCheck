import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';

function Calculate() {
  return (
      <div>
      <Button variant="warning">Calculate</Button>
      </div>
  );
}

export default Calculate;



constructor(props) {
  super(props);
  this.state = {value: '--:--:--.--'};
}

constructor(props) {
  super(props);
  this.state = {timecode: '00:00:00.00'};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({timecode: event.target.value});
}
<form >
      <label>
         Result:
         <Form.Control readOnly placeholder="--:--:--.--" />
      </label>
    </form>
    {this.props.timecode}