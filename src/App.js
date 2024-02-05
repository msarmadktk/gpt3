import React from 'react'

import { Blog , Possibility , Footer , Header , WhatGPT3 , Features } from './contaniers';
import { Article , Brand , CTA , Feature, Navbar  } from './components';

import './App.css';
const App = () => {
  return (

      <div className='App'>

        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>

        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App