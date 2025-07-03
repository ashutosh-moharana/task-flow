import { useState } from 'react'
import { ThemeProvider } from './components/context/ThemeProvider'
import './App.css'
import Home from './components/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ThemeProvider>

    <Home/>

   </ThemeProvider>
  )
}

export default App
