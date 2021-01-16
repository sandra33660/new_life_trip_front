import React from "react";
import Header from "../../Header/index";
import Sloggan from "../../Sloggan";

import Title from "../../Title";

export default function Accueil() {
  return (
    <main className="sectionAccueil">
      <Header />
      <section>
        <Title />

        <Sloggan />
      </section>
    </main>
  );
}
