import React from "react";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import ContactForm from "@/components/molecules/ContactForm/ContactForm";

const contentStyleTitle: React.CSSProperties = {
  height: "80vh",
  backgroundImage: 'url("/abuBuilding.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: "40px",
  display: "flex",
  alignItems: "end",
  color: "#fff",
  fontWeight: "bold",
};

function page() {
  return (
    <div>
      <HeaderBar active={true} />
      <div style={contentStyleTitle}>
        <h2 className="ml-20 mb-12">Contact Us</h2>
      </div>
      <div className="mt-20">
        <ContactForm />
      </div>
    </div>
  );
}

export default page;
("react");
