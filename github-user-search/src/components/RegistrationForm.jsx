import { useState } from "react";

export default function RegistrationForm() {
  // form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("User Registered:", formData);

    // Here we would call an API (mock simulation)
    alert(`User ${formData.username} registered successfully!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow space-y-4"
    >
      <h2 className="text-xl font-bold">User Registration (Controlled)</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:opacity-90"
      >
        Register
      </button>
    </form>
  );
}
