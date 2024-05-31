const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username', // replace with your PostgreSQL username
  host: 'localhost',
  database: 'your_database', // replace with your PostgreSQL database name
  password: 'your_password', // replace with your PostgreSQL password
  port: 5432,
});

// View all departments
const getAllDepartments = async () => {
  const query = 'SELECT * FROM department';
  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// View all roles
const getAllRoles = async () => {
  const query = 'SELECT * FROM role';
  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// View all employees
const getAllEmployees = async () => {
  const query = `
    SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
           COALESCE(manager.first_name || ' ' || manager.last_name, 'None') AS manager
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id
  `;
  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Add a new department
const addDepartment = async (departmentName) => {
  const query = 'INSERT INTO department (name) VALUES ($1)';
  try {
    await pool.query(query, [departmentName]);
    console.log('Department added successfully.');
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Add a new role
const addRole = async (title, salary, departmentId) => {
  const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
  try {
    await pool.query(query, [title, salary, departmentId]);
    console.log('Role added successfully.');
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Add a new employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
  const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
  try {
    await pool.query(query, [firstName, lastName, roleId, managerId]);
    console.log('Employee added successfully.');
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Update an employee's role
const updateEmployeeRole = async (employeeId, roleId) => {
  const query = 'UPDATE employee SET role_id = $1 WHERE id = $2';
  try {
    await pool.query(query, [roleId, employeeId]);
    console.log('Employee role updated successfully.');
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Update an employee's manager
const updateEmployeeManager = async (employeeId, managerId) => {
  const query = 'UPDATE employee SET manager_id = $1 WHERE id = $2';
  try {
    await pool.query(query, [managerId, employeeId]);
    console.log('Employee manager updated successfully.');
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// View employees by manager
const getEmployeesByManager = async (managerId) => {
  const query = `
    SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    WHERE employee.manager_id = $1
  `;
  try {
    const { rows } = await pool.query(query, [managerId]);
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// View employees by department
const getEmployeesByDepartment = async (departmentId) => {
  const query = `
    SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, 
           COALESCE(manager.first_name || ' ' || manager.last_name, 'None') AS manager
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id
    WHERE department.id = $1
  `;
  try {
    const { rows } = await pool.query(query, [departmentId]);
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Delete a department
const deleteDepartment = async (departmentId) => {
  const query = 'DELETE FROM department WHERE id = $1';
  try {
    await pool.query(query, [departmentId]);
    console.log('Department deleted successfully.');
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Delete a role
const deleteRole = async (roleId) => {
  const query = 'DELETE FROM role WHERE id = $1';
  try {
    await pool.query(query, [roleId]);
    console.log('Role deleted successfully.');
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Delete an employee
const deleteEmployee = async (employeeId) => {
  const query = 'DELETE FROM employee WHERE id = $1';
  try {
    await pool.query(query, [employeeId]);
    console.log('Employee deleted successfully.');
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// View total utilized budget by department
const getDepartmentBudget = async (departmentId) => {
  const query = `
    SELECT SUM(role.salary) AS total_budget
    FROM employee
    JOIN role ON employee.role_id = role.id
    WHERE role.department_id = $1
  `;
  try {
    const { rows } = await pool.query(query, [departmentId]);
    return rows[0].total_budget;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  updateEmployeeManager,
  getEmployeesByManager,
  getEmployeesByDepartment,
  deleteDepartment,
  deleteRole,
  deleteEmployee,
  getDepartmentBudget,
};
