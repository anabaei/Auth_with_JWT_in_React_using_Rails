import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const state = {eventCount:0}
var element = ''

// function tick()
// {
//   const rootelement = document.getElementById('right');
//   const time = new Date().toLocaleString();
//   const state = {eventCount: 0};
//    element = (
//   <div>
//        It is <input value={time} />
//        <p> {state.eventCount} </p>
//   </div>
//    )
// }
//
// tick();

//ReactDOM.render(element, document.getElementById('right'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
