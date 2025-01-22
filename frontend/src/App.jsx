import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UserDashboard from './components/UserDashboard'
import './index.css'
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
      </Routes>
       
    </Router>
  )
}

export default App
