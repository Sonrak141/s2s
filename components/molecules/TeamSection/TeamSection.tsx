"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const people = [
  {
    name: "Angie Tafur",
    role: "Director and Co-founder ",
    description:
      "Angie Tafur is Director and Co-founder of South2South International Holding. She is a senior public official with a strong background in government administration, public policy formulation, international business, and community affairs.As the former Consul of the Colombian Embassy in Abu Dhabi, she managed a jurisdiction encompassing five Middle Eastern countries. In this role, she safeguarded the interests of Colombia and its citizens, providing invaluable legal and social advice.She holds a bachelor's degree in International Relations and Political Studies, and a Master's Degree in International Law and International Relations, with a specialisation in Defence Affairs.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    visible: true,
  },
  {
    name: "Ahmed Khalil",
    role: "Chairman and Co-founder ",
    description:
      "Ahmed Khalil stands as a distinguished entrepreneur and influential business figure in the dynamic Middle East and North Africa (MENA) region. With a proven track record of founding and successfully leading diverse projects across multiple industries, Ahmed has consistently demonstrated his commitment to innovation and excellence.Notably, he founded and spearheaded the growth of Allianz Middle East Ship Management LLC, an industry-leading contractor specializing in marine vessels, offshore logistics, and comprehensive petroleum services for the Oil & Gas and offshore construction sectors.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    visible: true,
  },
  {
    name: "H.E.  Obaid Alketbi",
    role: "Strategy Officer ",
    description:
      "Recognised in Emirati society as one of the great leaders for his contributions across various fields, H.E.  Obaid Alketbi has held distinguished positions in the military, diplomatic, and business sectors. Some of his notable roles include being Major General in the Armed Forces (retired), Deputy Commander-in-Chief of Abu Dhabi Police (retired), former Deputy Undersecretary, and Ambassador of the UAE to Australia.He has a strong academic foundation, with multiple degrees including a Ph.D. in fields such as Electronic Engineering, Business Administration, and National Resource Management Strategy.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    visible: true,
  },

  // More people...
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='bg-white'>
      <div
        data-aos='fade-down'
        className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'
      >
        <div className='max-w-2xl'>
          <h2 className='text-3xl font-bold tracking-tight text-[#FF0000] sm:text-4xl'>
            Leadership
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role='list'
          className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
        >
          {people.map((person) => (
            <li key={person.name}>
              <div
                data-aos='fade-down'
                className='flex items-center flex-col bg-[#fcfafa]  bg-opacity-50 p-6 rounded-lg shadow-md h-[32rem]'
              >
                <img
                  className='h-24 w-24 rounded-full'
                  src={person.imageUrl}
                  alt=''
                />
                <div>
                  <h3 className='text-base text-center font-semibold leading-7 tracking-tight text-gray-900'>
                    {person.name}
                  </h3>
                  <p className='text-sm font-semibold leading-6 text-[#FF0000] text-center'>
                    {person.role}
                  </p>
                  <p className=' text-xs md:text-sm text-justify mt-4'>
                    {person.visible ? person.description : ""}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
