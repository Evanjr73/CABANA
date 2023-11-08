import React from "react";

import Nav from "../../frag/nav";
import Cardapio from "../../frag/cardapio";
import "./home.css"
import Bebidas from "../../frag/bebidas";
import Comidas from "../../frag/comidas";
import { useState } from "react";
import imagem from "./foto.png";
import comida from "./comidas.png"
import "./cardapio.css"

import Footer from "../../frag/frags/footer";



function Home() {

      const [bebidas, setBebidas] = useState("grid");
      const [comidas, setComidas] = useState("grid");
      const handleClickComidas = () => {
            setBebidas("none"), setComidas("grid")
            console.log("ola ")


      }
      const handleClickBebidas = () => {
            setComidas("none"), setBebidas("grid")
            console.log("ola mundo")

      }

      return (


            <>
                  <Nav></Nav>
                  <div id="containerHome">
                        <div>

                              {/* <input type="file" name="arquivos" class="btn btn-success" /> */}
                              {/* <img src={imagem} id="imghome" /> */}


                        </div>

                  </div>

                  <main>
                        <h1>CARDAPIO</h1>
                  </main>
                  <div id="bttn-op" className="tabs">
                        <button className="butto" onClick={handleClickComidas}  >COMIDAS</button>
                        <button className="butto" onClick={handleClickBebidas} >BEBIDAS</button>
                  </div>

                  <div id="opçoes">



                        <ul id="BEBIDAS" style={{ display: bebidas }}>

                              <li id="" className="listadebebidas">
                                    <p>ice drink</p>

                                    <img src={imagem} className="imagensdocardapio" alt="" />

                                    {/* <button className="button-17">FAZER PEDIDO</button> */}

                                    <p>100 RS</p>
                                    <button className="button-17" >SOBRE O PRATO</button>

                              </li>
                              <li id="" className="listadebebidas">
                                    <p>ice drink</p>
                                    <img src={imagem} className="imagensdocardapio" alt="" />
                                    {/* <button className="button-17">FAZER PEDIDO</button> */}
                                    <p>100 RS</p>
                                    <button className="button-17" >SOBRE O PRATO</button>

                              </li>
                              <li id="" className="listadebebidas">
                                    <p>ice drink</p>
                                    <img src={imagem} className="imagensdocardapio" alt="" />
                                    {/* <button className="button-17">FAZER PEDIDO</button> */}
                                    <p>100 RS</p>
                                    <button className="button-17" >SOBRE O PRATO</button>

                              </li>
                              <li id="" className="listadebebidas">
                                    <p>ice drink</p>
                                    <img src={imagem} className="imagensdocardapio" alt="" />
                                    {/* <button className="button-17">FAZER PEDIDO</button> */}
                                    <p>100 RS</p>
                                    <button className="button-17" >SOBRE O PRATO</button>

                              </li>

                        </ul>
                        <ul id="COMIDAS" style={{ display: comidas }}>


                              <li id="" className="listadecomidas"  >
                                    <p>peixe assado </p>
                                    <img src={comida} className="imagensdocardapio" alt="" />
                                     {/* <button className="button-17">FAZER PEDIDO</button> */}
                                      <p>30 R$</p>

                                      <button className="button-17">SOBRE O PRATO</button>
                                      </li>


                              <li id="" className="listadecomidas"  >
                                    <p>peixe assado </p>
                                    <img src={comida} className="imagensdocardapio" alt="" />
                                     {/* <button className="button-17">FAZER PEDIDO</button> */}
                                      <p>30 R$</p>

                                      <button className="button-17">SOBRE O PRATO</button>
                                      </li>


                              <li id="" className="listadecomidas"  >
                                    <p>peixe assado </p>
                                    <img src={comida} className="imagensdocardapio" alt="" />
                                     {/* <button className="button-17">FAZER PEDIDO</button> */}
                                      <p>30 R$</p>

                                      <button className="button-17">SOBRE O PRATO</button>
                                      </li>


                              <li id="" className="listadecomidas"  >
                                    <p>peixe assado </p>
                                    <img src={comida} className="imagensdocardapio" alt="" />
                                     {/* <button className="button-17">FAZER PEDIDO</button> */}
                                      <p>30 R$</p>

                                      <button className="button-17">SOBRE O PRATO</button>
                                      </li>



                        </ul>
                        <Footer></Footer>
                  </div>

                 

                  {/* <Cardapio></Cardapio> */}


            </>
            
      )
}

export default Home