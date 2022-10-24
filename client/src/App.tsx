import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './input.css'
import {Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route index path="/home">

    </Route>
   </Routes>
  )
}

export default App
