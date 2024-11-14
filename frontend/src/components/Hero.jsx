import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary border-2 shadow-custom-blue border-[#2D9CDB] rounded-lg px-6 md:px-10 lg:px-20">
      {/* .....left side elements.... */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw]">
        <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-xs font-light">
          <img className="w-20" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            Schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-lg text-sm m-auto md:m-0 hover:scale-105 transition-all
           duration-300"
          href="#speciality"
        >
          Book appointment
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ......right side elements........ */}

      <div className="md:w-1/2 relative ">
        <img
          className="w-full md:absolute bottom-0 h-auto "
          src={assets.hero}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
