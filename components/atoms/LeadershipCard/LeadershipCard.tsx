import React, { useState } from "react";

function LeadershipCard({ name, role, imageSrc, description }: any) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <img src={imageSrc} alt={`${name} - ${role}`} className='w-full h-auto' />
      <div className='p-4'>
        <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>
        <p className='text-sm text-gray-600'>{role}</p>
        <div className='mt-4 relative'>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
            onClick={toggleDescription}
          >
            {isDescriptionVisible ? "Hide Description" : "Show Description"}
          </button>
          {isDescriptionVisible && (
            <div className='bg-gray-100 p-4 mt-2 rounded-lg'>
              <p className='text-gray-700'>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeadershipCard;
