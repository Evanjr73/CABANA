import React, { useState } from 'react';
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import './adm.css';
import Nav from '../../frag/nav';
import Bebidas from '../../frag/bebidas';
import Comidas from '../../frag/comidas';

function Adm() {
 

  return (
   <div>
        <Nav></Nav>

        <div id="bttn-op" className="tabs">
                <button className="butto"  >COMIDAS</button>
                <button className="butto"  >BEBIDAS</button>
        </div>
        
        <div id='container-btn-adm'>
          <Bebidas></Bebidas>
          <Comidas></Comidas>
          
        </div>
   </div>

  )
}

export default Adm;




