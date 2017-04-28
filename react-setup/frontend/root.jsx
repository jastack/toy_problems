import React from 'react';
import ReactDOM from 'react-dom';




class Root extends React.Component {
  constructor(){
    super();
    const date = new Date();
    let hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let timeOfDay = 'AM';
    if (hour > 12){
      hour = hour % 12;
      timeOfDay = 'PM';
    }
    if (hour === 0){
      hour = 1;
      timeOfDay = 'AM';
    }
    this.state = {hour: hour, minutes: minutes, seconds: seconds, timeOfDay: timeOfDay};
    this.incrementTime();
  }

  incrementTime(){
    setInterval(this.updateSeconds.bind(this), 1000);
  }

  updateSeconds(){
    const seconds = parseInt(this.state.seconds);
    if (seconds + 1 === 60){
      this.updateMinutes();
    } else {
      let updatedSeconds = seconds + 1;
      let stringNum = updatedSeconds.toString();
      if (updatedSeconds < 10) {
        stringNum = '0' + updatedSeconds.toString();
      }
      this.setState({seconds: stringNum});
    }
  }

  updateMinutes(){
    const minutes = parseInt(this.state.minutes);
    if (minutes + 1 === 60) {
      this.updateHour();
    } else {
      let updatedMinutes = minutes + 1;
      let stringNum = updatedMinutes.toString();
      if (updatedMinutes < 10) {
        stringNum = '0' + updatedMinutes.toString();
      }
      this.setState({minutes: stringNum, seconds: '00'});
    }
  }

  updateHour(){
    const hour = parseInt(this.state.hour);
    if (hour + 1 > 12) {
      if (this.state.timeOfDay === 'AM') {
        this.setState({hour: '01', minutes: '00', seconds: '00', timeOfDay: 'PM' });
      } else {
        this.setState({hour: '01', minutes: '00', seconds: '00', timeOfDay: 'AM' });
      }
    } else {
      let updatedHour = hour + 1;
      let stringNum = updatedHour.toString();
      if (updatedHour < 10) {
        stringNum = '0' + updatedHour.toString();
      }
      this.setState({hour: stringNum, minutes: '00', seconds: '00'});
    }
  }


  render() {
    return(
      <div>
        <h2>{this.state.hour}:{this.state.minutes}:{this.state.seconds} {this.state.timeOfDay}</h2>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
