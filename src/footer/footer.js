import React from "react";

import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-image">
        <Link to="/login" className="Link">
          <img
            src="https://drive.google.com/uc?id=1ImZ4n3Gf9mtR1HmBGzL_ZXCTCOUxlQzC"
            alt="Logo do Banco de Alimentos"
            className="logo_footer"
          />
        </Link>

        <div className="footer-text">
          <p className="footer-title">Contato</p>
          <a
            href="https://www.facebook.com/bancodealimentosriogrande"
            className="links"
          >
            <AiOutlineFacebook></AiOutlineFacebook> &nbsp;
            @bancodealimentosriogrande
          </a>
          <br></br>
          <a
            href="mailto:diretoria@bancodealimentosriogrande.org.br"
            className="links"
          >
            <CgMail></CgMail> &nbsp; diretoria@bancodealimentosriogrande.org.br
          </a>
          <br></br>
          <a href="tel:99189-0535" className="links">
            <FiPhoneCall></FiPhoneCall> &nbsp; (53) 99189-0535
          </a>
          <br></br>
          <img
            src="https://drive.google.com/uc?id=1_jot0SEtymEWJh4tU7QBk7_NfnfnC8G4"
            alt="Logo da prefeitura"
            width="20px"
          />
          <a href="https://www.riogrande.rs.gov.br/pagina/" className="links">
            &nbsp; Prefeitura Municipal do Rio Grande
          </a>
        </div>
      </div>
      <div className="credits">
        <p>
          Desenvolvido por: Adriele Colossi e Sofia Machado | Coordenado por:
          Raquel Barbosa e Vinicius Machado
        </p>
      </div>
    </div>
  );
}

export default Footer;
