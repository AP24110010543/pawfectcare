import { useState } from "react";

function AddPet() {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const handleAddPet = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first");
        return;
      }

      const res = await fetch(
        "https://pawfectcare-oojj.onrender.com/api/pets",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ownerId: user._id,
            petName,
            petType,
            breed,
            age,
          }),
        }
      );

      // ✅ Check response first
      if (!res.ok) {
        const text = await res.text();
        console.log("Error response:", text);
        alert("Failed to add pet");
        return;
      }

      // ✅ Safe JSON parsing
      let data;
      try {
        data = await res.json();
      } catch {
        console.log("No JSON response");
      }

      console.log(data);
      alert("Pet added successfully ✅");

    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div>
      <h2>Add Pet 🐶</h2>

      <input
        placeholder="Pet Name"
        onChange={(e) => setPetName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Pet Type"
        onChange={(e) => setPetType(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Breed"
        onChange={(e) => setBreed(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAddPet}>Add Pet</button>
    </div>
  );
}

export default AddPet;