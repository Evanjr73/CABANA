import React, { useState } from 'react';
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import './pages.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Novo estado para a mensagem de erro
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
    } else if (password === "12345678" && username === "evsioljr@gmail.com") {
      history('/adm');
    } else {
      alert("ERRO NO LOGIN")
      setError("email ou senha incorretos"); // Exibe mensagem de erro
    }
  };

  return (
    <div id='container'>
      <h1 >FAÇA SEU LOGIN</h1>
      
      <Form onSubmit={handleSubmit}>
        <Form.Item label="" className='label'>
          <h1>Username</h1>
          <Input className='input' value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item label="" className='label'>
          <h1>Password</h1>
          <Input.Password className='input' value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
        {error && <p>{error}</p>} {/* Renderiza a mensagem de erro, se houver */}
          <Button id='btn' type="primary" htmlType="submit" onClick={handleSubmit} >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;





// import { useState, useLayoutEffect , useRef} from 'react'
// import { Form, Input, Button } from "antd";
// import { useNavigate } from 'react-router-dom';

// import './pages.css'

// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const containerRef = useRef()
//   const history = useNavigate()
//   // useLayoutEffect(()=>{
//   //   console.log(containerRef)
    
//   //  })
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate the password
//     if (password.length < 8) {
      
       
//         alert("Password must be at least 8 characters long.");
       
       

//     }
//     if (password == 12345678 && username == "evsioljr@gmail.com"){
//       history('/');
//     }
  
    
//     else{
//       console.log("Submitting form with username:", username, "and password:", password);
//       useLayoutEffect(()=>{
//         console.log("ola mundo")
//       })
//     }
//     // Submit the form
   
//   };

//   return (
    

//       <div  id='container' ref={containerRef}>
//         <Form onSubmit={handleSubmit}>
//           <Form.Item label="" className='label'>
//             <h1>Username</h1>
//             <Input className='input' value={username} onChange={(e) => setUsername(e.target.value)} />
//           </Form.Item>
//           <Form.Item label="" className='label'>
//             <h1>Password</h1>
//             <Input.Password className='input' value={password} onChange={(e) => setPassword(e.target.value)} />
//           </Form.Item>
//           <Form.Item >
//             <Button id='btn'  type="primary" htmlType="submit" onClick={handleSubmit}>
//               Login
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
          
//                 )
// }

// export default Login


      {/* <div id='containe'>
        <form >
          <label for="username" className='label'>Username:</label>
            <input type="text" id="username" name="username" class="input"/>
              <label for="password" className='label'>Password:</label>
                <input type="password" id="password" name="password" class="input"/>
                  <p id="errou"></p>
                  <div id="buttons">
                    <input type="submit" value="Login" class="btn"/>
                      <a href="" > redefinir senha</a>
                  </div>
          </form>        
      </div> */}