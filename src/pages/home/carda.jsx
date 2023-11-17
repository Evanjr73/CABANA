import React from "react";
import "./carda.css"
import { useState } from "react";
import imagem from "./logo.png";
import "./cardapio.css"
import Cardapio from "./cardapio";



function Carda() {




      const [buton, setButon] = useState("none"); //CARDAPIO
      const [buto, setButo] = useState("flex"); //X
      const [men, setMen] = useState(false);
      const [cardapio1, setCardapio1] = useState("0vh")
      const [containerhome, setContainerhome] = useState("60vh")
      const [fixar, setFixar] = useState("7vh")


      const handleClickcardapio1 = () => {


      }

      //CARDAPIO

      const handleClickMen = () => {
            setButon("flex")
            setContainerhome("0vh")
            setFixar("3vh")
            setMen(!men);
            setButo("none")
            setCardapio1("80vh")

      }
      //X
      const handleClickMenu = () => {
            setButon("none")
            setFixar("7vh")
            setContainerhome("60vh")
            setMen(!men);
            setButo("flex")
            setCardapio1("0vh")


      }


    
     



      return (


            <>    
                  
                  <header style={{width:"100vw", height:"4vh"}}>
                        <a href="/login"> <button className="BUTT" style={{width:"20vw", margin:"0.4rem"}}>ADM</button></a>
                  </header>
                  <nav style={{display: buton}} >
                        <h1>RESTAURANTE</h1>

                  </nav>



                  <div id="containerHome" style={{ height: containerhome }}>


                        {/* <input type="file" name="arquivos" class="btn btn-success" /> */}
                        <img src={imagem} id="imghome" style={{ height: containerhome }} />




                  </div>

                  <main style={{ height: fixar }}>

                        <button className="butt" onClick={handleClickMen} style={{ display: buto, height: fixar }} >CARDAPIO</button>
                        <button className="butt" onClick={handleClickMenu} style={{ display: buton, height: fixar }}>FECHAR</button>
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