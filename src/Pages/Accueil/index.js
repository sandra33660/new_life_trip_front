import React from "react";
import HeaderOtherPages from "../../HeaderotherPages/index";
import Sloggan from "../../Sloggan";
import Title from "../../Title";

export default function Accueil() {
  return (
    <main className="sectionAccueil">
      <HeaderOtherPages />
      <section>
        <Title />
        <Sloggan />
      </section>
    </main>
  );
}
