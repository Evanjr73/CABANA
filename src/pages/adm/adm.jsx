import React, { useState } from 'react';
// import { Form, Input, Button, InputNumber, Flex } from "antd";
import { useNavigate } from 'react-router-dom';
import './adm.css';
import Cardapio from '../home/cardapio';


//bando de dado///
import Formy from "./components/Formy.jsx"
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
  const [conatinerbebida, setConatinerbebida] = useState(false)
  const [containercomidas, setContainercomidas] = useState(true)
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
  const getBebidas = async () => {
    try {
      const res = await axios.get("http://localhost:8800/bebidas");
      setUser(res.data.sort((a, b) => (a.nomel > b.nomel ? 1 : -1)));


    } catch (error) {
      toast.error(error);
    }


  };

  useEffect(() => {
    getBebidas();
  }, [setUser])

  useEffect(() => {
    getUsers();
  }, [setUsers])


  const handleClickconatinerbebida = () => {
    setConatinerbebida(!conatinerbebida)
    setContainercomidas(!true)
  }
  const handleClickconatinercomida = () => {
    setConatinerbebida(!conatinerbebida)
    setContainercomidas(true)
  }


  ////////////////

  // banco de dados bebidas//





  ////////////////

  return (
    <div>


      <nav onClick={handleClickhome} > <h1>RESTAURANTE</h1></nav>

      <div id='containeradm' style={{ height: "40vh", width: "100vw", paddingTop: "1vh" }}>
        <div id='containeradm-2' style={{ height: "60vh", width: "80vw", margin: "auto", borderRadius: "0.5rem", padding: "1rem" }}>
          <h1 style={{ display: "flex", marginLeft: "28vw" }}>ADICIONAR</h1>
          <div style={{ display: "flex", width: "100%", height: "8vh", justifyContent: "center", backgroundColor: "green" }}>
            <button style={{ margin: "1vw", borderRadius: "5px", width: "30vw" }} onClick={handleClickconatinerbebida}>BEBIDAS</button>
            <button style={{ margin: "1vw", borderRadius: "5px", width: "30vw" }} onClick={handleClickconatinercomida}>COMIDAS</button>
          </div>

          {
            conatinerbebida && <Container>
              <Title>BEBIDAS</Title>
              <Formy onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getBebidas} />

            </Container>
          }

          {
            containercomidas && <Container>
              <Title>COMIDAS</Title>
              <Form onEdi={onEdit} setOnEdi={setOnEdit} getUsers={getUsers} />

            </Container>
          }

          <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
          <GlobalStyle />




        </div>
      </div>
      <div id='container-btn-adm' style={{ marginTop: "10vh" }}>
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        <Gridy setOnEdit={setOnEdit} users={user} setUsers={setUser} />
        {/* <Gridy setOnEdi={setOnEdi} user={user} setUser={setUser} /> */}

        {/* <Cardapio></Cardapio> */}

      </div>

      <footer style={{ height: "100vh", width: "100vw" }}></footer>
    </div>

  )
}

export default Adm;




