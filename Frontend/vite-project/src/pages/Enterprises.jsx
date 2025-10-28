import React, { useEffect, useState } from "react";
import axios from "axios";

function Enterprise() {
  const [enterprises, setEnterprises] = useState([]);
  const [formData, setFormData] = useState({ name: "", location: "", contactInfo: "" });

  useEffect(() => {
    fetchEnterprises();
  }, []);

  const fetchEnterprises = async () => {
    const res = await axios.get("http://localhost:5000/api/enterprises");
    setEnterprises(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/enterprises", formData);
    setFormData({ name: "", location: "", contactInfo: "" });
    fetchEnterprises();
  };

  return (
    <div>
      <h2>Enterprise Management</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Enterprise Name" onChange={handleChange} value={formData.name} />
        <input name="location" placeholder="Location" onChange={handleChange} value={formData.location} />
        <input name="contactInfo" placeholder="Contact Info" onChange={handleChange} value={formData.contactInfo} />
        <button type="submit">Add Enterprise</button>
      </form>

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Contact Info</th>
          </tr>
        </thead>
        <tbody>
          {enterprises.map((ent) => (
            <tr key={ent._id}>
              <td>{ent.name}</td>
              <td>{ent.location}</td>
              <td>{ent.contactInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Enterprise;
