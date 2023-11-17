import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import Login from './pages/login/login'
import Carda from './pages/home/carda'
import Adm from './pages/adm/adm'
import Example from './pages/carrosel/carrosel'

function App() {
  

  return (
    <div className='App'>
      
        <Router>
            <Routes>
              <Route path="/" element= {<Login/>} />
              <Route path="/carda" element= {<Carda/>} />
              <Route path="/adm" element= {<Adm/>} />
              <Route path="/carrosel" element= {<Example/>} />
            
            </Routes>
        </Router>
    </div>
  )
}

export default App
