"use client";
import {
    GlobeAmericasIcon,
    UserIcon,
    UserGroupIcon,
    CogIcon,
    ArrowsRightLeftIcon,
    BoltIcon,
} from "@heroicons/react/20/solid";
import {useEffect, useContext} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import languageContext from "@/context/languageContext";

const features = [
    {
        name: "Global Perspective:",
        description:
            "Emphasizing a global outlook and understanding of diverse cultures and markets where we operate.",
        icon: GlobeAmericasIcon,
    },

    {
        name: "Partnership:",
        description:
            "Fostering strong collaborative relationships with businesses and stakeholders.",
        icon: UserGroupIcon,
    },
    {
        name: "Diversity and Inclusivity:",
        description:
            "Valuing and respecting the diverse backgrounds, perspectives, and talents of employees and partners.",
        icon: ArrowsRightLeftIcon,
    },
    {
        name: "Integrity:",
        description:
            "Commitment to honesty, transparency, and ethical conduct in all business dealings.",
        icon: UserIcon,
    },
    {
        name: "Innovation:",
        description:
            "Encouraging a culture of creativity and innovation to address unique challenges and opportunities across different industries.",
        icon: CogIcon,
    },

    {
        name: "Sustainability:",
        description:
            "Promoting environmentally and socially responsible business practices.",
        icon: BoltIcon,
    },
];
const featuresSpanish = [
    {
        name: "Perspectiva Global:",
        description:
            "Fomentamos una visión integral y un profundo entendimiento de las diversas culturas y mercados donde operamos.",
        icon: GlobeAmericasIcon,
    },

    {
        name: "Colaboración:",
        description:
            "Potenciamos relaciones colaborativas robustas con empresas y partes interesadas.",
        icon: UserGroupIcon,
    },
    {
        name: "Diversidad e Inclusión:",
        description:
            "Respetamos y valoramos los diferentes orígenes, perspectivas y habilidades de nuestros empleados y socios.",
        icon: ArrowsRightLeftIcon,
    },
    {
        name: "Integridad:",
        description:
            "Mantenemos un firme compromiso con la honestidad, transparencia y ética en todas nuestras transacciones.",
        icon: UserIcon,
    },
    {
        name: "Innovación:",
        description:
            "Incentivamos una cultura de creatividad e innovación para enfrentar desafíos únicos y aprovechar oportunidades en diversas industrias.",
        icon: CogIcon,
    },

    {
        name: "Sostenibilidad:",
        description:
            "Promovemos prácticas empresariales que respeten el medio ambiente y la sociedad.",
        icon: BoltIcon,
    },
]

export default function AboutUsSection() {
    useEffect(() => {
        AOS.init();
    }, []);
    const {spanish} = useContext(languageContext)

    return (
        <div className='overflow-hidden bg-white py-14 sm:py-32 md:-mt-20 '>
            <div className='mx-auto'>
                <div className='mx-auto  grid  grid-cols-1  md:grid-cols-2'>
                    <div data-aos='fade-right' className='lg:pr-8 lg:pt-4'>
                        <div className=' md:mt-20'>
                            <h2 className='text-base font-semibold leading-7 text-[#5d3f3f]'></h2>
                            <h2 className='mt-2 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl'>
                                {spanish ? "Quiénes Somos " : "About Us"}
                            </h2>
                            <p className='mt-6 text-lg leading-8 text-[#161616]'>
                                {spanish ?
                                    "Con una visión global, operamos desde dos sedes principales. Abu Dhabi es el corazón de nuestras actividades en el Medio Oriente, mientras que desde El Cairo lideramos nuestras iniciativas de negocio en África. Nos apoyamos en el respaldo de personas de alto patrimonio neto, lo que nos posibilita establecer alianzas estratégicas clave con gobiernos locales, empresas y aliados. Nuestro compromiso es fortalecer el valor para nuestros accionistas de manera sostenible y aportar al desarrollo socioeconómico de las regiones en las que operamos." :
                                    "With a global perspective, we operate with two main headquarters; Abu Dhabi is the centre for our Middle East operations, while Cairo directs our business endeavors in Africa. Our foundation is built upon the support of High-Net-Worth Individuals, enabling us to craft strategic alliances with local governments, businesses, and partners. We are committed to driving sustainable shareholder value and contributing to the socio-economic progress of the regions we serve."}
                            </p>
                        </div>
                    </div>
                    <img
                        data-aos='fade-left'
                        src='/Photography/WhoWeAre/connect.jpeg'
                        alt='South2South International Holding.'
                        className='max-w-2xl mt-10 ml-4 lg:-ml-0 hidden sm:inline'
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
            <h2 className='mt-20 ml-16 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl'>
                {spanish ? "Nuestros Valores " : "Our Values"}
            </h2>
            <div className='flex justify-center items-center mt-8 md:mt-20'>
                <dl className=' max-w-xl space-y-8 text-base leading-7 text-[#161616] lg:max-w-none'>
                    <div className='grid grid-cols-1 md:grid-cols-2 first-letter max-w-5xl gap-5'>
                        {spanish ? featuresSpanish.map((feature) => (
                            <div key={feature.name} className='relative pl-9'>
                                <dt className='inline  text-gray-900'>
                                    <feature.icon
                                        className='absolute left-1 top-1 h-5 w-5 text-[#940000]'
                                        aria-hidden='true'
                                    />
                                    <dd className='text-lg'>{feature.name}</dd>
                                </dt>
                                {" "}
                                <dd className='inline text-lg '>{feature.description}</dd>
                            </div>
                        )) : features.map((feature) => (
                            <div key={feature.name} className='relative pl-9'>
                                <dt className='inline  text-gray-900'>
                                    <feature.icon
                                        className='absolute left-1 top-1 h-5 w-5 text-[#940000]'
                                        aria-hidden='true'
                                    />
                                    <dd className='text-lg'>{feature.name}</dd>
                                </dt>
                                {" "}
                                <dd className='inline text-lg '>{feature.description}</dd>
                            </div>
                        ))}
                    </div>
                </dl>
            </div>
        </div>
    );
}
