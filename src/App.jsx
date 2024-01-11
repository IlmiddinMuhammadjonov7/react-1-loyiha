import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import './index.css'

const App = () => {
  return (
    <div className='page'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App