import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import comida from "../../../frag/comidas.png"

import { useState } from "react";
const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

 
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Gridmenu = ({ users, setUsers, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/bebidas/" + id)
            .then(({ data }) => {
                const newArray = users.filter((user) => user.id !== id);

                setUsers(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };






    const [listaheig, setListaheig] = useState('0vh')
    const [wi, setWi] = useState("20vh")
    const [pe, setPe] = useState(false)

    const handleClickparagraf = () => {

        setListaheig("20vh")
        setPe(!pe)

    }
    return (

        <>
            <div >
                <div className="rotulo"><h1>COMIDAS</h1></div>
                <ul >

                    {users.map((item, i) => (

                        <li id="" className="listadecomidas"  >
                            <p style={{ height: "25px" }} >{item.nomel} </p>
                            {/* <img src={comida} className="imagensdocardapio" alt="" /> */}

                            <p style={{ height: "20px" }}>{item.valor}R$</p>
                            <div className="paragrafo" style={{ padding: "10px" }} >
                                {
                                    pe && <p style={{ height: listaheig, fontSize: "15px" }}>{item.sobre}</p>
                                }
                            </div>

                            {/* <button className="button-17">FAZER PEDIDO</button> */}
                            <button className="button-17" onClick={handleClickparagraf} style={{ margin: "10px" }}>SOBRE O PRATO</button>
                        </li>
                    ))}

                </ul>
            </div>
        </>


    );
};

export default Gridmenu;

