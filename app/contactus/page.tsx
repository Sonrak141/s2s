import React from "react";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import ContactForm from "@/components/molecules/ContactForm/ContactForm";
import Footer from "@/components/organisms/Footer/Footer";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";

function page() {
  return (
    <div>
      <MobileNav />
      <HeaderBar active={true} />
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div
          className='md:h-[130vh] h-[80vh] bg-cover bg-no-repeat flex items-end text-white font-bold relative'
          style={{
            backgroundImage: 'url("/abuBuilding.jpg")',
            fontSize: "40px",
          }}
        >
          <h2 className='absolute top-[32rem] md:top-[40rem] left-10 text-white font-bold text-6xl'>
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
