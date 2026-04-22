
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import AddPet from "./AddPet";
import BookAppointment from "./BookAppointment";
import ViewAppointments from "./ViewAppointments";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      <h1>PawfectCare 🐶🐾</h1>

      {/* Navigation Buttons */}
      <button onClick={() => setPage("login")}>Login 🔐</button>
      <button onClick={() => setPage("register")}>Register 📝</button>
      <button onClick={() => setPage("addpet")}>Add Pet 🐕</button>
      <button onClick={() => setPage("book")}>Book Appointment 📅</button>
      <button onClick={() => setPage("view")}>View Appointments 📋</button>

      {/* Logout */}
      <button
        onClick={() => {
          localStorage.clear();
          setPage("login");
        }}
      >
        Logout 🚪
      </button>

      {/* Page Rendering */}
      {page === "login" && <Login />}
      {page === "register" && <Register />}
      {page === "addpet" && <AddPet />}
      {page === "book" && <BookAppointment />}
      {page === "view" && <ViewAppointments />}
    </div>
  );
}

export default App;


