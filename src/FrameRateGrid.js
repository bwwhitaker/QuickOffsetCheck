import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class FrameRateGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      fps: "23.98",
      type: "No Offset",
      InputTCData: "--:--:--.--",
      TCinFrames: "I'm the answer!",
    }
  }

  sayHello() {
    alert('Hello!');
  }
  onClickHandlerFPS = event => {
      const fps = event.target.innerHTML;
      this.setState({ fps } )
}

onClickHandlerType= event => {
  const type = event.target.innerHTML;
  this.setState({ type })
}

  render() {
    var InputTCData = this.state.InputTCData;
    return (
      <div>
      <Container>
<Button variant="warning" onClick={() => this.setState({ asmDisplaydata: InputTCData})}></Button>

<Row>
<InputGroup.Text >{InputTCData}</InputGroup.Text>
</Row>



</Container>


  </div>
  );
}
}

export default FrameRateGrid;
