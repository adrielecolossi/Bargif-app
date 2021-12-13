import "./pontos.css";
import React, { useState } from "react";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import HeaderOne from "../header/header.js";

function Pontos() {
  const initial = "";
  const [refeicoes, setRefeicoes] = useState(initial);
  const [perio, setPerio] = useState(initial);
  const redIcon = new Icon({
    iconUrl: "https://drive.google.com/uc?id=1Qa8cepYFK16w2vCJ_-1mXjZy0B5BsfH8",
    iconSize: [20, 30],
  });
  function appear(e) {
    document.getElementsByClassName("before-ap")[0].style.display = "none";
    document.getElementsByClassName("table-dados")[0].style.display = "unset";
    switch (e) {
      case 0:
        setRefeicoes("?");
        setPerio("?");
        break;

      case 1:
        setRefeicoes("900 por mês");
        setPerio("Todos os dias da semana");
        break;

      case 2:
        setRefeicoes("8500 por mês");
        setPerio("Segunda a sexta");
        break;

      case 3:
        setRefeicoes("3780 por mês");
        setPerio("Todos os dias da semana");
        break;

      case 4:
        setRefeicoes("1800 por mês");
        setPerio("Todos os dias da semana");
        break;

      case 5:
        setRefeicoes("2700 por mês");
        setPerio("Todos os dias da semana");
        break;

      case 6:
        setRefeicoes("1200 por mês");
        setPerio("Todos os dias da semana");
        break;

      case 7:
        setRefeicoes("2400 por mês");
        setPerio("Todos os dias da semana");
        break;

      case 8:
        setRefeicoes("3840 por mês");
        setPerio("?");
        break;

      case 9:
        setRefeicoes("3920 por mês");
        setPerio("Todos os dias da semana");
        break;

      case 10:
        setRefeicoes("1000 por mês");
        setPerio("Sábados");
        break;

      case 11:
        setRefeicoes("400 por mês");
        setPerio("Terças e Sextas");
        break;

      case 12:
        setRefeicoes("?");
        setPerio("?");
        break;

      case 13:
        setRefeicoes("?");
        setPerio("?");
        break;

      case 14:
        setRefeicoes("?");
        setPerio("?");
        break;

      case 15:
        setRefeicoes("?");
        setPerio("?");
        break;

      case 16:
        setRefeicoes("780 por mês");
        setPerio("Segundas e quartas/quintas");
        break;

      default:
        setRefeicoes("?");
        setPerio("?");
    }
  }

  setTimeout(clico, 100);

  function clico() {
    var x = document.getElementsByClassName(
      "leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
    );
    if (x.length !== 1) {
      x[0].addEventListener("click", () => appear(0));
      x[1].addEventListener("click", () => appear(1));
      x[2].addEventListener("click", () => appear(2));
      x[3].addEventListener("click", () => appear(3));
      x[4].addEventListener("click", () => appear(4));
      x[5].addEventListener("click", () => appear(5));
      x[6].addEventListener("click", () => appear(6));
      x[7].addEventListener("click", () => appear(7));
      x[8].addEventListener("click", () => appear(8));
      x[9].addEventListener("click", () => appear(9));
      x[10].addEventListener("click", () => appear(10));
      x[11].addEventListener("click", () => appear(11));
      x[12].addEventListener("click", () => appear(12));
      x[13].addEventListener("click", () => appear(13));
      x[14].addEventListener("click", () => appear(14));
      x[15].addEventListener("click", () => appear(15));
      x[16].addEventListener("click", () => appear(16));
    }
    //Marker.setAttribute('href', "#");
  }

  const pontos = [
    {
      title: "Sede do banco de alimentos",
      img: "https://drive.google.com/uc?id=1k1gOlgotihtzUBLqqw9Ich7y5Wmf-yQd",
      desc: "Foto da Sede do Banco de Alimentos",
      adress: "Avenida Pelotas, 147",
      tel: "(53) 99189-0535",
      x: "-32.03697485599422",
      y: "-52.10943932754649",
    },
    {
      title: " AAPECAN - Associação de Apoio a Pessoas com Câncer",
      img: "https://drive.google.com/uc?id=19t4TaNO4uig9kFJB1V0NnkbN5ySS7hhZ",
      desc: "Foto da Aapecan",
      adress: "R. Gen. Abreu, 342",
      tel: "(53) 3201-4504",
      x: "-32.04229422789197",
      y: "-52.11164667418101",
    },
    {
      title: "Asylo do Rio Grande",
      img: "https://drive.google.com/uc?id=1d3EIcSsvRoMAY-gPzQTLDsgWhPHuZoen",
      desc: "Foto do Asylo",
      adress: "R. Vinte e Quatro de Maio 571 ",
      tel: "(53) 3232-6025",
      x: "-32.03901417433118",
      y: "-52.10106587095693",
    },
    {
      title: "Orfanato Maria Carmem",
      img: "https://drive.google.com/uc?id=1opN6jlj9_DAjRclcBMAF0nXHDBkZH_8o",
      desc: "Foto do Orfanato Maria Carmem",
      adress: "R. Dr. Nascimento, 157",
      tel: "(53) 3232-8821",
      x: "-32.03725348333348",
      y: "-52.09290666672554",
    },
    {
      title: "Orfanato Raio de Luz",
      img: "https://drive.google.com/uc?id=1UiKbL6WUejGe4RX0WZ494NWi7TOlOC9t",
      desc: "Foto do Orfanato Raio de Luz",
      adress: "R. Forte Santana, 748",
      tel: "(53) 3230-6661",
      x: "-32.052307473707444",
      y: "-52.12545724719088",
    },
    {
      title: "Casa do Menor",
      img: "https://drive.google.com/uc?id=1tXflgthTo8FwPrBhgW886ZgVMTpk26Wk",
      desc: "Foto da Casa do Menor",
      adress: "Av. Portugal, 30",
      tel: "(53) 3231-2141",
      x: "-32.03256187933478",
      y: "-52.10864221651128",
    },
    {
      title: "Pensionato meu 3º Lar",
      img: "https://drive.google.com/uc?id=1TPi-iW_e6q-i_puo3-haDc_TMvFw8xkC",
      desc: "Foto do Pensionato meu terceiro lar",
      adress: "Walter Ramos, 162",
      tel: "(53) 9162-2532",
      x: "-32.03023158337976",
      y: "-52.10620467602675",
    },
    {
      title: "Pensionato Santa Rita",
      img: "https://drive.google.com/uc?id=1ir8v0I_2CxZhvmmOzP6NOJCZd6hsBO8S",
      desc: "Foto do Pensionato Santa Rita",
      adress: "R. Bento Gonçalves , 342",
      tel: "(53) 3231-1613",
      x: "-32.03991187842975",
      y: "-52.11298987418109",
    },
    {
      title: "Comunidade Bom Samaritano",
      img: "",
      desc: "Comunidade Bom Samaritano",
      adress: "Lili Ferreira, 491",
      tel: "",
      x: "-32.06542720817277",
      y: "-52.17719846068531",
    },
    {
      title: "Atlântico Sul",
      img: "",
      desc: "Atlântico Sul",
      adress: "Rua Do Quartel, 1879",
      tel: "",
      x: "-32.202625220624476",
      y: "-52.17851083677375",
    },
    {
      title: "Amor em ação",
      img: "https://drive.google.com/uc?id=1nQSj8dEyutLR89XYNXPwvTPmKkOf1wBz",
      desc: "Foto do Amor em ação",
      adress: "Avenida João César Oliveira, 162",
      tel: "",
      x: "-32.101513846342144",
      y: "-52.17255101650889",
    },
    {
      title: "Renascer do Espírito",
      img: "https://drive.google.com/uc?id=1sdls5YThm0H54c4FjfJpP4EuNLP2T-L_",
      desc: "Foto da Casa Misericórdia com Renascer do Espírito",
      adress: "R. Tiradentes, 127",
      tel: "(53) 2125-9700",
      x: "-32.0397829268112",
      y: "-52.10720403185119",
    },
    {
      title: "Mansão da Paz",
      img: "https://drive.google.com/uc?id=1vu3y42qKk1PjBsPWt94091t3j16Wjtfi",
      desc: "Creche e Casa da Criança Mansão da Paz",
      adress: "Almirante Barroso, 365",
      tel: "(53) 3231-1030",
      x: "-32.03793900098451",
      y: "-52.08711228767595",
    },
    {
      title: "APAE - Associação de Pais e Amigos dos Excepcionais",
      img: "https://drive.google.com/uc?id=1yEXXVPKLV_dsie_l0MRaLNemh4B_TKr2",
      desc: "Foto da APAE",
      adress: " R. Duque de Caxias, 327",
      tel: "(53) 3234-4800",
      x: "-32.03475450351655",
      y: "-52.09703370301632",
    },
    {
      title: "Coração de Maria",
      img: "https://drive.google.com/uc?id=1g1YOhap9Zy5xSvNHKF3rRQr_-GrnZdp6",
      desc: "Foto do Educandario Coração de Maria",
      adress: "AV. Presidente Vargas, 681",
      tel: "(53) 3232-1081",
      x: "-32.05069564489409",
      y: "-52.11769879268209",
    },
    {
      title: "Projeto Maná",
      img: "",
      desc: "",
      adress: "Rua H - Vila Maria dos Anjos",
      tel: "",
      x: "-32.05188548004465",
      y: "-52.14856511835585",
    },
    {
      title: "AMAR Associação de Pais e Amigos dos Autistas de Rio Grande",
      img: "https://drive.google.com/uc?id=1HkuVXHxI4vpLs_GkQGVoKlR14MU-arht",
      desc: "Foto da Associação de Pais e Amigos dos Autistas de Rio Grande AMAR",
      adress: "R. Jockey Clube, 155 - loja 25",
      tel: "(53) 3233-1294",
      x: "-32.05188548004465",
      y: "-52.14856511835585",
    },
  ];

  return (
    <>
      <HeaderOne></HeaderOne>
      <div className="pagpont">
        <p className="meet">
          Veja quem são as entidades
          <br />
          beneficiadas pelo BARG
        </p>

        <div className="container">
          <div className="map2">
            <MapContainer
              center={[-32.03697485599422, -52.10943932754649]}
              zoom={15}
              scrollWheelZoom={true}
              className="MapContainer2"
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {pontos.map((ponto) => {
                return (
                  <>
                    <Marker position={[ponto.x, ponto.y]} icon={redIcon}>
                      <Popup>
                        <img
                          className="adress"
                          src={ponto.img}
                          alt={ponto.desc}
                          style={{
                            display: "flex",
                            width: "80px",
                            height: "80px ",
                          }}
                        />
                        {ponto.title}
                        <br />
                        {ponto.adress}
                        <br />
                        {ponto.tel}
                      </Popup>
                    </Marker>
                  </>
                );
              })}
            </MapContainer>
            <br></br>
          </div>

          <div className="before-ap" style={{ display: "flex" }}>
            <p style={{ fontSize: "1.5em" }}>
              Clique em algum ponto no mapa para ver suas refeições e
              periodicidade
            </p>
          </div>
          <div className="centralizar">
            <table className="table-dados">
              <tr>
                <th>Refeições</th>
                <th>Periodicidade</th>
              </tr>
              <tr>
                <td>{refeicoes}</td>
                <td>{perio}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pontos;
