import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center gap-4 sm:py-16 pb-0 pt-16  text-gray-800"
        id="speciality"
      >
        <h1 className="text-3xl font-medium">Find by Speciality </h1>
        <p className="sm:w-1/2 text-center text-sm">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p> 
        <div
          className="grid  pt-5 
                lg:grid-cols-6 sm:grid-cols-2 grid-cols-2"
        >
          {specialityData.map((item, index) => (
            <Link
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center p-4 text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
              key={index}
              to={`/doctors/${item.speciality}`}
            >
              <img className="w-24  mb-2" src={item.image} alt="" />
              <p>{item.speciality}</p>
            </Link>
          ))}
        </div>

        {/* <div className="flex sm:flex-row flex-col sm:justify-center gap-6 pt-5 w-full overflow-scroll">
          {specialityData.map((item, index) => (
            <Link
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 sm:flex-wrap "
              key={index}
              to={`/doctors/${item.speciality}`}
            >
              <img className="  w-16 sm:w-24 mb-2" src={item.image} alt="" />
              <p className="">{item.speciality}</p>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Speciality;