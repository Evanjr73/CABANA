import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/home/home'
import Adm from './pages/adm/adm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      
        <Router>
            <Routes>
              <Route path="/login" element= {<Login/>} />
              <Route path="/" element= {<Home/>} />
              <Route path="/adm" element= {<Adm/>} />
            
            </Routes>
        </Router>
    </div>
  )
}

export default App
