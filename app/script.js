import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

  state = {
    status: 'off',
    time: '5',
    timer: null,
  }

  formatTime = time => {
    const sec = Math.floor(time % 60).toString();
    const min = Math.floor((time / 60) % 60).toString();
    return min.padStart(2,'0') + ':' + sec.padStart(2,'0');
  }

  step = () => {};

  startTimer = () => {

    this.setState({
      timer: setInterval(this.step, 1000),
      time: 1200,
      status: 'work',
    });

  };

  render() {
    const { status, time } = this.state;
    return (
      <div>
        {(status === 'off') && <div>
          <h1>Protect your eyes</h1>
          <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
          <p>This app will help you track your time and inform you when it's time to rest.</p>
        </div>
        }
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />}
        {(status !== 'off') && <div className="timer">{this.formatTime(time)}</div>}
        {(status === 'off') && <button className="btn" onClick={() => this.startTimer()}>Start</button>}
        {(status !== 'off') && <button className="btn">Stop</button>}
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
