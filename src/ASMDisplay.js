import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './index.css';

class ASMDisplay extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      start: "00",
      fps: "23.98",
      type: "ASM",
      asmDisplaydata: "--:--:--.--",
    }
  }

  onClickHandlerStart = event => {
      const start = event.target.innerHTML;
      this.setState({ start } )
  }
  onClickHandlerFPS = event => {
      const fps = event.target.innerHTML;
      this.setState({ fps } )
}

onClickHandlerType = event => {
  const type = event.target.innerHTML;
  this.setState({ type })
}



  render() {
    var TCinputdata = this.props.TCdata.replace(".",":").replace(".",":").replace(".",":").replace(".",":").replace(";",":").replace(";",":").replace(";",":").replace(";",":")
    var FPSRate = this.state.fps;
    var asmDisplaydata = this.state.asmDisplaydata;
    var OffsetType = this.state.type;
    var OffsetCalcString = String(this.state.fps + " " + this.state.type)

    var StartValue

    function SetStart(InputValue) {
      if (InputValue === "00") {
        StartValue = 0
      } else if (InputValue === "01") {
        StartValue = 1
      } else if (InputValue === "10") {
        StartValue = 10
      }
      return StartValue
    }


    var HourStartValueResult = SetStart(this.state.start)

    var OffsetCalcValue

    function SetCalc(InputValue) {
      if (InputValue === "23.98 ASM") {
        OffsetCalcValue = 1
      } else if (InputValue === "24 ASM") {
        OffsetCalcValue = 1
      } else if (InputValue === "PAL ASM") {
        OffsetCalcValue = 1
      } else if (InputValue === "NTSC NDF ASM") {
        OffsetCalcValue = 1
      } else if (InputValue === "NTSC DF ASM") {
        OffsetCalcValue = 1
      } else if (InputValue === "23.98 1.5 sec") {
        OffsetCalcValue = 1
      } else if (InputValue === "24 1.5 sec") {
        OffsetCalcValue = 1
      } else if (InputValue === "PAL 1.5 sec") {
        OffsetCalcValue = 1
      } else if (InputValue === "NTSC NDF 1.5 sec") {
        OffsetCalcValue = 1
      } else if (InputValue === "NTSC DF 1.5 sec") {
        OffsetCalcValue = 1
      } else if (InputValue === "23.98 To 23.98") {
        OffsetCalcValue = 1
      } else if (InputValue === "23.98 To 24") {
        OffsetCalcValue = 1
      } else if (InputValue === "23.98 To PAL") {
        OffsetCalcValue = 1
      } else if (InputValue === "23.98 To NTSC DF") {
        OffsetCalcValue = 1.25124962780642
      } else if (InputValue === "23.98 To NTSC NDF") {
        OffsetCalcValue = 1.2500001787724
      } else if (InputValue === "24 To 23.98") {
        OffsetCalcValue = 1
      } else if (InputValue === "24 To 24") {
        OffsetCalcValue = 1
      } else if (InputValue === "24 To PAL") {
        OffsetCalcValue = 1
      } else if (InputValue === "24 To NTSC DF") {
        OffsetCalcValue = 1.25124962780642
      } else if (InputValue === "24 To NTSC NDF") {
        OffsetCalcValue = 1.2500001787724
      } else if (InputValue === "PAL To 23.98") {
        OffsetCalcValue = 1
      } else if (InputValue === "PAL To 24") {
        OffsetCalcValue = 1
      } else if (InputValue === "PAL To PAL") {
        OffsetCalcValue = 1
      } else if (InputValue === "PAL To NTSC DF") {
        OffsetCalcValue = 1.25124962780642
      } else if (InputValue === "PAL To NTSC NDF") {
        OffsetCalcValue = 1.2500001787724
      } else if (InputValue === "NTSC DF To 23.98") {
        OffsetCalcValue = 0.799201037053617
      } else if (InputValue === "NTSC DF To 24") {
        OffsetCalcValue = 0.799201037053617
      } else if (InputValue === "NTSC DF To PAL") {
        OffsetCalcValue = 0.799201037053617
      } else if (InputValue === "NTSC DF To NTSC DF") {
        OffsetCalcValue = 1
      } else if (InputValue === "NTSC DF To NTSC NDF") {
        OffsetCalcValue = 0.999001439195418
      } else if (InputValue === "NTSC NDF To 23.98") {
        OffsetCalcValue = 0.799999885591553
      } else if (InputValue === "NTSC NDF To 24") {
        OffsetCalcValue = 0.799999885591553
      } else if (InputValue === "NTSC NDF To PAL") {
        OffsetCalcValue = 0.799999885591553
      } else if (InputValue === "NTSC NDF To NTSC DF") {
        OffsetCalcValue = 1.00099955909492
      } else if (InputValue === "NTSC NDF To NTSC NDF") {
        OffsetCalcValue = 1
      }
      return OffsetCalcValue
    }


    var OffsetCalcValueResult = SetCalc(OffsetCalcString)

    var DivideValue

    function SetDivide(InputValue) {
      if (InputValue === "23.98 ASM") {
        DivideValue = 24
      } else if (InputValue === "24 ASM") {
        DivideValue = 24
      } else if (InputValue === "PAL ASM") {
        DivideValue = 25
      } else if (InputValue === "NTSC NDF ASM") {
        DivideValue = 30
      } else if (InputValue === "NTSC DF ASM") {
        DivideValue = 30
      } else if (InputValue === "23.98 1.5 sec") {
        DivideValue = 24
      } else if (InputValue === "24 1.5 sec") {
        DivideValue = 24
      } else if (InputValue === "PAL 1.5 sec") {
        DivideValue = 25
      } else if (InputValue === "NTSC NDF 1.5 sec") {
        DivideValue = 30
      } else if (InputValue === "NTSC DF 1.5 sec") {
        DivideValue = 30
      } else if (InputValue === "23.98 To 23.98") {
        DivideValue = 24
      } else if (InputValue === "23.98 To 24") {
        DivideValue = 24
      } else if (InputValue === "23.98 To PAL") {
        DivideValue = 25
      } else if (InputValue === "23.98 To NTSC DF") {
        DivideValue = 30
      } else if (InputValue === "23.98 To NTSC NDF") {
        DivideValue = 30
      } else if (InputValue === "24 To 23.98") {
        DivideValue = 24
      } else if (InputValue === "24 To 24") {
        DivideValue = 24
      } else if (InputValue === "24 To PAL") {
        DivideValue = 25
      } else if (InputValue === "24 To NTSC DF") {
        DivideValue = 30
      } else if (InputValue === "24 To NTSC NDF") {
        DivideValue = 30
      } else if (InputValue === "PAL To 23.98") {
        DivideValue = 24
      } else if (InputValue === "PAL To 24") {
        DivideValue = 24
      } else if (InputValue === "PAL To PAL") {
        DivideValue = 25
      } else if (InputValue === "PAL To NTSC DF") {
        DivideValue = 30
      } else if (InputValue === "PAL To NTSC NDF") {
        DivideValue = 30
      } else if (InputValue === "NTSC DF To 23.98") {
        DivideValue = 24
      } else if (InputValue === "NTSC DF To 24") {
        DivideValue = 24
      } else if (InputValue === "NTSC DF To PAL") {
        DivideValue = 25
      } else if (InputValue === "NTSC DF To NTSC DF") {
        DivideValue = 30
      } else if (InputValue === "NTSC DF To NTSC NDF") {
        DivideValue = 30
      } else if (InputValue === "NTSC NDF To 23.98") {
        DivideValue = 24
      } else if (InputValue === "NTSC NDF To 24") {
        DivideValue = 24
      } else if (InputValue === "NTSC NDF To PAL") {
        DivideValue = 25
      } else if (InputValue === "NTSC NDF To NTSC DF") {
        DivideValue = 30
      } else if (InputValue === "NTSC NDF To NTSC NDF") {
        DivideValue = 30
      }
      return DivideValue
    }

    var DivideValueResult = SetDivide(OffsetCalcString)

    var TCHour = Number(TCinputdata.split(":")[0]);
    var TCMinute = Number(TCinputdata.split(":")[1]);
    var TCSec = Number(TCinputdata.split(":")[2]);
    var TCFrame = Number(TCinputdata.split(":")[3]);
    var FrameMultiplier = Number(FPSRate.replace("23.98",24).replace("24",24).replace("PAL",25).replace("NTSC NDF",30).replace("NTSC DF",30));
    var Drop = FPSRate.replace("23.98",0).replace("24",0).replace("PAL",0).replace("NTSC NDF",0).replace("NTSC DF",0);
    var OffsetTypeSeconds = OffsetType.replace("ASM",100).replace("1.5 sec",1.5).replace("To 23.98",0).replace("To 24",0).replace("To PAL",0).replace("To NTSC NDF",0).replace("To NTSC DF",0)
    var DropAmountMinute
    if (TCMinute <= 9) {
      DropAmountMinute = TCMinute * 2
    } else if (TCMinute === 10) {
      DropAmountMinute = 18
    } else if (TCMinute >= 11 && TCMinute <= 19 ) {
      DropAmountMinute = (TCMinute * 2) - 2
    } else if (TCMinute === 20) {
      DropAmountMinute = 36
    } else if (TCMinute >= 21 && TCMinute <= 29) {
      DropAmountMinute = TCMinute * 2 - 4
    } else if (TCMinute === 30) {
      DropAmountMinute = 54
    } else if (TCMinute >= 31 && TCMinute <= 39) {
      DropAmountMinute = TCMinute * 2 - 6
    } else if (TCMinute === 40) {
      DropAmountMinute = 72
    } else if (TCMinute >= 41 && TCMinute <= 49) {
      DropAmountMinute = TCMinute * 2 - 8
    } else if (TCMinute === 50) {
      DropAmountMinute = 90
    } else if (TCMinute >= 51 && TCMinute <= 59) {
      DropAmountMinute = ((TCMinute * 2) - 10)
    }
    var DropAmountHour = TCHour * 108


    var TCinFrames = Math.ceil(OffsetCalcValueResult * (0 + ((TCHour - HourStartValueResult) * 60 * 60 * FrameMultiplier) + (TCMinute * 60 * FrameMultiplier) + (TCSec * FrameMultiplier) + Math.floor((OffsetTypeSeconds*FrameMultiplier)) + TCFrame - (Drop * (DropAmountMinute + DropAmountHour))))


    var BacktoSMPTEframes = TCinFrames % DivideValueResult
    var BacktoSMPTEseconds = ((TCinFrames - BacktoSMPTEframes)/DivideValueResult) % 60
    var BacktoSMPTEMinutes = ((((TCinFrames - BacktoSMPTEframes)/DivideValueResult) - BacktoSMPTEseconds) / 60) % 60
    var BacktoSMPTEHours = (((((TCinFrames - BacktoSMPTEframes)/DivideValueResult) - BacktoSMPTEseconds) / 60) - BacktoSMPTEMinutes) / 60 + HourStartValueResult
    var cleanedSMPTE_F
    var cleanedSMPTE_S
    var cleanedSMPTE_M
    var cleanedSMPTE_H

    if (BacktoSMPTEframes <= 9 ) {
      cleanedSMPTE_F = "0" +BacktoSMPTEframes
    } else {
      cleanedSMPTE_F = BacktoSMPTEframes
    }

    if (BacktoSMPTEseconds <= 9 ) {
      cleanedSMPTE_S = "0" + BacktoSMPTEseconds
    } else {
      cleanedSMPTE_S = BacktoSMPTEseconds
    }

    if (BacktoSMPTEMinutes < 10 ) {
      cleanedSMPTE_M = "0" + String(BacktoSMPTEMinutes)
    } else {
      cleanedSMPTE_M = BacktoSMPTEMinutes
    }

    if (BacktoSMPTEHours < 10 ) {
      cleanedSMPTE_H = "0" + String(BacktoSMPTEHours)
    } else {
      cleanedSMPTE_H = BacktoSMPTEHours
    }

    var BackToSMPTE = cleanedSMPTE_H + ":" + cleanedSMPTE_M +  ":" + cleanedSMPTE_S +  "." +  cleanedSMPTE_F

    return (
      <div>
                <InputGroup >
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Hour Start:</InputGroup.Text>
                </InputGroup.Prepend>
                    <DropdownButton
                    as={InputGroup.Append}
                    variant="dark"
                    title= {this.state.start}>
                    <div class="overflowdrop">
                    <Dropdown.Item  active={this.state.start === "00"} onClick={this.onClickHandlerStart}>00</Dropdown.Item>
                    <Dropdown.Item  active={this.state.start === "01"} onClick={this.onClickHandlerStart}>01</Dropdown.Item>
                    <Dropdown.Item  active={this.state.start === "10"} onClick={this.onClickHandlerStart}>10</Dropdown.Item>
                    </div>
                  </DropdownButton>
                  <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">FPS:</InputGroup.Text>
                  </InputGroup.Prepend>
                <DropdownButton
                as={InputGroup.Append}
                variant="dark"
                title= {this.state.fps}>
                <div class="overflowdrop">
                <Dropdown.Item  active={this.state.fps === "23.98"} onClick={this.onClickHandlerFPS }>23.98</Dropdown.Item>
                <Dropdown.Item  active={this.state.fps === "24"} onClick={this.onClickHandlerFPS}>24</Dropdown.Item>
                <Dropdown.Item  active={this.state.fps === "PAL"} onClick={this.onClickHandlerFPS}>PAL</Dropdown.Item>
                <Dropdown.Item  active={this.state.fps === "NTSC DF"} onClick={this.onClickHandlerFPS}>NTSC DF</Dropdown.Item>
                <Dropdown.Item  active={this.state.fps === "NTSC NDF"} onClick={this.onClickHandlerFPS}>NTSC NDF</Dropdown.Item>
                </div>
              </DropdownButton>
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Offset Type:</InputGroup.Text>
              </InputGroup.Prepend>
              <DropdownButton
              as={InputGroup.Append}
              variant="dark"
              title= {this.state.type}
              >
              <div class="overflowdrop">
                <Dropdown.Item active={this.state.type === "ASM"} onClick={this.onClickHandlerType}>ASM</Dropdown.Item>
                <Dropdown.Item active={this.state.type === "1.5 sec"} onClick={this.onClickHandlerType}>1.5 sec</Dropdown.Item>
                <Dropdown.Item  active={this.state.fps === "To 23.98"} onClick={this.onClickHandlerType}>To 23.98</Dropdown.Item>
                <Dropdown.Item  active={this.state.fps === "To 24"} onClick={this.onClickHandlerType}>To 24</Dropdown.Item>
                <Dropdown.Item  active={this.state.fps === "To PAL"} onClick={this.onClickHandlerType}>To PAL</Dropdown.Item>
                <Dropdown.Item  active={this.state.fps === "To NTSC DF"} onClick={this.onClickHandlerType}>To NTSC DF</Dropdown.Item>
                <Dropdown.Item  active={this.state.fps === "To NTSC NDF"} onClick={this.onClickHandlerType}>To NTSC NDF</Dropdown.Item>
                </div>
              </DropdownButton>
              <InputGroup.Prepend>
                <Button variant="warning" onClick={() => this.setState({ asmDisplaydata: BackToSMPTE})}>Calculate</Button>
              </InputGroup.Prepend>
              <InputGroup.Append>
           <InputGroup.Text >{asmDisplaydata}</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
  </div>
  );
}
}

export default ASMDisplay;
