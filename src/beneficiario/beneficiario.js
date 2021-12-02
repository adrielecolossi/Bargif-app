import React from "react";
import "./beneficiario.css";

function Beneficiario() {
  window.scrollTo(0, 0);

  return (
    <div>
      <p className="meet">
        Confira as informações para se tornar beneficiário!
      </p>
      <p className="info-beneficiario">
        Para ser beneficiário do BARG, a instituição necessita estar devidamente
        regulamentada com os seguintes documentos:
        <br />
        <br />
        <a
          href="https://drive.google.com/uc?id=1qA0aXcnzRnadmKyMWBggqyk_Ix0zYVS5"
          target="_blank" 
          style={{ fontWeight: "bold", color: "black", textAlign: "center" }}
        >
          📃 Documentação
        </a>
        <br />
        <br />
        Importante salientar que o BARG não fornece alimentos para confecção de
        cestas básicas. Os produtos doados são para instituições que transformam
        os alimentos em refeições.
      </p>
      <p className="aviso">
        Para solicitar uma análise se sua entidade ou associação pode ser
        beneficiada pelo BARG, entre em contato pelo telefone:
        <a
          style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
          href="tel:99189-0535"
        >
          &nbsp; (53) 99189-0535 &nbsp;
        </a>
        que efetuaremos a avaliação.
      </p>
    </div>
  );
}

export default Beneficiario;
