//import "./campanhas/campanhas.css";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import "./pactopelavida.css";
import HeaderOne from "../header/header.js";

const images = [
  {
    original:
      "https://drive.google.com/uc?id=1e8MY2rIL6uQdKUeLoPfA6Glh0J79cKRq",
    thumbnail:
      "https://drive.google.com/uc?id=1e8MY2rIL6uQdKUeLoPfA6Glh0J79cKRq",
  },
  {
    original:
      "https://drive.google.com/uc?id=1lS3AfXtMDMF6vJS7fVIXcMAjwhB7lSwl",
    thumbnail:
      "https://drive.google.com/uc?id=1lS3AfXtMDMF6vJS7fVIXcMAjwhB7lSwl",
  },
  {
    original:
      "https://drive.google.com/uc?id=1udNCmQ0WsM-tHjtck5dG97UOJjqnX_6n",
    thumbnail:
      "https://drive.google.com/uc?id=1udNCmQ0WsM-tHjtck5dG97UOJjqnX_6n",
  },
  {
    original:
      "https://drive.google.com/uc?id=1lHSGQVgfJMlE2ngGoRexZQiCTBysDuKO",
    thumbnail:
      "https://drive.google.com/uc?id=1lHSGQVgfJMlE2ngGoRexZQiCTBysDuKO",
  },
  {
    original:
      "https://drive.google.com/uc?id=1WM11GcJGi81XPyLM4itKa4UvnknQc_Ge",
    thumbnail:
      "https://drive.google.com/uc?id=1WM11GcJGi81XPyLM4itKa4UvnknQc_Ge",
  },
  {
    original:
      "https://drive.google.com/uc?id=1-8rv-SOT_NDuYYomoboeTJr4wxdUhnXr",
    thumbnail:
      "https://drive.google.com/uc?id=1-8rv-SOT_NDuYYomoboeTJr4wxdUhnXr",
  },
  {
    original:
      "https://drive.google.com/uc?id=1CNzLN_DiqcmPjqQjj1-NEd7BTwuAJvqO",
    thumbnail:
      "https://drive.google.com/uc?id=1CNzLN_DiqcmPjqQjj1-NEd7BTwuAJvqO",
  },
  {
    original:
      "https://drive.google.com/uc?id=1UQ-3DtH78IEIkXjqbutvBOoDB77O5Ea0",
    thumbnail:
      "https://drive.google.com/uc?id=1UQ-3DtH78IEIkXjqbutvBOoDB77O5Ea0",
  },
  {
    original:
      "https://drive.google.com/uc?id=1e6Ev_aBZP80JyYgcTifH9dgsFAzzu2wL",
    thumbnail:
      "https://drive.google.com/uc?id=1e6Ev_aBZP80JyYgcTifH9dgsFAzzu2wL",
  },
  {
    original:
      "https://drive.google.com/uc?id=1tGapyJfP4E6ex7jVA5BkoQt5WjyBGsLy",
    thumbnail:
      "https://drive.google.com/uc?id=1tGapyJfP4E6ex7jVA5BkoQt5WjyBGsLy",
  },
  {
    original:
      "https://drive.google.com/uc?id=1yJll0rWZhwfUKh6p6yfrmMVWkyV78MfY",
    thumbnail:
      "https://drive.google.com/uc?id=1yJll0rWZhwfUKh6p6yfrmMVWkyV78MfY",
  },
];

function Pacto() {

  const actions = [
    {
      title: "1?? A????o Conjunta de Mobiliza????o (ACM) - 1?? Drive-THRU de P??scoa",
      participants: [
        "6?? GAC",
        "Col??gio S??o Luiz",
        "Posto Buffon P??rtico",
        "Posto Buffon Parque Marinha",
        "SAC",
      ],
    },
    {
      title: "2?? A????o Conjunta de Mobiliza????o (ACM)- Pontos de Coleta",
      participants: [
        "Col??gio Marista",
        "Col??gio Salesiano",
        "Col??gio Alternativo",
        "Egreja do Salvador",
        "Pra??a Rio Grande Shopping",
        "Escola Cristo Rei",
        "Partage Shopping Rio Grande",
        "UERG",
        "Catedral de S??o Pedro",
        "Furg Cide",
        "SENAC",
      ],
    },
    {
      title: "3?? A????o Conjunta de Mobiliza????o (ACM) - Mobiliza????o Vacina????o",
      participants: [
        `Todas as vacina????es a partir do dia 07/04 come??aram areceber doa????es de alimentos.`,
        "Volunt??rios da Cruz Vermelha, SESC, 6?? GAC e 5DN",
      ],
    },
    {
      title: "4?? A????o Conjunta de Mobiliza????o (ACM) - Apoio das Empresas",
      participants: [
        "Yara Brasil",
        "Kasa Obra",
        "Postos Buffon",
        "Pr??ticos da Barra",
      ],
    },
    {
      title: "5?? A????o Conjunta de Mobiliza????o (ACM) - Dia das M??es",
      participants: ["Especial Show do Roberto Carlos"],
    },
  ];

  const [actionEnabled, setActionEnabled] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleAction = (idx) => {
    const currState = [...actionEnabled];
    currState[idx] = !currState[idx];
    setActionEnabled(currState);
  };

  //  estadoAtual[estado] = !estadoAtual[estado];

  return (
    <>
    <HeaderOne></HeaderOne>
    <div className="pag-pacto">
      <div className="pacto-description">
        <img
          className="pacto-logo"
          src="https://drive.google.com/uc?id=1nCjeoubt6i_DkHI1U4l2Grfl-G-Lhwjj"
          alt="Logo do Pacto pela Vida"
        />
        <p className="description">
          Com objetivo de estimular a doa????o de alimentos para auxiliar as
          fam??lias mais necessitadas que enfrentam a pandemia da Covid-19, foi
          lan??ada em Rio Grande, nesta quarta-feira (31), a campanha Pacto pela
          Vida, a Fome n??o Espera. A a????o envolve a Prefeitura Municipal,
          igrejas, ??rg??os militares e outras entidades civis organizadas.
        </p>
      </div>

      <table className="sig">
        <br />
        <tr>
          <th className="title-tab"> Signat??rios </th>
        </tr>
        <tr>
          <td className="table-body"> - Banco de Alimentos </td>
          <td className="table-body"> - Sesc </td>
        </tr>
        <tr>
          <td className="table-body"> - Cruz Vermelha </td>
          <td className="table-body"> - CDL </td>
        </tr>
        <tr>
          <td className="table-body"> - Marinha do Brasil </td>
          <td className="table-body"> - Col??gio S??o Francisco </td>
        </tr>
        <tr>
          <td className="table-body"> - Diocese do Rio Grande </td>
          <td className="table-body"> - FURG </td>
        </tr>
        <tr>
          <td className="table-body"> - 6?? GAC </td>
          <td className="table-body"> - Escola S??o Luiz </td>
        </tr>
        <tr>
          <td className="table-body"> - COPERG </td>
          <td className="table-body"> - Col??gio Salesianos </td>
        </tr>
        <tr>
          <td className="table-body"> - SENAC </td>
          <td className="table-body"> - UERG </td>
        </tr>
        <tr>
          <td className="table-body"> - ARUTEMA </td>
          <td className="table-body"> - URUMI </td>
        </tr>
        <tr>
          <td className="table-body"> - Secretaria do Desenvolvimento </td>
          <td className="table-body"> - IFRS </td>
        </tr>
        <tr>
          <td className="table-body"> - Egreja do Salvador </td>
          <td className="table-body"> - Escola Cristo Rei </td>
        </tr>
        <tr>
          <td className="table-body"> - Col??gio Alternativo </td>
        </tr>
        <br />
        <br />
      </table>

      <div className="donation">
        <table className="tabela">
          <tr>
            <th className="head"> DATA </th>
            <th className="head"> CESTAS </th>
          </tr>
          <tr>
            <td className="table2-body"> Abril </td>
            <td className="table2-body"> 290 Mesa </td>
          </tr>
          <tr>
            <td className="table2-body"> Maio </td>
            <td className="table2-body"> 320 Mesa </td>
          </tr>
          <tr>
            <td className="table2-body"> Junho </td>
            <td className="table2-body"> 51 Mesa </td>
          </tr>
          <tr>
            <td className="table2-body"> Junho </td>
            <td className="table2-body"> 26 BARG </td>
          </tr>
          <tr>
            <td className="table2-body"> Junho </td>
            <td className="table2-body"> 327 Mesa </td>
          </tr>
          <tr>
            <td className="table2-body"> Junho </td>
            <td className="table2-body"> 7 Mesa </td>
          </tr>
          <br />
          <tr>
            <td className="table2-body"> Total </td>
            <td className="table2-body"> 1042 </td>
          </tr>
          <tr>
            <td className="table2-body"> Peso Total </td>
            <td className="table2-body"> 14590,06 g </td>
          </tr>
          <tr>
            <td className="table2-body"> Mesa </td>
            <td className="table2-body"> 995 </td>
          </tr>
        </table>

        <table className="tabela">
          <tr>
            <th className="head">Foram montadas 988 cestas.</th>
          </tr>
          <tr>
            <td className="table2-body"> Abril foram doadas 290 cestas; </td>
          </tr>
          <tr>
            <td className="table2-body"> Maio foram doadas 320 cestas; </td>
          </tr>
          <tr>
            <td className="table2-body"> Junho foram doadas 51 cestas; </td>
          </tr>
          <tr className="table2-body">
            {" "}
            <br></br>
            Estamos com 327 cestas para entrega <br />
            e ainda possu??mos alimentos para mais <br />
            cestas.
          </tr>
        </table>

        <table className="tabela">
          <tr>
            <th className="head">
              {" "}
              Ao total atendemos 12 entedidades sociais.{" "}
            </th>
          </tr>
          <tr>
            <td className="table2-body">
              {" "}
              Associa????o Moradores do Bairro Atl??ntico Sul;
            </td>
          </tr>
          <tr>
            <td className="table2-body"> Apae; </td>
          </tr>
          <tr>
            <td className="table2-body">
              {" "}
              Associa????o de Moradores da Quer??ncia;{" "}
            </td>
          </tr>
          <tr>
            <td className="table2-body"> Associa????o Mad Max; </td>
          </tr>
          <tr>
            <td className="table2-body">
              {" "}
              Associa????o dos Amigos da Semente da Esperan??a;{" "}
            </td>
          </tr>
          <tr>
            <td className="table2-body"> Casa Vida; </td>
          </tr>
          <tr>
            <td className="table2-body"> Educand??rio Cora????o de Maria; </td>
          </tr>
          <tr>
            <td className="table2-body"> Igreja da Castelo Branco II</td>
          </tr>
          <tr>
            <td className="table2-body"> Igreja Le??nidas </td>
          </tr>
          <tr>
            <td className="table2-body"> Cruz Vermelha </td>
          </tr>
        </table>
      </div>

      <div className="container-caurosel">
        <div className="actions">
          {actions.map((act, idx) => {
            return (
              <div className="boxes">
                <p className="titulo" onClick={() => toggleAction(idx)}>
                  {act.title} &nbsp;&nbsp;
                  {actionEnabled[idx] ? <FiArrowUp /> : <FiArrowDown />}
                </p>
                {actionEnabled[idx] &&
                  act.participants.map((part) => {
                    return <p>{part}</p>;
                  })}
              </div>
            );
          })}
        </div>

        <div className="pacto-caurosel" id="slide">
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Pacto;
