import React, { useState } from "react";
import "./headerLogged.css";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar.js";
var axios = require("axios")

let email= localStorage.getItem('user');
let tokenRecebido= localStorage.getItem('token');
function HeaderLogged(props) {

    const [nome, setNome] = useState("");
  const pegaNome = async () => {
    
  
    axios.post('http://localhost:3001/logged', 
    {
      email,
      tokenRecebido
    }).then((response) => {
       setNome(response.data[0].nome)  
      }, (error) => {
       alert("Não autenticado")
        console.log(error);
      });
    }
    pegaNome()
   
  return (
    <header>
      <nav>
          <img
            className="top-image"
            src="https://drive.google.com/uc?id=1orJ0aUQNIDQcTFHI_AVaXWts2ZLzpDZM"
            alt="Logo do IFRS"
          />
        <SideBar />
<div>
       <ul>
         <li  style={{ textDecoration: "none", color: "white" }} id="User">
        {nome}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
       </ul>  
        </div>
      </nav>

      <div className="capa">
        <img
          className="middle-img scale-in-center"
          src="https://drive.google.com/uc?id=1PXIQyahdDWaNUzWKbi_RC94qgmwNrrHX"
          alt="Logo do Banco de Alimentos"
        />
        <h1 className="scale-in-center">
          Banco de Alimentos de Rio Grande - RS
        </h1>
        <h1 className="scale-in-center">Luis Augusto Pinto Lemos</h1>
        <h2 className="scale-in-center"> O melhor prato é o prato cheio.</h2>
        <div className="information">
          <img
            className="icons scale-in-center"
            src="https://drive.google.com/uc?id=18E1MzL4ahsZHqDN18K9Y2FkEFIT73QAM"
            alt="Ícone de Telefone"
          />
          <a className="info scale-in-center" href="tel:99189-0535">
            (53) 99189-0535
          </a>{" "}
          &nbsp; &nbsp;
          <img
            className="icons scale-in-center"
            src="https://drive.google.com/uc?id=1fRnbqq2EqpAaM1itbd3P8pNghY_3aroo"
            alt="Ícone de Localização"
          />
          <p className="info scale-in-center">
            Avenida Pelotas, 147 - Cidade Nova - Rio Grande/RS
          </p>
        </div>
      </div>
    </header>
  );
}

export default HeaderLogged;
