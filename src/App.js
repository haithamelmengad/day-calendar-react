import React, { Component } from 'react';
import './App.css';
import reducer from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Calendar from './containers/Calendar';
const store = createStore(reducer);

// first make collision buckets
let times = [ {start: 0, end: 100}, {start: 350, end: 500}, {start: 500, end: 600}, {start: 650, end: 700} ].sort((a,b) =>  a.start - b.start );

console.log(times);


class App extends Component {
  render() {
    return (
     <Provider store={store}>
      <Calendar times={times}/>
     </Provider>
       
    );
  }
}

export default App;