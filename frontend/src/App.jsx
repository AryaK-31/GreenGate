import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Process from './components/Process'
import About from './components/About'
import Products from './components/Products'
import React from 'react'
import ThemeContextProvider from './context/ThemeContextProvider'
import Contact from './components/Contact'

function App() {
  

  return (
    <ThemeContextProvider>
      
      <Navbar/>
      <Hero />
      <Process />
      <About />
      <Products />
      <Contact />

    </ThemeContextProvider>
  )
}

export default App
