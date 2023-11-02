import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/home/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      
        <Router>
            <Routes>
              <Route path="/" element= {<Login/>} />
              <Route path="/home" element= {<Home/>} />
            
            </Routes>
        </Router>
    </div>
  )
}

export default App
