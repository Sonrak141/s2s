import React from "react";
import HeaderBar from "../components/organisms/HeaderBar/HeaderBar";
import ContactForm from "../components/molecules/ContactForm/ContactForm";

function page() {
  return (
    <div>
      <HeaderBar active={false} />
      <div className="mt-20">
        <ContactForm />
      </div>
    </div>
  );
}

export default page;
("react");
