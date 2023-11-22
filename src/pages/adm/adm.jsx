import React, { useState } from 'react';
// import { Form, Input, Button, InputNumber, Flex } from "antd";
import { useNavigate } from 'react-router-dom';
import './adm.css';
import Cardapio from '../home/cardapio';


//bando de dado///

import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/Form.jsx";
import Grid from "./components/Grid.jsx";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Gridbebidas from './components/Gridbebidas.jsx';
import Gridy from './components/Gridy.jsx'
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;


function Adm() {
  const [selectedImage, setSelectedImage] = useState(null);

  const history = useNavigate('/')

  const handleClickhome = () => {
    history('/')

  }

  // banco de dados comidas//

  const [users, setUsers] = useState([]);
 
  const [onEdit, setOnEdit] = useState(null);
  const [user, setUser] = useState([]);
 
  const [onEdi, setOnEdi] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/");
      setUsers(res.data.sort((a, b) => (a.nomel > b.nomel ? 1 : -1)));
      
       
      
      
    } catch (error) {
      toast.error(error);
    }

  };
  const getBebidas= async () => {
    try {
      const res = await axios.get("http://localhost:8800/bebidas");
      setUser(res.data.sort((a, b) => (a.nomel > b.nomel ? 1 : -1)));
      
      
    } catch (error) {
      toast.error(error);
    }

  
  };

  useEffect(()=> {
    getBebidas() ;
  }, [setUser])

  useEffect(()=> {
    getUsers() ;
  }, [setUsers])


 


 
  ////////////////

    // banco de dados bebidas//


  

  
    ////////////////

  return (
    <div>


      <nav onClick={handleClickhome} > <h1>RESTAURANTE</h1></nav>

      <div id='containeradm' style={{ height: "40vh", width: "100vw", paddingTop: "1vh" }}>
        <div id='containeradm-2' style={{ height: "35vh", width: "80vw", margin: "auto", borderRadius: "0.5rem", padding: "1rem" }}>



          <Container>
            <Title>USUÁRIOS</Title>
            <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}   />
           
          </Container>
          <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
          <GlobalStyle />




        </div>
      </div>
      <div id='container-btn-adm' style={{ marginTop: "3vh" }}>
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        <Grid setOnEdit={setOnEdit} users={user} setUser={setUser} />
        {/* <Gridy setOnEdi={setOnEdi} user={user} setUser={setUser} /> */}
    
        {/* <Cardapio></Cardapio> */}

      </div>

      <footer  style={{height:"100vh" , width:"100vw"}}></footer>
    </div>

  )
}

export default Adm;




