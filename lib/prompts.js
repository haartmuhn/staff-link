const inquirer = require('inquirer');

const mainMenuPrompt = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Update an employee manager',
        'View employees by manager',
        'View employees by department',
        'Delete a department',
        'Delete a role',
        'Delete an employee',
        'View total utilized budget of a department',
        'Exit',
      ],
    },
  ]);
};

const addDepartmentPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:',
    },
  ]);
};

const addRolePrompt = (departments) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the role:',
    },
    {
      type: 'list',
      name: 'department',
      message: 'Select the department for the role:',
      choices: departments.map(department => ({ name: department.name, value: department.id })),
    },
  ]);
};

const addEmployeePrompt = (roles, employees) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the first name of the employee:',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter the last name of the employee:',
    },
    {
      type: 'list',
      name: 'role',
      message: 'Select the role for the employee:',
      choices: roles.map(role => ({ name: role.title, value: role.id })),
    },
    {
      type: 'list',
      name: 'manager',
      message: 'Select the manager for the employee:',
      choices: [{ name: 'None', value: null }, ...employees.map(employee => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }))],
    },
  ]);
};

const updateEmployeeRolePrompt = (employees, roles) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Select the employee to update:',
      choices: employees.map(employee => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id })),
    },
    {
      type: 'list',
      name: 'role',
      message: 'Select the new role for the employee:',
      choices: roles.map(role => ({ name: role.title, value: role.id })),
    },
  ]);
};

const updateEmployeeManagerPrompt = (employees) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Select the employee to update their manager:',
      choices: employees.map(employee => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id })),
    },
    {
      type: 'list',
      name: 'manager',
      message: 'Select the new manager for the employee:',
      choices: [{ name: 'None', value: null }, ...employees.map(employee => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }))],
    },
  ]);
};

const viewEmployeesByManagerPrompt = (managers) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'manager',
      message: 'Select the manager:',
      choices: managers.map(manager => ({ name: `${manager.first_name} ${manager.last_name}`, value: manager.id })),
    },
  ]);
};

const viewEmployeesByDepartmentPrompt = (departments) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'department',
      message: 'Select the department:',
      choices: departments.map(department => ({ name: department.name, value: department.id })),
    },
  ]);
};

const deleteDepartmentPrompt = (departments) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'department',
      message: 'Select the department to delete:',
      choices: departments.map(department => ({ name: department.name, value: department.id })),
    },
  ]);
};

const deleteRolePrompt = (roles) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Select the role to delete:',
      choices: roles.map(role => ({ name: role.title, value: role.id })),
    },
  ]);
};

const deleteEmployeePrompt = (employees) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Select the employee to delete:',
      choices: employees.map(employee => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id })),
    },
  ]);
};

const viewDepartmentBudgetPrompt = (departments) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'department',
      message: 'Select the department:',
      choices: departments.map(department => ({ name: department.name, value: department.id })),
    },
  ]);
};

module.exports = {
  mainMenuPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt,
  updateEmployeeManagerPrompt,
  viewEmployeesByManagerPrompt,
  viewEmployeesByDepartmentPrompt,
  deleteDepartmentPrompt,
  deleteRolePrompt,
  deleteEmployeePrompt,
  viewDepartmentBudgetPrompt,
};