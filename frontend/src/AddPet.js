import { useState } from "react";

function AddPet() {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const handleAddPet = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const res = await fetch("http://localhost:5000/api/pets/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ownerId: user._id,
        petName,
        petType,
        breed,
        age
      })
    });

    const data = await res.json();
    console.log(data);

    alert("Pet added successfully");
  };

  return (
    <div>
      <h2>Add Pet 🐶</h2>

      <input placeholder="Pet Name" onChange={(e) => setPetName(e.target.value)} />
      <br /><br />

      <input placeholder="Pet Type" onChange={(e) => setPetType(e.target.value)} />
      <br /><br />

      <input placeholder="Breed" onChange={(e) => setBreed(e.target.value)} />
      <br /><br />

      <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <br /><br />

      <button onClick={handleAddPet}>Add Pet</button>
    </div>
  );
}

export default AddPet;