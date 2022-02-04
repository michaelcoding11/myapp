import React from 'react';
import logo from './logo.svg';
import Counter from './Components/Counter'
import Info from './Components/Info'
import './App.css'

class App extends React.Component{
  render() {
    return (
      <div>
        <Info nama='Michael' kelas='XI IPS 3' IsMorning='Siang' />
        <Counter />
      </div>
    )
  }
} 
export default App;
