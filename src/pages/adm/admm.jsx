import React, { useState } from 'react';
import './adm.css';

import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/Form.jsx";
import Grid from "./components/Grid.jsx";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;


function Admm() {



    const [users, setUsers] = useState([]);

    const [onEdit, setOnEdit] = useState(null);



    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:8800/");
            setUsers(res.data.sort((a, b) => (a.nomel > b.nomel ? 1 : -1)));

        } catch (error) {
            toast.error(error);
        }

    };

    useEffect(() => {
        getUsers();
    }, [setUsers])

    return (
        <div>



            <Container>
                <Title>COMIDAS</Title>
                <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />

            </Container>


            {/* <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> */}
            <GlobalStyle />






            <div id='container-btn-adm' style={{ marginTop: "10vh" }}>
                <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />

            </div>
            

        </div>

    )
}

export default Admm;

