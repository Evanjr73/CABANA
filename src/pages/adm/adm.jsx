import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, Flex } from "antd";
import { useNavigate } from 'react-router-dom';
import './adm.css';
import Cardapio from '../home/cardapio';



function Adm() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>


      <a href="./carda"><nav> RESTAURANTE</nav></a>

      <div id='containeradm' style={{ height: "70vh", width: "100vw", paddingTop: "5vh" }}>
        <div id='containeradm-2' style={{ height: "63vh", width: "80vw", margin: "auto", borderRadius: "0.5rem", padding: "1rem" }}>
          <div id='container-3'>
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
          <button className="butto" style={{borderRadius:"10px", width:"80vw", marginTop:"1.5vh"}}>ENVIAR</button>





        </div>
      </div>
      <div id='container-btn-adm' style={{ marginTop: "3vh" }}>

        <Cardapio></Cardapio>

      </div>
    </div>

  )
}

export default Adm;




