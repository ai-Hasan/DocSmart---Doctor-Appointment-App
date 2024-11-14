import React, { useContext } from "react";
import { AppContext } from "./AppContextProvider";

const DoctorList = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <h1>Doctors List</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            <img src={doctor.image} alt={doctor.name} />
            <h2>{doctor.name}</h2>
            <p>{doctor.speciality}</p>
            <p>{doctor.degree}</p>
            <p>{doctor.experience}</p>
            <p>{doctor.fees}</p>
            <p>{doctor.about}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
