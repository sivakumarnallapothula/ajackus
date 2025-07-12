let employees = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", department: "HR", role: "Manager" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", department: "Engineering", role: "Developer" }
];

let pageSize = 10;

function renderEmployees(list = employees) {
  const container = document.getElementById("employeeContainer");
  container.innerHTML = "";
  list.slice(0, pageSize).forEach(emp => {
    container.innerHTML += `
      <div class="employee-card" data-id="\${emp.id}">
        <p><strong>\${emp.firstName} \${emp.lastName}</strong></p>
        <p>\${emp.email}</p>
        <p>\${emp.department}</p>
        <p>\${emp.role}</p>
        <button onclick="editEmployee(\${emp.id})">Edit</button>
        <button onclick="deleteEmployee(\${emp.id})">Delete</button>
      </div>`;
  });
}

function editEmployee(id) {
  alert("Edit functionality not implemented in this mockup.");
}

function deleteEmployee(id) {
  if (confirm("Are you sure you want to delete this employee?")) {
    employees = employees.filter(emp => emp.id !== id);
    renderEmployees();
  }
}

function toggleFilter() {
  document.getElementById("filterSidebar").classList.toggle("visible");
}

function applyFilter() {
  const firstName = document.getElementById("filterFirstName").value.toLowerCase();
  const department = document.getElementById("filterDepartment").value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(firstName) &&
    emp.department.toLowerCase().includes(department) &&
    emp.role.toLowerCase().includes(role)
  );
  renderEmployees(filtered);
}

function searchEmployees() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(query) ||
    emp.lastName.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  renderEmployees(filtered);
}

function sortEmployees() {
  const key = document.getElementById("sortSelect").value;
  employees.sort((a, b) => a[key].localeCompare(b[key]));
  renderEmployees();
}

function changePageSize() {
  pageSize = parseInt(document.getElementById("pageSizeSelect").value);
  renderEmployees();
}

document.addEventListener("DOMContentLoaded", () => renderEmployees());
