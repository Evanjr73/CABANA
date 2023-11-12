import React from "react";
import Bebidas from "../../frag/bebidas";
import Comidas from "../../frag/comidas";

import Nav from "../../frag/nav";

import "./home.css"

import { useState } from "react";
import imagem from "./foto.png";
import comida from "./comidas.png"
import "./cardapio.css"
import { Footer } from "antd/es/layout/layout";
import { Menu } from "antd";
import Cardapio from "./cardapio";





function Home() {



      
      const [buton, setButon] = useState("flex");
      const [buto, setButo] = useState("none");
      const [men , setMen] = useState(true);
      const [cardapio1, setCardapio1] = useState("180vh")
      
      const handleClickcardapio1 = () => {
            

      }


      const handleClickMenu = () => {
            setButon("none")
            setMen(!men);
            setButo("flex")
            setCardapio1("0vh")

      }
      const handleClickMen = () => {
            setButon("flex")
            setMen(!men);
            setButo("none")
            setCardapio1("180vh")

      }


      const [showFragment, setShowFragment] = useState(true);
      const handleClick = () => {
            setShowFragment(!showFragment);
      };



      return (


            <>

                  <div className="App">

                        {showFragment && <Nav></Nav>}
                        {/* <button onClick={handleClick}>Toggle fragment</button> */}
                  </div>
                  <div id="containerHome">
                        <div>

                              {/* <input type="file" name="arquivos" class="btn btn-success" /> */}
                              {/* <img src={imagem} id="imghome" /> */}


                        </div>

                  </div>

                  <main>

                        <button className="butt" onClick={handleClickMen} style={{ display: buto }}>CARDAPIO</button>
                        <button className="butt" onClick={handleClickMenu} style={{ display: buton }}>X</button>
                  </main>

                  <div id="cardapio1" style={{height: cardapio1}}>
                        {
                              men && <Cardapio></Cardapio>
                        }
                  </div>

 
                  



                  {/* <Cardapio></Cardapio> */}


            </>

      )
}

export default Home