import React from "react";
import "./App.css";
import Parcerias from "./parcerias/parcerias.js";
import Home from "./home/home.js";
import Pontos from "./pontos/pontos.js";
import Campanhas from "./campanhas/campanhas.js";
import Pacto from "./pactopelavida/pactopelavida.js";
import Noticias from "./galeria/noticias.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./footer/footer.js";
import Perguntas from "./perguntas/perguntas.js";
import Doar from "./doar/doar.js";
import Beneficiario from "./beneficiario/beneficiario.js";
import FormCampanhas from "./formcampanhas/formcampanhas.js";
import OnlyNoticia from "./galeria/onlynoticia.js";
import Login from "./login/login.js";
import OnlyCampanha from "./campanhas/onlycampanha.js";
import Logged from "./logged/logged";

//import HeaderOne from "./header/header.js";
//<HeaderOne></HeaderOne>
function App() {
  return (
    <div id="pag">
      <Router>
        <Switch>
          <Route path="/parcerias" component={Parcerias}></Route>
          <Route path="/onlynoticia" component={OnlyNoticia}></Route>
          <Route path="/beneficiario" component={Beneficiario}></Route>
          <Route path="/noticias" component={Noticias}></Route>
          <Route path="/doar" component={Doar}></Route>
          <Route path="/campanhas" component={Campanhas}></Route>
          <Route path="/onlycampanha" component={OnlyCampanha}></Route>
          <Route path="/pactopelavida" component={Pacto}></Route>
          <Route path="/pontos" component={Pontos}></Route>
          <Route path="/perguntas" component={Perguntas}></Route>
          <Route path="/formcampanhas" component={FormCampanhas}></Route>
    
       
          <Route path="/login" component={Login}></Route>
          <Route path="/logged" component={Logged}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App