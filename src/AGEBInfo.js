import React from "react";
import comercioIcon from "./img/i-comercio.webp";
import depIcon from "./img/i-dep.webp";
import eduIcon from "./img/i-edu.webp";
import guarIcon from "./img/i-guar.webp";
import infraIcon from "./img/i-infrasocial.webp";
import ppIcon from "./img/i-pp.webp";
import saludIcon from "./img/i-salud.webp";
import mercadoIcon from "./img/i-mercado.webp";
import comidaIcon from "./img/i-com.webp";
import pobIcon from "./img/i-p.webp";
import pobMaIcon from "./img/i-pm.webp";
import pobFeIcon from "./img/i-pf.webp";
import vivIcon from "./img/i-viv.webp";
import jefMaIcon from "./img/i-jm.webp";
import jefFeIcon from "./img/i-jf.webp";
import alumIcon from "./img/i-alum.webp";
import arbIcon from "./img/i-arb.webp";
import banqIcon from "./img/i-banq.webp";
import dreIcon from "./img/i-dre.webp";
import recIcon from "./img/i-rec.webp";

function AGEBInfo({ ageb, neighborhood }) {
  if (!ageb || !neighborhood) {
    return <div>No neighborhood or AGEB information available.</div>;
  }

  return (
    <div className="ageb-container">
      <div className="ageb-info">
        <div className="name">
          <h4>{neighborhood.display_name}</h4>
          <div className="name-info">
            <p>CVEGEO: {ageb.properties.CVEGEO}</p>
            <p>
              Se conforma por{" "}
              <span className="num-manzanas">{ageb.properties.manzanas}</span>{" "}
              manzanas
            </p>
          </div>
        </div>

        <div className="cols">
          <div className="servicios s1">
            <p>
              <img className="icon-ser" src={saludIcon} alt="Salud" />
              <span>
                Centros Salud:{" "}
                <span className="number">{ageb.properties.salud}</span>
              </span>
            </p>

            <p>
              <img className="icon-ser" src={eduIcon} alt="Educación" />
              <span>
                Centros Educativos:{" "}
                <span className="number">{ageb.properties.educacion}</span>
              </span>
            </p>

            <p>
              <img className="icon-ser" src={depIcon} alt="Deportivos" />{" "}
              <span>
                Centros Deportivos:{" "}
                <span className="number">{ageb.properties.deportivos}</span>
              </span>
            </p>

            <p>
              <img
                className="icon-ser"
                src={infraIcon}
                alt="Infraestructura Social"
              />{" "}
              <span>
                Infraestructura Social:{" "}
                <span className="number">{ageb.properties.infrasocial}</span>
              </span>
            </p>

            <p>
              <img className="icon-ser" src={ppIcon} alt="Plazas Públicas" />{" "}
              <span>
                Plazas Públicas:{" "}
                <span className="number">{ageb.properties.plazasp}</span>
              </span>
            </p>

            <p>
              <img className="icon-ser" src={guarIcon} alt="Guarderías" />{" "}
              <span>
                Guarderías:{" "}
                <span className="number">{ageb.properties.guarderias}</span>
              </span>
            </p>

            <p>
              <img className="icon-ser" src={mercadoIcon} alt="Mercados" />{" "}
              <span>
                Mercados:{" "}
                <span className="number">{ageb.properties.mercados}</span>
              </span>
            </p>
          </div>

          <div className="servicios s2">
            <span className="comercios">Comercios:</span>

            <p>
              <img className="icon-ser" src={comercioIcon} alt="Abarrotes" />{" "}
              <span>
                Abarrotes:{" "}
                <span className="number">{ageb.properties.com_abarrotes}</span>
              </span>
            </p>

            <p>
              <img className="icon-ser" src={comidaIcon} alt="Comida" />{" "}
              <span>
                Comida:{" "}
                <span className="number">{ageb.properties.com_comidas}</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="right-info">
        <div className="population-info">
          <h4 className="name">Población</h4>
          <div className="poblacion">
            <p>
              <img className="icon-pob" src={pobIcon} alt="Población" />
              <span>
                Total: <span className="number">{ageb.properties.POBTOT}</span>
              </span>
            </p>
            <p>
              <img
                className="icon-pob"
                src={pobFeIcon}
                alt="Población Femenina"
              />
              <span className="number">{ageb.properties.POBFEM}</span>
            </p>
            <p>
              <img
                className="icon-pob"
                src={pobMaIcon}
                alt="Población Masculina"
              />
              <span className="number">{ageb.properties.POBMAS}</span>
            </p>
          </div>
          <div className="viviendas">
            <p>
              <img className="icon-viv" src={vivIcon} alt="Viviendas" />
              <span>
                Total de Viviendas:{" "}
                <span className="number">{ageb.properties.VIVTOT}</span>
              </span>
            </p>
            <p>
              <img
                className="icon-viv"
                src={jefFeIcon}
                alt="Jefe de Familia Femenino"
              />
              <span>
                Jefe de familia femenino:{" "}
                <span className="number">{ageb.properties.HOGJEF_F}</span>
              </span>
            </p>
            <p>
              <img
                className="icon-viv"
                src={jefMaIcon}
                alt="Jefe de Familia Masculino Icon"
              />
              <span>
                Jefe de familia masculino:{" "}
                <span className="number">{ageb.properties.HOGJEF_M}</span>
              </span>
            </p>
          </div>
        </div>

        <div className="infra-info">
          <h4 className="name">
            Manzanas con infraestructura pública en los cuatro frentes
          </h4>
          <div className="infraestructura">
            <p>
              <img
                className="infra-icon"
                src={alumIcon}
                alt="Alumbrado público"
              />
              <span>
                Alumbrado público:{" "}
                <span className="number">{ageb.properties.ALUMPUB}</span>
              </span>
            </p>
            <p>
              <img className="infra-icon" src={dreIcon} alt="Drenaje" />
              <span>
                Drenaje urbano:{" "}
                <span className="number">{ageb.properties.DRENAJEP}</span>
              </span>
            </p>
            <p>
              <img className="infra-icon" src={recIcon} alt="recubrimiento" />
              <span>
                Recubrimiento:{" "}
                <span className="number">{ageb.properties.RECUCALL}</span>
              </span>
            </p>
            <p>
              <img className="infra-icon" src={banqIcon} alt="Banqueta" />
              <span>
                Banqueta:{" "}
                <span className="number">{ageb.properties.BANQUETA}</span>
              </span>
            </p>
            <p>
              <img className="infra-icon" src={arbIcon} alt="Árboles" />
              <span>
                Árboles:{" "}
                <span className="number">{ageb.properties.ARBOLES}</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="other-info">
        <h4 className="name">Other info goes here...</h4>
      </div>
    </div>
  );
}

export default AGEBInfo;
