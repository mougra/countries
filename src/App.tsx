import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/Header'
import Main from './components/Main'

import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'

function App() {
  const [countries, setCountries] = useState([])
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path='/'
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          ></Route>
          <Route path='*' element={<NotFound />} />
          <Route path='/country/:name' element={<Detail />} />
          {/* <Route path='/' element={<HomePage />} /> */}
        </Routes>
      </Main>
    </>
  )
}

export default App
