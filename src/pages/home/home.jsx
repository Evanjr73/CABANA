import React from "react";
import Bebidas from "../../frag/bebidas";
import Comidas from "../../frag/comidas";

import Nav from "../../frag/nav";

import "./home.css"

import { useState } from "react";
import imagem from "./foto.png";
import comida from "./comidas.png"
import "./cardapio.css"





function Home() {

      const [bebidas, setBebidas] = useState("grid");
      
      const [comidas, setComidas] = useState("grid");
      
      const [menu, setMenu] = useState("none");
      const [buton, setButon] = useState("flex");
      const [buto, setButo] = useState("none");




      const handleClickMenu = () => {
            setButon("none")
            setMenu("flex")
            setButo("flex")

      }
      const handleClickMen = () => {
            setButon("flex")
            setMenu("none")
            setButo("none")

      }

      const handleClickComidas = () => {
            setBebidas("none"), setComidas("grid")
            // setComidas(!comidas);
            // setComidass("grid")
            // setBebidas("none")
            console.log("ola ")


      }
      const handleClickBebidas = () => {
            setComidas("none"), setBebidas("grid")
            // setBebidas(!bebidas);
            // setBebidass("grid")
            // setComidass("none")
            
            console.log("ola mundo")

      }
      const [showFragment, setShowFragment] = useState(true);
      const handleClick = () => {
        setShowFragment(!showFragment);
      };



      return (


            <>
                  
                  <div className="App">
                             
                              {showFragment && <Nav></Nav>}
                              <button onClick={handleClick}>Toggle fragment</button>
                        </div>
                  <div id="containerHome">
                        <div>

                              {/* <input type="file" name="arquivos" class="btn btn-success" /> */}
                              {/* <img src={imagem} id="imghome" /> */}


                        </div>

                  </div>

                  <main>

                        <button className="butt" onClick={handleClickMen} style={{ display: buto }}>X</button>
                        <button className="butt" onClick={handleClickMenu} style={{ display: buton }}>CARDAPIO</button>
                  </main>

                  <div id="bttn-op" className="tabs" style={{ display: menu }} >
                        <button className="butto" onClick={handleClickComidas}  >COMIDAS</button>
                        <button className="butto" onClick={handleClickBebidas} >BEBIDAS</button>
                  </div>

                  <div id="opçoes" style={{ display: menu }}>


                        <div style={{display:comidas}} className="grid-menu" > 
                              <Comidas/>
                              <Comidas/>
                              <Comidas/>
                              <Comidas/>
                        </div>
                        
                        <div style={{display:bebidas}} className="grid-menu">
                           <Bebidas/>
                           <Bebidas/>
                           <Bebidas/>
                           <Bebidas/>
                        </div>
                        


                      


                  </div>



                  {/* <Cardapio></Cardapio> */}


            </>

      )
}

export default Home