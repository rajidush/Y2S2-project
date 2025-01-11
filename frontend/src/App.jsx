import { useState } from 'react'
import Solar_recycle from './components/solar_recycle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Solar_recycle></Solar_recycle> 
    </div>
  )
}

export default App
