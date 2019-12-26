import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TCInput from './TCInput';
import FPSSelect from './FPSSelect.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import OffsetSelect from './OffsetSelect.js';
import FrameRateGrid from './FrameRateGrid.js';


import ASMDisplay from './ASMDisplay';

class Index extends React.Component {
    constructor(props){
      super(props);
      this.state= {
        TC : ""
      }
    }

    formTCInput(params) {
      this.setState({
        TC : params
      })
    }

    render() {
      var TCInputdata = this.props.TC

      return(
          <div>
          <Row>
            <Col sm={3.5}>
                <TCInput callback={this.formTCInput.bind(this)} />
            </Col>
            <Col sm={8.5}>
                <ASMDisplay TCdata={this.state.TC} FPSdata={this.state.FPS} />
            </Col>
            </Row>
          
</div>

      );
    }

    }

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
