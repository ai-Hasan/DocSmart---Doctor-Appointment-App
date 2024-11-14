import React from "react";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-16 text-sm">
        {/* left side */}
        <div>
          <img className="h-20" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 text-justify">
            Stay ahead in today’s digital age with DocSmart! Our innovative app
            connects you with 100+ trusted doctors, allowing you to book
            appointments easily and securely from the comfort of your home or on
            the go. Join the growing community of users taking control of their
            health with DocSmart—where convenience, security, and quality care
            meet.
          </p>
        </div>

        {/* center */}

        <div>
          <p className="text-xl font-medium sm:mt-12 mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>All Doctors</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* right side */}
        <div>
          <p className="text-xl font-medium sm:mt-12 mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+123 456 789</li>
            <li>help@example.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright &copy; 2024 DocSmart. All rights reserved
        </p>
      </div>
    </div>
  );
};
