import React, { useState } from "react";
import "./home.css";
//import "../header/header.css";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import HeaderOne from "../header/header.js";

function Home() {

  const [info, setInfo] = useState("Clique nas panelas para mais informações!");

  const redIcon = new Icon({
    iconUrl:
      "https://drive.google.com/uc?id=1Qa8cepYFK16w2vCJ_-1mXjZy0B5BsfH8",
    iconSize: [30, 45],
  });

  function textAppear(e) {
    switch (e) {
      case "azul":
        setInfo(
          "Arrecadar: ações desenvolvidas diretamente pelo BARG ou de terceiros que consiste em aquisição de alimentos."
        );
        break;
      case "amarelo":
        setInfo(
          "Selecionar: separação minuciosa dos produtos arrecadados/doados, observando condições de consumo, data de validade e qualidade."
        );
        break;
      case "verde":
        setInfo(
          "Acondicionar: guardar de maneira organizada e funcional os alimentos em local limpo, seguro contra intempéries e pragas"
        );
        break;
      case "laranja":
        setInfo(
          "Entregar: ação final do processo  que acontece de acordo com a necessidade dos beneficiários cadastrados no bando de dados."
        );
        break;
      default:
        setInfo();
    }
  }

  return (
    <>
    <HeaderOne></HeaderOne>
      <div className="main-pag">
        <br />
        <div className="section-aside">
          <section>
            <h1 className="QuemSomos">Quem somos?</h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O Banco de
              Alimentos se caracteriza por ser uma organização sem fins
              lucrativos constituída por voluntários e que têm como objetivo
              arrecadar alimentos e recuperar excessos alimentares da sociedade
              redistribuindo os mesmos de forma organizada aos mais
              necessitados, combatendo assim a fome e o desperdício de insumos.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;É também
              característica do BARG promover o espírito solidário na comunidade
              e nas organizações, no intuito de auxiliar a constituir uma
              sociedade mais igualitária e que promova uma melhor divisão de
              recursos alimentares.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O Banco não distribui
              alimentos diretamente às pessoas, mas sim à instituições
              oficialmente reconhecidas que promovem a transformação do alimento
              em refeiçõespara os cidadãos necessitados.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O BARG
              juridicamente é registrado como uma OSCIP (Organização da
              Sociedade Civil de Interesse Público) ,e pode assim receber
              auxílio tanto de convênios como órgãos federais, estaduais e
              municipais, bem como da iniciativa privada - que tem a vantagem de
              efetuar suas doações e deduzir do imposto de renda. As empresas
              que auxiliam regularmente o banco são denominadas mantenedoras, e
              representam um importante papel na sociedade no auxílio aos mais
              necessitados. Se você quer fazer parte desta corrente do bem,
              entre em contato com o BARG.
            </p>
          </section>

          <aside>
            <div className="container-panelas">
              <div className="panelas">
                <img
                  className="panela-azul"
                  alt="panela azul"
                  src="https://drive.google.com/uc?id=1VV--RfjhCAspcbu3pnM9w4LFeSToSrNw"
                  onClick={() => textAppear("azul")}
                />

                <img
                  className="panela-amarela"
                  alt="panela amarela"
                  src="https://drive.google.com/uc?id=1w18s3qpTHn5CDB5seP3w_X7OcZ0VPknc"
                  onClick={() => textAppear("amarelo")}
                />

                <img
                  className="panela-meio"
                  alt="panela do meio"
                  src="https://drive.google.com/uc?id=12Ckjk4LpAAAIyf4M2a08kJHuQjQSjUAH"
                />

                <img
                  className="panela-verde"
                  alt="panela verde"
                  src="https://drive.google.com/uc?id=1yFsBAkvTtz6zFb4wPr23bDS5iGDJf0PZ"
                  onClick={() => textAppear("verde")}
                />
                <img
                  className="panela-laranja"
                  alt="panela laranja"
                  src="https://drive.google.com/uc?id=17CSoLd_ETPaiJz31Lbs8utYR7db7V9oS"
                  onClick={() => textAppear("laranja")}
                />
              </div>
            </div>
            <p className="panelas-info">{info}</p>
          </aside>
        </div>

        <div className="map">
          <MapContainer
            center={[-32.03697485599422, -52.10943932754649]}
            zoom={16}
            scrollWheelZoom={true}
            id="map-container"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[-32.03697485599422, -52.10943932754649]}
              icon={redIcon}
            >
              <Popup>
                <div className="div-adress">
                  <img
                    className="adress"
                    src="https://drive.google.com/uc?id=1k1gOlgotihtzUBLqqw9Ich7y5Wmf-yQd"
                    alt="Foto da Sede do Banco de Alimentos"
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "80px ",
                    }}
                  />
                  Sede do banco de alimentos
                  <br />
                  Avenida Pelotas, 147
                  <br />
                  (53) 99189-0535
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="Boxes">
          <div className="Box">
            <div className="Box-item">
              <Link
                to="/beneficiario"
                className="Link"
               
              >
                {" "}
                Como ser beneficiário?
              </Link>
            </div>
          </div>
          <div className="Box">
            <div className="Box-item">
              <Link
                to="/doar"
                className="Link"
                
              >
                {" "}
                Como doar?
              </Link>
            </div>
          </div>
          <div className="Box">
            
              <Link
                to="/noticias"
                className="Link"
               
              ><div className="Box-item">
                {" "}
                Notícias do BARG
                </div>
              </Link>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
