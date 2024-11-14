import React, { useEffect, useState } from "react";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch the appointment data from localStorage
    const storedAppointments = JSON.parse(
      localStorage.getItem("myAppointments")
    );

    if (storedAppointments) {
      // Display the last 3 appointments (or fewer if there are less than 3)
      setAppointments(storedAppointments);
    }
  }, []);

  let currencySymbol = "INR";
  return (
    <div className="">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My appointments
      </p>
      <div className="">
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            >
              <div>
                <img
                  className="w-32 bg-primary border border-[#2D9CDB] rounded"
                  src={appointment.doctor.image}
                  alt={appointment.doctor.name}
                />
              </div>
              <div className="flex-1 text-sm items-center justify-center mt-2 text-zinc-600">
                <p className="text-neutral-800 text-lg font-semibold">
                  {appointment.doctor.name}
                </p>
                <p className="text-sm">
                  {appointment.doctor.speciality} ({appointment.doctor.degree})
                </p>
                <p className="text-sm">
                  <strong>Experience:</strong> {appointment.doctor.experience}
                </p>
                <p className="text-sm">
                  <strong>Appointment Fee : </strong>
                  {currencySymbol} {appointment.doctor.fees}
                </p>
                <p className="text-sm">
                  <strong>Date & Time :</strong> {appointment.appointmentDate} |{" "}
                  {appointment.appointmentTime}
                </p>
              </div>
              <div></div>
              <div className="flex flex-col gap-2 justify-end mt-4">
                <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
                  Pay Online
                </button>
                <button className="text-sm border-b text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
                  Cancel appointment
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No appointments booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointment;
