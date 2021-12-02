import React, { useState } from "react";
import "./formcampanhas.css";

const axios = require("axios");
function FormCampanhas() {
  const [nome, setNome] = useState("");
  const [logo, setLogo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const enviaDados = async (e) => {
    console.log("enviando");
    e.preventDefault();

    axios //faz chamada http
      .post("http://localhost:3002/campanhas", {
        nome,
        logo,
        descricao,
        inicio,
        fim, // nome: nome
      })
      .then((response) => {
        console.log("resposta da chamada http");
        console.log(response);
      })
      .catch((error) => {
        console.log("erro enviando formulario");
        console.log(error);
      });
  };
  return (
    <div>
      <fieldset classname="forms">
        <legend class="meet"> Cadastre uma campanha</legend>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          onChange={(v) => setNome(v.target.value)}
          value={nome}
        />

        <input
          type="url"
          name="logo"
          placeholder="Logo"
          onChange={(v) => setLogo(v.target.value)}
          value={logo}
        />

        <textarea
          placeholder="Descrição"
          onChange={(v) => setDescricao(v.target.value)}
          value={descricao}
        ></textarea>

        <div className="input">
          <label for="inicio"> Início &nbsp;&nbsp;&nbsp;</label>
          <input
            type="date"
            name="inicio"
            onChange={(v) => setInicio(v.target.value)}
            value={inicio}
          />
        </div>

        <div className="input">
          <label for="fim"> Fim &nbsp;&nbsp;&nbsp;</label>
          <input
            type="date"
            name="fim"
            onChange={(v) => setFim(v.target.value)}
            value={fim}
          />
        </div>

        <button onClick={enviaDados} value="Enviar" className="forms-button">
          Enviar{" "}
        </button>
      </fieldset>
    </div>
  );
}

export default FormCampanhas;
