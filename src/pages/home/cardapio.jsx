import { useState } from "react";
import Comidas from "../../frag/comidas";
import Bebidas from "../../frag/bebidas";

function Cardapio() {
    const [bebidas, setBebidas] = useState("grid");

    const [comidas, setComidas] = useState("grid");
    const handleClickComidas = () => {
        setBebidas("none"), setComidas("grid")
        // setComidas(!comidas);
        // setComidass("grid")
        // setBebidas("none")
        console.log("click comidas ")


  }
  const handleClickBebidas = () => {
        setComidas("none"), setBebidas("grid")
        // setBebidas(!bebidas);
        // setBebidass("grid")
        // setComidass("none")

        console.log("clique bebidas")

  }

    return (
        <>
            <div id="bttn-op" className="tabs" style={{ display: "flex" }} >
                <button className="butto" onClick={handleClickComidas}  >COMIDAS</button>
                <button className="butto" onClick={handleClickBebidas} >BEBIDAS</button>
            </div>

            <div id="opçoes">



                <div style={{ display: comidas }} className="grid-menu" >
                    <Comidas />
                    <Comidas />
                    <Comidas />
                    <Comidas />
                </div>

                <div style={{ display: bebidas }} className="grid-menu">
                    <Bebidas  />
                    <Bebidas />
                    <Bebidas />
                    <Bebidas />
                </div>






            </div>

        </>
    )
}
export default Cardapio