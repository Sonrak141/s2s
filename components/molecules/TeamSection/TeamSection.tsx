"use client";
import { SetStateAction, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LeadershipCard from "@/components/atoms/LeadershipCard/LeadershipCard";
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

const TeamMember = ({ name, imageSrc, onClick, isSelected }: any) => {
  const memberStyles = isSelected
    ? "bg-[#940000] text-white"
    : "hover:bg-gray-100";

  return (
    <div
      className={`flex items-center cursor-pointer rounded-lg p-2 ${memberStyles}`}
      onClick={onClick}
    >
      <div className='w-16 h-16 bg-gray-300 rounded-full overflow-hidden'>
        <img src={imageSrc} alt={`${name}`} className='w-full h-full' />
      </div>
      <div className='ml-4'>
        <p className={isSelected ? "font-semibold" : ""}>{name}</p>
      </div>
    </div>
  );
};

// TeamDescription component
const TeamDescription = ({ name, role, description }: any) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden p-4'>
      <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>
      <p className='text-sm text-gray-600'>{role}</p>
      <p className='text-gray-700 mt-4'>{description}</p>
    </div>
  );
};

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(people[0]);
  const handleMemberClick = (
    member: SetStateAction<{
      name: string;
      role: string;
      description: string;
      imageUrl: string;
      visible: boolean;
    }>
  ) => {
    setSelectedMember(member);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='bg-white flex'>
      <div
        data-aos='fade-down'
        className='mx-auto grid  gap-x-8 gap-y-20 px-6 lg:px-8'
      >
        <div className='max-w-2xl'>
          <h2 className='text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl'>
            Leadership
          </h2>
          <div className='mt-10 flex flex-col space-y-4'>
            {people.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                imageSrc={member.imageUrl}
                isSelected={selectedMember === member}
                onClick={() => handleMemberClick(member)}
              />
            ))}
          </div>
        </div>
        <div className='flex-1 ml-8 mt-[3.8rem] max-w-2xl'>
          <TeamDescription
            name={selectedMember.name}
            role={selectedMember.role}
            description={selectedMember.description}
          />
        </div>
        <ul
          role='list'
          className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
        >
          {/* {people.map((person) => (
            <li key={person.name}>
              <div data-aos='fade-down'>
                <LeadershipCard
                  name={person.name}
                  role={person.role}
                  imageSrc={person.imageUrl}
                  description={person.description}
                />
              </div>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
