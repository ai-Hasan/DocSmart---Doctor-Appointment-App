import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import PopularDoctors from "../components/PopularDoctors";

const Doctors = () => {
  // Extract 'speciality' from the route parameters to filter doctors by speciality
  const { speciality } = useParams();

  // State to store filtered list of doctors
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  // Hook for navigation to a specific doctor's appointment page
  const navigate = useNavigate();

  // Access 'doctors' data from global context, containing all doctor records
  const { doctors } = useContext(AppContext);

  // Filter doctors by speciality whenever the 'doctors' data or 'speciality' parameter changes
  useEffect(() => {
    // Check if 'doctors' data is available before applying the filter
    if (doctors && doctors.length > 0) {
      applyFilter();
    }
  }, [doctors, speciality]);

  // Function to filter doctors based on the selected speciality
  const applyFilter = () => {
    if (speciality) {
      // If speciality is provided, filter doctors matching the speciality
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      // If no speciality, show all doctors
      setFilterDoc(doctors);
    }
  };

  return (
    <div>
      <p className="text-gray-700 text-xl font-medium  ">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 pt-5">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter
              ? "bg-primary text-white border border-[#1f70ab] font-medium"
              : ""
          }`}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 mt-5 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300  rounded-md transition-all cursor-pointer ${
              speciality === "General physician" && "active"
                ? "bg-[#73bcf0] text-white border border-[#1f70ab] font-medium"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded-md transition-all cursor-pointer ${
              speciality === "Gynecologist" && "active"
                ? "bg-[#73bcf0] text-white border border-[#1f70ab] font-medium"
                : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded-md transition-all cursor-pointer ${
              speciality === "Dermatologist" && "active"
                ? "bg-[#73bcf0] text-white border border-[#1f70ab] font-medium"
                : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded-md transition-all cursor-pointer ${
              speciality === "Pediatricians" && "active"
                ? "bg-[#73bcf0] text-white border border-[#1f70ab] font-medium"
                : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded-md transition-all cursor-pointer ${
              speciality === "Neurologist" && "active"
                ? "bg-[#73bcf0] text-white border border-[#1f70ab] font-medium"
                : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded-md transition-all cursor-pointer ${
              speciality === "Gastroenterologist" && "active"
                ? "bg-[#73bcf0] text-white border border-[#1f70ab] font-medium"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>

        <div className="w-full grid grid-cols-auto fap-y-6 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => item._id && navigate(`/appointment/${item._id}`)}
              className="border border-[#2D9CDB] shadow-custom-blue rounded-xl overflow-hidden cursor-pointer hover:translate-y-3 duration-500"
              key={index}
            >
              <img
                className="bg-green-50"
                src={item.image || ""}
                alt={item.name || "Doctor"}
              />

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p> Available </p>
                </div>

                <p className="text-gray-900 text-sm font-medium">
                  {item.name || "Doctor Name"}
                </p>

                <p className="text-gray-600 text-sm">
                  {item.speciality || "Speciality"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
