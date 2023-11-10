import React, { useState } from 'react';
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import './adm.css';
import Nav from '../../frag/nav';


function Adm() {
 

  return (
   <div>
        <Nav></Nav>

        <div id="bttn-op" className="tabs">
                <button className="butto"  >COMIDAS</button>
                <button className="butto"  >BEBIDAS</button>
        </div>
        
        <div id='container-btn-adm'>

          
        </div>
   </div>

  )
}

export default Adm;




