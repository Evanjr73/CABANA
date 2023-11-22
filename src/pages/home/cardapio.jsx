import { useState } from "react";
import { useEffect } from "react";
// import Comidas from "../../frag/comidas";
// import Bebidas from "../../frag/bebidas";
import Gridmenu from "../adm/components/Gridmenu";
import Gridbebidas from "../adm/components/Gridbebidas";

//bando de dado///




// import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
/////////////////////////////////////////

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


  
  const [users, setUsers] = useState([]);
  const [user , setUser] = useState([])
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/");
      setUsers(res.data.sort((a, b) => (a.nomel > b.nomel ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };
  const getBebidas = async () => {
    try {
      const res = await axios.get("http://localhost:8800/bebidas");
      setUser(res.data.sort((a, b) => (a.nomel > b.nomel ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };


  useEffect(() => {
    getUsers(), getBebidas();
  }, [setUsers, setUser]);
 
  ////////////////

    return (
        <>
            <div id="bttn-op" className="tabs" style={{ display: "flex" }} >
                <button className="butto" onClick={handleClickComidas} style={{borderRadius:"10px"}} >COMIDAS</button>
                <button className="butto" onClick={handleClickBebidas} style={{borderRadius:"10px"}} >BEBIDAS</button>
            </div>

            <div id="opçoes">



            <div style={{ display: comidas }} className="grid-menu" >
                    <Gridmenu setOnEdit={setOnEdit} users={users} setUsers={setUsers}></Gridmenu>
                   
                </div>

                <div style={{ display: bebidas }} className="grid-menu" >
                    <Gridbebidas  users={user} setUsers={setUser}></Gridbebidas>
                   
                </div>

                {/* <div style={{ display: comidas }} className="grid-menu" >
                    <Gridbebidas setOnEdit={setOnEdit} user={user} setUser={setUser}></Gridbebidas>
                </div> */}

               






            </div>

        </>
    )
}
export default Cardapio