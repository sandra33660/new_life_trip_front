import React, { Fragment } from "react";
import HeaderOtherPage from "../../HeaderotherPages";

export default function Voyage() {
  return (
    <div>
      <HeaderOtherPage />

      <section className="sectionVoyage">
        <div className="content">
          <h2 clasname="h2voyage">Les tendances</h2>
          <div className="cards">
            <div className="card-box">bordeaux</div> {/* title + photo */}
            <div className="card-box">paris</div>
            <div className="card-box">toulouse</div>
          </div>
          <div className="cards">
            <div className="card-box">provence-alpes-cotes-d'azur</div>
            <div className="card-box">lyon</div>
            <div className="card-box">nice</div>
          </div>
          <div className="cards">
            <div className="card-box">marseille</div>
            <div className="card-box">pyrénées</div>
            <div className="card-box">starsbourg</div>
          </div>
          <h2 clasname="h2voyage">Destinations</h2>
          <div className="cards">
            <div className="card-box">Montagne</div>
            <div className="card-box">Plage</div>
            <div className="card-box">Vallée</div>
          </div>
          <div className="cards">
            <div className="card-box">Insolite</div>
            <div className="card-box">Festif</div>
            <div className="card-box">Sensation</div>
          </div>
          <div className="cards">
            <div className="card-box">parc d'attraction</div>
            <div className="card-box">pyrénées</div>
            <div className="card-box">week end dans les arbres</div>
          </div>
          <h2 clasname="h2voyage">Les activités</h2>
          <div className="cards">
            <div className="card-box">saut en parachute</div>
            <div className="card-box">tyrolienne</div>
            <div className="card-box">surf</div>
          </div>
          <div className="cards">
            <div className="card-box">bateau</div>
            <div className="card-box">plongée</div>
            <div className="card-box">piraterie</div>
          </div>
          <div className="cards">
            <div className="card-box">bapteme de l'air</div>
            <div className="card-box">sky surf</div>
            <div className="card-box">parapente</div>
          </div>
        </div>
      </section>
    </div>
  );
}
