import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://spring-demo-app.yellowisland-9c291f5a.eastus.azurecontainerapps.io/employees")
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