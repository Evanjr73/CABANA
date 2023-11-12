import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import Login from './pages/login/login'
import Carda from './pages/home/carda'
import Adm from './pages/adm/adm'

function App() {
  

  return (
    <div className='App'>
      
        <Router>
            <Routes>
              <Route path="/login" element= {<Login/>} />
              <Route path="/" element= {<Carda/>} />
              <Route path="/adm" element= {<Adm/>} />
            
            </Routes>
        </Router>
    </div>
  )
}

export default App
