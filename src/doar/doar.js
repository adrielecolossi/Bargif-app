import "./doar.css";
import { SiPagseguro, SiPaypal, SiGooglemaps } from "react-icons/si";
import { RiBankCardFill, RiBankFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

function Doar() {
  window.scrollTo(0, 0);

  return (
    <div className="donation_pag">
      <div className="table-d">
        <p className="meet">
          Quer fazer sua doação? Escolha uma das opções abaixo:
        </p>
        <table className="donation-table">
          <thead>
            <th className="donation-title-left"> Em </th>
            <th className="donation-title-right"> dinheiro: </th>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <SiPagseguro></SiPagseguro> Pagseguro:{" "}
              </td>
              <td> !adicionar link pagseguro! </td>
            </tr>
            <tr>
              <td>
                {" "}
                <SiPaypal></SiPaypal> PayPal:{" "}
              </td>
              <td> !adicionar link paypal! </td>
            </tr>
            <tr>
              <td>
                {" "}
                <RiBankFill></RiBankFill> Depósito em Conta:{" "}
              </td>
              <td>
                Agência 26948 <br /> Conta 1154133 <br /> CNPJ 10932667/001-86{" "}
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <RiBankCardFill></RiBankCardFill> Pix:{" "}
              </td>
              <td> 10932667/001-86 </td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />

        <table className="donation-table">
          <thead className="thead-food">
            <th className="donation-title-left"> Doe </th>{" "}
            {/* doe dinheiro é o slogan deles*/}
            <th className="donation-title-right"> alimentos: </th>
          </thead>
          <tbody>
            <tr className="tr-entrega">
              <td>
                {" "}
                <SiGooglemaps></SiGooglemaps> Doações de Alimentos{" "}
              </td>
              <td>
                {" "}
                Avenida Pelotas, 147 <br /> Agende sua doação pelo telefone: 
              </td>
            </tr>
            <tr className="tr-ligacao">
              <td>
                {" "}
                <FiPhoneCall></FiPhoneCall>&nbsp; Ligue{" "}
              </td>
              <td>
                {" "}
                <a href="tel:99189-0535" className="link-table">
                  (53) 99189-0535
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <p className="warning">
        Sempre ligue para o banco de alimentos para confirmar sua doação!
      </p>
    </div>
  );
}

export default Doar;
