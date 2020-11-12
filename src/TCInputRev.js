import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './App.css';
import PropTypes from 'prop-types';
import Cleave from 'cleave.js/react';


class TCInput2 extends React.Component {

  constructor(props, context) {
       super(props, context);

       this.state = {
           customRawValue:     ''
       };

       this.onCustomChange = this.onCustomChange.bind(this);
   }

   onCustomChange(event) {
       this.setState({customRawValue: event.target.rawValue});
   }

   render() {
       return (
           <div>
               <Cleave placeholder="Enter Timecode" options={{delimiters: [':', ':', '.'],blocks: [2,2,2,2], numericOnly: true}}
                       onChange={this.onCustomChange}/>

               <div class="WhiteFont">
                   <p>custom: {this.state.customRawValue}</p>
               </div>
           </div>
       );
   }
}

TCInput2.protoTypes = {
  callback : PropTypes.func,
}

export default TCInput2;
