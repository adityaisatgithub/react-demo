import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Employee Management System</h1>

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