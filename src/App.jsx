import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");

  const API_URL =
    "https://spring-demo-app.yellowisland-9c291f5a.eastus.azurecontainerapps.io/employees";

  const loadEmployees = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const addEmployee = async () => {
    if (!name.trim()) {
      alert("Please enter employee name");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });

      if (response.ok) {
        setName("");
        loadEmployees();
      } else {
        alert("Failed to add employee");
      }
    } catch (error) {
      console.error(error);
      alert("Error while adding employee");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management System</h1>

      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Enter employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      <button onClick={addEmployee}>Add Employee</button>

      <h2>Employee List</h2>

      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.id} - {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
