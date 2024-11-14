import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center sm:mx-16">
        <p className=" flex  text-2xl mb-8 text-gray-900 ">About Us</p>
        <div className="flex sm:flex-row flex-col items-center gap-6 ">
          <div>
            <img
              className="w-[800px] flex flex-row "
              src={assets.about_image}
              alt=""
            />
          </div>
          <div className="flex flex-col text-sm font-light ">
            <div className="flex gap-4 flex-col text-justify">
              <p>
                Welcome to DocSmart, your trusted partner in managing healthcare
                needs conveniently and efficiently. At DocSmart, we understand
                the challenges individuals face when scheduling doctor
                appointments and managing health records.
              </p>
              <p>
                We are committed to excellence in healthcare technology,
                continuously enhancing our platform by integrating the latest
                advancements to improve user experience and deliver superior
                service. Whether you're booking your first appointment or
                managing ongoing care, DocSmart is here to support you every
                step of the way.,
              </p>
              <p className="font-medium text-lg">Our Vision</p>
              <p>
                At DocSmart, our vision is to create a seamless healthcare
                experience for every user. We aim to bridge the gap between
                patients and healthcare providers, making it easier for you to
                access the care you need when you need it.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-xl font-medium text-gray-900 mb-4">
            Why Choose Us
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-900 divide-y sm:divide-y-0 sm:divide-x divide-gray-900">
            <div className="p-4 ">
              <p className="font-semibold">Efficiency:</p>
              <p>
                Easily manage appointments with streamlined scheduling designed
                to fit seamlessly into your busy lifestyle.
              </p>
            </div>

            <div className="p-4">
              <p className="font-semibold">Convenience:</p>
              <p>
                Access a network of trusted healthcare professionals in your
                area with just a few clicks.
              </p>
            </div>

            <div className="p-4">
              <p className="font-semibold">Personalization:</p>
              <p>
                Receive tailored recommendations and reminders to help you stay
                proactive about your health.
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-center mt-8 ">
            <div className="text-sm">
              <p className="text-lg font-medium mb-2">Our Office </p>

              <p>123 Wellness Avenue,</p>
              <p>Suite 456,</p>
              <p>Healthy City, HC 78901</p>
              <p></p>
            </div>

            <p className="mt-2 text-sm">
              <span className="font-medium text-light">Tel : </span> +1 234 567
              8910 <br />
              <span className="font-medium text-light">Email : </span>{" "}
              help@example.com
            </p>

            <div>
              <p className="mt-4 text-md font-medium">Careers at DocSmart</p>
              <p className="text-xs">
                Learn more about our teams and job openings.
              </p>
              <button className="py-2 w-full items-start bg-primary border-2 border-[#d3d3d3] rounded-lg text-white text-sm mt-1">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
