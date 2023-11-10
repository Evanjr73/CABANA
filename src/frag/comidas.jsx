
import imagem from "./foto.png";
import comida from "./comidas.png"
import { Grid } from "antd";


function Comidas() {
    return (
        
            <ul id="COMIDAS" >
                <li id="" className="listadecomidas"  ><p>peixe assado </p><img src={comida} className="imagensdocardapio" alt="" /> <button className="button-17">FAZER PEDIDO</button> <button className="button-17">SOBRE O PRATO</button></li>


            </ul>

    
    )
}
export default Comidas