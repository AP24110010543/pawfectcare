import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      // ✅ Debug (remove later)
      console.log("Sending:", { name, email, password });

      // ✅ Check empty fields
      if (!name || !email || !password) {
        alert("Please fill all fields ❌");
        return;
      }

      const res = await fetch(
        "https://pawfectcare-oojj.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            role: "owner",
          }),
        }
      );

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
        alert("Registered successfully 🎉");
      } else {
        // ⚠️ FIX: your backend sends "msg", not "message"
        alert(data.msg || "Registration failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <div>
      <h2>Register 📝</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;