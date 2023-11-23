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
// import Gridbebidas from './components/Gridbebidas.jsx';
import Gridy from './components/Gridy.jsx'
import Admmy from './admy.jsx';
import Admm from './admm.jsx';
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
  // const [selectedImage, setSelectedImage] = useState(null);
  const [containerbebida, setContainerbebida] = useState("none")
  const [containercomidas, setContainercomidas] = useState("flex")
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


  const handleClickcontainerbebida = () => {
    setContainerbebida("flex")
    setContainercomidas("none")
  }
  const handleClickconatinercomida = () => {
    setContainerbebida("none")
    setContainercomidas("flex")
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
            <button style={{ margin: "1vw", borderRadius: "5px", width: "30vw" }} onClick={handleClickcontainerbebida}>BEBIDAS</button>
            <button style={{ margin: "1vw", borderRadius: "5px", width: "30vw" }} onClick={handleClickconatinercomida}>COMIDAS</button>
          </div>

          {/* {
             containercomidas && <Admm></Admm>

          }

          {
           conatinerbebida && <Admmy></Admmy>
          } */}
          <div style={{display:containercomidas}}>
                 <Admm ></Admm>
          </div>
          <div style={{display: containerbebida}}>
                 <Admmy ></Admmy>
          </div>
        




        </div>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
       
      </div>
      <div id='container-btn-adm' style={{ marginTop: "10vh" }}>

        {/* <Gridy setOnEdi={setOnEdi} user={user} setUser={setUser} /> */}

        {/* <Cardapio></Cardapio> */}

      </div>

      <footer style={{ height: "100vh", width: "100vw" }}></footer>
    </div>

  )
}

export default Adm;




