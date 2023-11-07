

import Nav from "../../frag/nav";
import Cardapio from "../../frag/cardapio";
import "./home.css"
import Bebidas from "../../frag/bebidas";
import Comidas from "../../frag/comidas";
// import image from "next/image"

// import perfil from "./foto.png"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Home() {
      // const [bebidas, setBebidas] = useState("grid");
      // const [comidas, setComidas] = useState("none");
      // const handleClickComidas = () => {
      //   setBebidas("none");
      //   setComidas("grid");
      // };
      // const handleClickBebidas = () => {
      //   setComidas("none");
      //   setBebidas("grid");
      // };


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
                        <button className="butto"  >COMIDAS</button>
                        <button className="butto"  >BEBIDAS</button>
                  </div>
                  
                        <Bebidas></Bebidas>
                        <Comidas></Comidas>
                  
                  {/* <Cardapio></Cardapio> */}


            </>
      )
}

export default Home