import React, { useEffect, useState } from "react";
import axios from "axios";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ name: "", department: "", role: "", salary: "" });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:5000/api/employees");
    setEmployees(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/employees", formData);
    setFormData({ name: "", department: "", role: "", salary: "" });
    fetchEmployees();
  };

  return (
    <div>
      <h2>Employee Management</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
        <input name="department" placeholder="Department" onChange={handleChange} value={formData.department} />
        <input name="role" placeholder="Role" onChange={handleChange} value={formData.role} />
        <input name="salary" placeholder="Salary" onChange={handleChange} value={formData.salary} />
        <button type="submit">Add Employee</button>
      </form>

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
