import { useState } from 'react';
import './App.css'

// Components
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Review from './components/Review';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function App() {
  

  return (
    <div className="App">

      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Review/>
      <Gallery/>
      <Footer/>

    </div>
  )
}

export default App
