import './App.css'
import { useEffect, useState } from 'react'
import Button from './components/MyButton'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter.js'
import NavBar from './components/NavBar'

const URL = 'http://127.0.0.1:3000'

function App() {
  const [person, setPerson] = useState()

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
