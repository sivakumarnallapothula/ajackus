document.getElementById("employeeForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const newEmp = Object.fromEntries(formData.entries());

  if (!/\S+@\S+\.\S+/.test(newEmp.email)) {
    alert("Invalid email format");
    return;
  }

  newEmp.id = Date.now();
  employees.push(newEmp);
  alert("Employee added!");
  renderEmployees();
});
