import React from "react";
import HeaderOtherPage from "../../HeaderotherPages";
import ContactForm from "../../Formulaire/index";
export default function Contact() {
  return (
    <div>
      <HeaderOtherPage />

      <div className="content">
        <ContactForm />
      </div>
    </div>
  );
}
