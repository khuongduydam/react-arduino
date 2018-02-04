import React, { Component } from 'react';
import axios from 'axios'

class LedContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      on: 'ON',
      off: 'OFF',
      on1: 'ON1',
      off1: 'OFF1'
    }
  }

  handleOnClick = (e) => {
    axios
    .get('http://192.168.1.50:4000/api/arduino_leds' + '?switch=' + this.state.on)
    .then(response =>{
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  handleOffClick = (e) => {
    axios
    .get('http://192.168.1.50:4000/api/arduino_leds' + '?switch=' + this.state.off)
    .then(response =>{
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  handleOnClick1 = (e) => {
    axios
    .get('http://192.168.1.50:4000/api/arduino_leds' + '?switch=' + this.state.on1)
    .then(response =>{
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  handleOffClick1 = (e) => {
    axios
    .get('http://192.168.1.50:4000/api/arduino_leds' + '?switch=' + this.state.off1)
    .then(response =>{
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="text-center">
        <h3>Vinova Hackathon 2018</h3>
        <p>ARDUINO WEBSERVER CONTROLLER USING ETHERNET SHIELD</p>
        <p>ReactJS</p>
        <p>Arduino Programming</p>
        <p>Ethernet Shield for IoT</p>
        <br />
        <div className="btn-group">
          <button type="button" className="btn btn-success" onClick={this.handleOnClick}>{this.state.on}</button>
          <button type="button" className="btn btn-danger" onClick={this.handleOffClick}>{this.state.off}</button>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-success" onClick={this.handleOnClick1}>{this.state.on1}</button>
          <button type="button" className="btn btn-danger" onClick={this.handleOffClick1}>{this.state.off1}</button>
        </div>
      </div>
    );
  }
}

export default LedContainer;
