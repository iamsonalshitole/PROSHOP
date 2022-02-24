import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'
import Productscreen from './screens/Productscreen'
import './bootstrap.min.css'

function App() {
  return (
    <Router>
      <Header></Header>
      <main className=' py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Homescreen />} exact />
            <Route path='/products/:id' element={<Productscreen />} />
          </Routes>
        </Container>
      </main>

      <Footer></Footer>
    </Router>
  )
}

export default App
