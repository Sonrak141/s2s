import React from "react";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import ContactForm from "@/components/molecules/ContactForm/ContactForm";
import Footer from "@/components/organisms/Footer/Footer";

const contentStyleTitle: React.CSSProperties = {
  height: "130vh",
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
      <div className='grid grid-cols-2'>
        <div style={contentStyleTitle}>
          <h2 className='absolute top-[40rem] left-10 text-white font-bold text-6xl'>
            Contact Us
          </h2>
        </div>
        <div className='mt-20'>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
("react");
