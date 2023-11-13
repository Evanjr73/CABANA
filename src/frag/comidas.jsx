
import imagem from "./foto.png";
import comida from "./comidas.png"
import { Grid } from "antd";
import { useState } from "react";

function Comidas() {

    const [listaheig, setListaheig] = useState('0vh')
    const [pe, setPe] = useState(false)

    const handleClickparagraf = () => {

        setListaheig("20vh")
        setPe(!pe)

    }
    return (

        <ul id="COMIDAS" >
            <li id="" className="listadecomidas"  >
                <p style={{ height: "25px" }} >peixe assado </p>
                <img src={comida} className="imagensdocardapio" alt="" />

                <p style={{ height: "20px" }}>100R$</p>
                <div className="paragrafo" style={{ padding: "10px" }} >
                    {
                        pe && <p style={{ height: listaheig, fontSize: "15px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio off
                            , eaque exercitationem blanditiis debitis dicta soluta, beatae itaque aut voluptas. Doloribus, repudiandae.</p>
                    }
                </div>

                {/* <button className="button-17">FAZER PEDIDO</button> */}
                <button className="button-17" onClick={handleClickparagraf}  style={{margin:"10px"}}>SOBRE O PRATO</button>
            </li>


        </ul>


    )
}
export default Comidas