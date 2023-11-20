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
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }



  }
  const handleClickhome = () => {
    history('/')

  }

  // banco de dados//

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nomel > b.nomel ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  ////////////////


  return (
    <div>


      <nav onClick={handleClickhome}> RESTAURANTE</nav>

      <div id='containeradm' style={{ height: "50vh", width: "100vw", paddingTop: "5vh" }}>
        <div id='containeradm-2' style={{ height: "63vh", width: "80vw", margin: "auto", borderRadius: "0.5rem", padding: "1rem" }}>



          <Container>
            <Title>USUÁRIOS</Title>
            <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
           
          </Container>
          <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
          <GlobalStyle />
































          {/*modelo anditgo}
         
          {/* <div id='container-3'>
            <div className='divs'>
              <p>NOME</p>
              <input type="text" style={{width:"100vh"}} />

            </div>
            <div className='divs'>
              <p>VALOR</p>
              <input type="number" style={{width:"7vh"}}/>

            </div>
            <div className='divs'>
              <p>IMAGEM</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

            </div>
            <div className='divs'>
              <p>tempo</p>
              <input type="time" />

            </div>
            <div className='divs'>
              <p>PESSOAS</p>
              <input type="text" style={{width:"10vh" , height:"3vh"}} />

            </div>
          </div>
          <div>
            <p style={{margin:"15px"}}>PDESCRIÇÃO</p>
            <input type="text" style={{height:"12vh" , width:"80vw" , borderRadius:"8px"}} />

          </div>
          <button className="butto" style={{borderRadius:"10px", width:"80vw", marginTop:"1.5vh"}}>ENVIAR</button> */}





        </div>
      </div>
      <div id='container-btn-adm' style={{ marginTop: "3vh" }}>
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        {/* <Cardapio></Cardapio> */}

      </div>
      <footer  style={{height:"100vh" , width:"100vw"}}></footer>
    </div>

  )
}

export default Adm;




