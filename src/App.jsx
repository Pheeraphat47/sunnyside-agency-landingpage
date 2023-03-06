import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css'

// Components
import Header from './components/Header';
import SectionOne from './components/SectionOne';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <SectionOne/>
    </div>
  )
}

export default App
