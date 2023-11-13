
import imagem from "./foto.png";
import comida from "./comidas.png"
import { useState } from "react";

function Bebidas() {
   
    const [listaheigt, setListaheigt] = useState('0vh')
    const [p, setP] = useState(false)

    const handleClickparagrafo = () => {
       
        setListaheigt("20vh")
        setP(!p)

    }

    return (

        <ul id="BEBIDAS">

            <li id="" className="listadebebidas" >

                <p style={{height:"25px"}}>ice drink</p>


                <img src={imagem} className="imagensdocardapio" alt="" />
                <p style={{height:"20px"}}>100R$</p>

                {/* <button className="button-17">FAZER PEDIDO</button>  */}
                <div className="paragrafo" style={{padding:"10px"}} >
                    {
                        p && <p style={{height:listaheigt, fontSize:"15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio off
                        , eaque exercitationem blanditiis debitis dicta soluta, beatae itaque aut voluptas. Doloribus, repudiandae.</p>
                    }
                </div>


                <button className="button-17" onClick={handleClickparagrafo}  style={{margin:"10px"}}>SOBRE O PRATO</button>


            </li>

        </ul>

    )
}

export default Bebidas