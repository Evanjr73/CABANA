import imagem from "./foto.png";
import comida from "./comidas.png"
import "./cardapio.css"

function Cardapio() {

   
    return (
        <div id="opçoes">

            
          
            <ul id="BEBIDAS">

                <li id="" className="listadebebidas"><p>ice drink</p><img src={imagem} className="imagensdocardapio" alt="" /> <button className="button-17">FAZER PEDIDO</button> <button className="button-17" >SOBRE O PRATO</button></li>
                <li id="" className="listadebebidas"><p>ice drink</p><img src={imagem} className="imagensdocardapio" alt="" /> <button className="button-17">FAZER PEDIDO</button> <button className="button-17" >SOBRE O PRATO</button></li>
                <li id="" className="listadebebidas"><p>ice drink</p><img src={imagem} className="imagensdocardapio" alt="" /> <button className="button-17">FAZER PEDIDO</button> <button className="button-17" >SOBRE O PRATO</button></li>
                <li id="" className="listadebebidas"><p>ice drink</p><img src={imagem} className="imagensdocardapio" alt="" /> <button className="button-17">FAZER PEDIDO</button> <button className="button-17" >SOBRE O PRATO</button></li>

            </ul>
            <ul id="COMIDAS" >
                <li id="" className="listadecomidas"  ><p>peixe assado </p><img src={comida} className="imagensdocardapio" alt="" /> <button className="button-17">FAZER PEDIDO</button> <button className="button-17">SOBRE O PRATO</button></li>
                <li id="" className="listadecomidas"  ><p>peixe assado </p><img src={comida} className="imagensdocardapio" alt="" /> <button className="button-17">FAZER PEDIDO</button> <button className="button-17">SOBRE O PRATO</button></li>
                <li id="" className="listadecomidas"  ><p>peixe assado </p><img src={comida} className="imagensdocardapio" alt="" /> <button className="button-17">FAZER PEDIDO</button> <button className="button-17">SOBRE O PRATO</button></li>
                <li id="" className="listadecomidas"  ><p>peixe assado </p><img src={comida} className="imagensdocardapio" alt="" /> <button className="button-17">FAZER PEDIDO</button> <button className="button-17">SOBRE O PRATO</button></li>

            </ul>
        </div>
    )
}

export default Cardapio