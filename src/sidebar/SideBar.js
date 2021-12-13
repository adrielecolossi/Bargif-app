import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { IconContext } from "react-icons";

import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
   <>

    <div className="showSide">
      <IconContext.Provider value={{ color: "white" }}>
        <Link to="#">
          <AiOutlineBars onClick={showSidebar} />
        </Link>

        <nav className={sidebar ? "nav-menu on" : "nav-menu"}>
          <ul onClick={showSidebar}>
            <li className="menu-list">
              <Link to="#">
                <AiOutlineClose />
              </Link>
            </li>

            <li className="menu-list">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>

            <li className="menu-list">
              <Link
                to="/campanhas"
                style={{ textDecoration: "none", color: "white" }}
              >
                Campanhas
              </Link>
            </li>

            <li className="menu-list">
              <Link
                to="/pontos"
                style={{ textDecoration: "none", color: "white" }}
              >
                Distribuição
              </Link>
            </li>

            <li className="menu-list">
              <Link
                to="/parcerias"
                style={{ textDecoration: "none", color: "white" }}
              >
                Parcerias
              </Link>
            </li>

            <li className="menu-list">
              <Link
                to="/perguntas"
                style={{ textDecoration: "none", color: "white" }}
              >
                Perguntas
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
    </>
  );
}

export default Sidebar;
