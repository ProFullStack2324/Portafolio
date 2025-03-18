import React from "react";

const HabitatExperience = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center">
      <img 
        src="/images/habitat-experience.jpg" 
        alt="Habitat Experience" 
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold">Habitat Experience</h2>
      <p className="text-gray-600 text-center">
        Trabajo en conservación y restauración ecológica con comunidades rurales.
      </p>
    </div>
  );
};

export default HabitatExperience;
