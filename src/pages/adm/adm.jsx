import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adm.css';
import styled from "styled-components";
import { Transition } from 'react-transition-group';
import "react-toastify/dist/ReactToastify.css";
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


  // Função para alternar a visibilidade do elemento

  // const [selectedImage, setSelectedImage] = useState(null);
  const [containerbebida, setContainerbebida] = useState("none")
  const [containercomidas, setContainercomidas] = useState("flex")
  const history = useNavigate('/')

  const handleClickhome = () => {
    history('/')

  }



  const handleClickcontainerbebida = () => {
    setContainerbebida("flex")
   
    setContainercomidas("none")
  }
  const handleClickconatinercomida = () => {
    setContainerbebida("none")
    setContainercomidas("flex")
  }


  return (
    <div>


      <nav onClick={handleClickhome} > <h1>RESTAURANTE</h1></nav>

      <div id='containeradm' style={{ height: "40vh", width: "100vw", paddingTop: "1vh" }}>
        <div id='containeradm-2' style={{ height: "50vh", width: "90vw", margin: "auto", borderRadius: "0.5rem", padding: "1rem" }}>
          <h1 style={{ display: "flex", marginLeft: "28vw" }}>ADICIONAR</h1>
          <div style={{ display: "flex", width: "100%", height: "8vh", justifyContent: "center" }}>
            <button style={{ margin: "1vw", borderRadius: "5px", width: "30vw", height:"5vh" }} onClick={handleClickcontainerbebida }>BEBIDAS</button>
            <button style={{ margin: "1vw", borderRadius: "5px", width: "30vw", height:"5vh" }} onClick={handleClickconatinercomida}>COMIDAS</button>
          </div>

          {/* {
             containercomidas && <Admm></Admm>

          }

          {
           conatinerbebida && <Admmy></Admmy>
          } */}
          
          <div style={{ display: containercomidas }}>
            <Admm ></Admm>
          </div>
          <div style={{ display: containerbebida }}>
            <Admmy ></Admmy>
          </div>





        </div>


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




