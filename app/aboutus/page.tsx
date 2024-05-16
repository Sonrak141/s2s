/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, {useEffect, useContext, useState} from "react";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import AboutUsSection from "@/components/molecules/AboutUsSection/AbousUsSection";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/organisms/Footer/Footer";
import languageContext from "@/context/languageContext";

const page = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const {spanish} = useContext(languageContext)
    const [moreInfo, setMoreInfo] = useState<boolean>(false)
    return (
        <div className="max-w-[100%] overflow-hidden">
            <MobileNav/>
            <HeaderBar active={true}/>
            <div className=" relative h-[60vh]">
                <h2 className="absolute top-[80%]  left-5 md:left-10 text-white font-bold text-5xl md:text-6xl">
                    {spanish ? "Quienes Somos" : "Who We Are"}
                </h2>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[70vh] object-cover"
                >
                    <source
                        src="https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/Desert.mp4?alt=media&token=987f6d99-198c-4a48-88a0-745af3b9cb1f"
                        type="video/mp4"/>
                </video>
            </div>
            <div className="w-[90%] mx-auto mt-10" id="whoweare">
                <AboutUsSection/>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 md:flex-row mx-auto  md:mx-10 md:justify-around w-[90%] mb-20">
                <img
                    src="/Photography/WhoWeAre/flechaVision.png"
                    alt="south2southVision"
                    className="mx-auto w-[80%] bottom"
                    data-aos="fade-right"
                />
                <div id="vision" className=" ">
                    <div className="bg-white py-10 md:py-24">
                        <div className="">
                            <div data-aos="fade-right" className=" text-center">
                                <h2 className="md:mt-2 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl">
                                    {spanish ? "Visión" : "Vision"}
                                </h2>
                                <p className=" text-lg leading-8 text-[#161616] md:w-[70%] mx-auto">
                                    {spanish ? "Nuestro objetivo es que nuestras inversiones generen beneficios financieros duraderos y seamos líderes en el establecimiento de alianzas estratégicas para la transferencia de tecnología entre empresas, organizaciones y gobiernos. Esta labor es nuestra forma de contribuir al desarrollo socioeconómico de las naciones." : "We strive for our investments to deliver sustainable financial returns and to be pioneers in creating strategic partnerships for technology transfer among companies, organizations, and governments. By doing so, we will contribute to the socio-economic development of nations."}

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mission" className="mb-20">
                    <div className="bg-white  py-10 md:py-0">
                        <div className="mx-auto">
                            <div data-aos="fade-left" className="mx-auto  text-center">
                                <h2 className=" text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl">
                                    {spanish ? "Misión" : "Mission"}
                                </h2>
                                <p className="  text-lg leading-8 text-[#161616] md:w-[80%] mx-auto">
                                    {spanish ? "En South2South International Holding, nuestra misión es construir puentes que superen las fronteras. Buscamos desarrollar e implementar asociaciones transsectoriales robustas que beneficien tanto a nuestros accionistas como a las sociedades en las regiones donde operamos." : "At South2South International Holding, we are committed to building bridges that transcend borders. Our mission is to cultivate and implement robust, cross-sector partnerships that not only yield dividends for our shareholders but also contribute to the flourishing of societies in the regions where we operate."}

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    data-aos="fade-left"
                    src="/Photography/WhoWeAre/flechaMission.png"
                    alt="south2southVision"
                    className="mx-auto w-[80%] md:inline"
                />
            </div>
            <div className="w-[90%] mx-auto mt-10 mb-10" id="leadership">
                <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
                    <div data-aos='fade-right' className='lg:pr-8 lg:pt-4'>
                        <div className=' md:mt-20'>

                            <h2 className='mt-2 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl'>
                                {spanish ? "Liderazgo" : "Leadership"}
                            </h2>
                            <h4 className='mt-2 text-2xl font-bold tracking-tight text-[#940000]'>Ahmed Tarek
                                Khalil
                            </h4>
                            <h4 className='mt-2 mb-4 text-xl font-bold tracking-tight '>Executive Chairman
                            </h4>
                            <p className="  text-lg leading-8 text-[#161616]  mx-auto">
                                {spanish ? "Ahmed Tarek Khalil es un empresario visionario y líder reconocido por sus" +
                                    " notables contribuciones al ámbito empresarial de la región MENA. Su pasión por" +
                                    " la disrupción y la innovación ha llevado a sus empresas a desafiar las normas y redefinir industrias con nuevos enfoques. Ahmed Tarek comenzó su carrera como emprendedor en su país natal, Egipto, fundando Industria Industrial Agencies Food y Greena, compañías dedicadas a la producción y exportación de alimentos, así como a la construcción y gestión de instalaciones industriales. Posteriormente, se aventuró en el sector logístico en Abu Dhabi, EAU, donde en 2012 fundó Allianz Logistics and Services. Esta compañía posee una de las flotas marítimas para servicios petroleros más grande de la región y la segunda más grande del mundo, con presencia en 22 países. Concretando satisfactoriamente en el 2022 la venta corporativa más significativa del sector."
                                    : `Ahmed Tarek Khalil is a visionary entrepreneur renowned for his significant
                                    contributions to the business landscape in the MENA region. His passion for disruption
                                    and innovation has propelled his companies to challenge norms and redefine industries
                                    with new approaches. Ahmed began his entrepreneurial journey in his homeland, Egypt, by founding Industrial
                                    Agencies Food and Greena, companies engaged in the production and export of food, as
                                    well as the construction and management of industrial facilities. He later ventured into
                                    the logistics sector in Abu Dhabi, UAE, where he established Allianz Logistics and
                                    Services in 2012. This company boasts one of the largest maritime fleets for oil
                                    services in the region and the second largest in the world, operating in 22 countries.
                                    In 2022, he successfully completed the most significant corporate sale in the sector.`}


                            </p>
                            <div onClick={() => setMoreInfo(!moreInfo)}
                                 className='cursor-pointer mt-4 mb-4 text-[#940000]'>{spanish ? "Más información" : "More info"}
                            </div>

                        </div>
                    </div>
                    <img
                        data-aos='fade-left'
                        src='/Photography/WhoWeAre/AhmedPicture.png'
                        alt='Ahmed Tarek Khalil'
                        className='max-w-xl mt-20 hidden sm:inline mx-auto'

                    />
                </div>
                {moreInfo ? <p className="  text-lg leading-8 text-[#161616]  mx-auto">
                    {spanish ? `Ahmed ha creado un ecosistema integral en el que cada industria y servicio se complementan y fortalecen mutuamente. Como parte de esta estrategia, y sumado a su reciente participación como inversor en Shark Tank Egipto, ha realizado más de 60 adquisiciones estratégicas, incluyendo empresas como Arab Developers y KLS & Rowad Language Schools. Su enfoque holístico del emprendimiento demuestra su compromiso con utilizar el negocio como una fuerza para el bien social, beneficiando tanto a la economía como a la sociedad.

Actualmente, Ahmed Khalil está desarrollando su proyecto más desafiante en el que se ha trazado como objetivo revolucionar el servicio de salud en Egipto mediante el uso de tecnologías avanzadas. Su iniciativa busca mejorar la accesibilidad y la calidad de la atención para las clases media y media baja, con una inversión de aproximadamente 100 millones de dólares, busca impactar a más de 10 millones de personas y cuenta con la participación de expertos internacionales y reconocidos actores de la industria, subrayando su compromiso con la innovación y el progreso social.

Ahmed ve en economías emergentes, como Egipto o países latinoamericanos como Colombia, un lugar seguro para invertir y una gran incubadora de ideas con alto valor para la transformación social y cultural. Su objetivo es generar enlaces entre instituciones privadas y gubernamentales para impulsar la economía, las industrias creativas y el valor de las ideas y la propiedad intelectual como recursos clave para el desarrollo.
` : `
                    Ahmed has created a comprehensive ecosystem where each industry and service complement and
                    strengthen each other. As part of this strategy, and in addition to his recent role as an investor
                    on Shark Tank Egypt, he has made over 60 strategic acquisitions, including companies such as Arab
                    Developers and KLS & Rowad Language Schools. His holistic approach to entrepreneurship underlines
                    his commitment to using business as a force for social good, benefiting both the economy and
                    society.

                    Currently, Ahmed Khalil is developing his most challenging project yet, aiming to revolutionize
                    healthcare in Egypt through advanced technologies. His initiative seeks to enhance accessibility and
                    quality of care for the middle and lower-middle classes, with an investment of approximately $100
                    million. This project is expected to impact over 10 million people and includes the involvement of
                    international experts and renowned industry players, highlighting his commitment to innovation and
                    social progress.

                    Ahmed sees emerging economies, such as Egypt and Latin American countries like Colombia, as secure
                    places to invest and vibrant incubators of ideas with high potential for social and cultural
                    transformation. His goal is to forge links between private and governmental institutions to boost
                    the economy, creative industries, and the value of ideas and intellectual property as key resources
                    for development.`}


                </p> : ""}
            </div>

            {/* <div className='py-40' id='teammembers'>
        <TeamSection />
      </div> */}
            <Footer/>
        </div>
    );
};

export default page;
