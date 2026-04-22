import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
function BookAppointment() {
  const [services, setServices] = useState([]);
  const [pets, setPets] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [petId, setPetId] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("https://pawfectcare-oojj.onrender.com/api/services")
      .then(res => res.json())
      .then(data => setServices(data));

    fetch("http://localhost:5000/api/pets")
      .then(res => res.json())
      .then(data => setPets(data));
  }, []);

  const handleBook = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Login first");
      return;
    }

    const res = await fetch("http://localhost:5000/api/appointments/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: user._id,
        petId,
        serviceId,
        appointmentDate: date
      })
    });

    const data = await res.json();
console.log(data);

if (res.ok) {
  alert("Appointment booked 🎉");

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
} else {
  alert(data.error);
}
  };

  return (
    <div>
      <h2>Book Appointment 📅</h2>

      <select onChange={(e) => setServiceId(e.target.value)}>
        <option>Select Service</option>
        {services.map(s => (
          <option key={s._id} value={s._id}>
            {s.serviceName}
          </option>
        ))}
      </select>

      <br /><br />

      <select onChange={(e) => setPetId(e.target.value)}>
        <option>Select Pet</option>
        {pets.map(p => (
          <option key={p._id} value={p._id}>
            {p.petName}
          </option>
        ))}
      </select>

      <br /><br />

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <button onClick={handleBook}>Book</button>
    </div>
  );
}

export default BookAppointment;