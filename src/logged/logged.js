import React, { useState } from "react";
import "./logged.css";
import HeaderLogged from "../headerLogged/headerLogged";
import { Link } from "react-router-dom";
const axios = require("axios");


function Logged(){
  return (
    <div>
      <HeaderLogged></HeaderLogged>
       <div className="Boxes">
       <div className="Box">
              <Link
                to="/formcampanhas"
                className="Link"
               
              >
              <div className="Box-item">
                {" "}
                Cadastrar campanha
                </div>
              </Link>
          </div>
          <div className="Box">
              <Link
                to="/formmantenedoras"
                className="Link"
               
              >
              <div className="Box-item">
                {" "}
                Cadastrar mantenedora
                </div>
              </Link>
          </div>
          <div className="Box">
              <Link
                to="/formparceiros"
                className="Link"
               
              >
              <div className="Box-item">
                {" "}
                
                Cadastrar parceiro
                </div>
              </Link>
          </div>
          <div className="Box">
              <Link
                to="/formfaq"
                className="Link"
               
              >
              <div className="Box-item">
                {" "}
                
                Cadastrar pergunta para o FAQ
                </div>
              </Link>
          </div>

          </div>
    </div>
  );
}

export default Logged;


