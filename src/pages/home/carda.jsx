import React from "react";
import Bebidas from "../../frag/bebidas";
import Comidas from "../../frag/comidas";

import Nave from "../../frag/nav";

import "./carda.css"

import { useState } from "react";
import imagem from "./logo.png";
import comida from "./comidas.png"
import "./cardapio.css"
import { Footer } from "antd/es/layout/layout";
import { Menu } from "antd";
import Cardapio from "./cardapio";
import Example from "../carrosel/carrosel";





function Carda() {




      const [buton, setButon] = useState("none"); //CARDAPIO
      const [buto, setButo] = useState("flex"); //X
      const [men, setMen] = useState(false);
      const [cardapio1, setCardapio1] = useState("0vh")

      const handleClickcardapio1 = () => {


      }

   
      //X
      const handleClickMen = () => {
            setButon("flex")
            
            setMen(!men);
            setButo("none")
            setCardapio1("100vh")

      }
         //CARDAPIO
      const handleClickMenu = () => {
            setButon("none")
            setMen(!men);
            setButo("flex")
            setCardapio1("0vh")
            

      }


      const [showFragment, setShowFragment] = useState(true);
      const handleClick = () => {
            setShowFragment(!showFragment);
      };



      return (


            <>

                  <div className="App">

                        {showFragment && <Nave></Nave>}
                        {/* <button onClick={handleClick}>Toggle fragment</button> */}
                  </div>
                  <div id="containerHome">

                        
                        {/* <input type="file" name="arquivos" class="btn btn-success" /> */}
                        <img src={imagem} id="imghome" />




                  </div>

                  <main>

                        <button className="butt" onClick={handleClickMen} style={{ display: buto }}>CARDAPIO</button>
                        <button className="butt" onClick={handleClickMenu} style={{ display: buton }}>FECHAR</button>
                  </main>


                  <div id="cardapio1" style={{ height: cardapio1 }}>
                        {
                              men && <Cardapio></Cardapio>
                        }
                  </div>
                  <div id="sobrenos" >
                        <h1>SOBRE NÓS</h1>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere maxime
                               sequi natus dolore architecto sit. Nam ipsa consequatur totam, repellat in 
                               deserunt sint iste enim. Facilis est voluptatem reprehenderit? Lorem, ipsum 
                               dolor sit amet consectetur adipisicing elit. Ipsam ad iure unde voluptatum 
                               numquam molestiae beatae ut officia illum dolore nulla soluta pariatur, repre
                               henderit provident labore quae aut dolorem harum.</h3>
                  </div>

                  <section>
                        <div id="cardapio1" style={{ height: "170vh" }}>
                              <h1>ola mundo</h1>
                        </div>
                        <div id="cardapio1" style={{ backgroundColor: "red" }}>
                              <h1>ola mundo 2</h1>
                        </div>

                  </section>







                  {/* <Cardapio></Cardapio> */}


            </>

      )
}

export default Carda