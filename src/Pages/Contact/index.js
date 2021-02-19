import React from "react";
import HeaderOtherPage from "../../HeaderotherPages";
import ContactForm from "../../Formulaire/index";
export default function Contact() {
  return (
    <div>
      <HeaderOtherPage />

      <div className="content">
        <h2 clasname="h2voyage">Contact</h2>
        <div className="cards">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
