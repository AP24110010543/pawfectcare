import { useEffect, useState } from "react";

function ViewAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);

  return (
    <div>
      <h2>Appointments 📅</h2>

      {appointments.map((a) => (
        <div key={a._id} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
          <p><b>User:</b> {a.userId?.name}</p>
          <p><b>Pet:</b> {a.petId?.petName}</p>
          <p><b>Service:</b> {a.serviceId?.serviceName}</p>
          <p><b>Date:</b> {a.appointmentDate}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewAppointments;