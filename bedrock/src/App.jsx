import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BedrockUI from './components/BedrockUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BedrockUI/>
    </div>
  )
}

export default App
