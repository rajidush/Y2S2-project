import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <h1 className="text-4xl font-bold text-white">Hello Tailwind CSS!</h1>
      <button
        className="mt-50 px-4 py-2 bg-red-800 text-white rounded hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
    </>
  )
}

export default App