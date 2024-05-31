const { mainMenuPrompt, addDepartmentPrompt, addRolePrompt, addEmployeePrompt, updateEmployeeRolePrompt, updateEmployeeManagerPrompt, viewEmployeesByManagerPrompt, viewEmployeesByDepartmentPrompt, deleteDepartmentPrompt, deleteRolePrompt, deleteEmployeePrompt, viewDepartmentBudgetPrompt } = require('./lib/prompts');
const { getAllDepartments, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, updateEmployeeManager, getEmployeesByManager, getEmployeesByDepartment, deleteDepartment, deleteRole, deleteEmployee, getDepartmentBudget } = require('./lib/queries');

const runApp = async () => {
  try {
    let exit = false;
    while (!exit) {
      const { action } = await mainMenuPrompt();
      switch (action) {
        case 'View all departments':
          const departments = await getAllDepartments();
          console.table(departments);
          break;
        case 'View all roles':
          const roles = await getAllRoles();
          console.table(roles);
          break;
        case 'View all employees':
          const employees = await getAllEmployees();
          console.table(employees);
          break;
        case 'Add a department':
          const { name: departmentName } = await addDepartmentPrompt();
          await addDepartment(departmentName);
          break;
        case 'Add a role':
          const departmentsForRole = await getAllDepartments();
          const { title, salary, department: departmentId } = await addRolePrompt(departmentsForRole);
          await addRole(title, salary, departmentId);
          break;
        case 'Add an employee':
          const rolesForEmployee = await getAllRoles();
          const employeesForEmployee = await getAllEmployees();
          const { firstName, lastName, role: roleId, manager: managerId } = await addEmployeePrompt(rolesForEmployee, employeesForEmployee);
          await addEmployee(firstName, lastName, roleId, managerId);
          break;
        case 'Update an employee role':
          const employeesToUpdateRole = await getAllEmployees();
          const rolesToUpdateRole = await getAllRoles();
          const { employee: employeeIdToUpdateRole, role: newRoleIdToUpdateRole } = await updateEmployeeRolePrompt(employeesToUpdateRole, rolesToUpdateRole);
          await updateEmployeeRole(employeeIdToUpdateRole, newRoleIdToUpdateRole);
          break;
        case 'Update an employee manager':
          const employeesToUpdateManager = await getAllEmployees();
          const managersToUpdateManager = await getAllEmployees(); // Allow selecting from existing employees as managers
          const { employee: employeeIdToUpdateManager, manager: newManagerIdToUpdateManager } = await updateEmployeeManagerPrompt(employeesToUpdateManager, managersToUpdateManager);
          await updateEmployeeManager(employeeIdToUpdateManager, newManagerIdToUpdateManager);
          break;
        case 'View employees by manager':
          const managersForEmployeesByManager = await getAllEmployees();
          const { manager: managerIdForEmployeesByManager } = await viewEmployeesByManagerPrompt(managersForEmployeesByManager);
          const employeesByManager = await getEmployeesByManager(managerIdForEmployeesByManager);
          console.table(employeesByManager);
          break;
        case 'View employees by department':
          const departmentsForEmployeesByDepartment = await getAllDepartments();
          const { department: departmentIdForEmployeesByDepartment } = await viewEmployeesByDepartmentPrompt(departmentsForEmployeesByDepartment);
          const employeesByDepartment = await getEmployeesByDepartment(departmentIdForEmployeesByDepartment);
          console.table(employeesByDepartment);
          break;
        case 'Delete a department':
          const departmentsForDeleteDepartment = await getAllDepartments();
          const { department: departmentIdToDelete } = await deleteDepartmentPrompt(departmentsForDeleteDepartment);
          await deleteDepartment(departmentIdToDelete);
          break;
        case 'Delete a role':
          const rolesForDeleteRole = await getAllRoles();
          const { role: roleIdToDelete } = await deleteRolePrompt(rolesForDeleteRole);
          await deleteRole(roleIdToDelete);
          break;
        case 'Delete an employee':
          const employeesForDeleteEmployee = await getAllEmployees();
          const { employee: employeeIdToDelete } = await deleteEmployeePrompt(employeesForDeleteEmployee);
          await deleteEmployee(employeeIdToDelete);
          break;
        case 'View total utilized budget of a department':
          const departmentsForViewBudget = await getAllDepartments();
          const { department: departmentIdForBudget } = await viewDepartmentBudgetPrompt(departmentsForViewBudget);
          const totalBudget = await getDepartmentBudget(departmentIdForBudget);
          console.log(`Total utilized budget of the department: ${totalBudget}`);
          break;
        case 'Exit':
          exit = true;
          console.log('Exiting the application...');
          break;
        default:
          console.log('Invalid choice. Please try again.');
          break;
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close database connections or perform any necessary cleanup
    process.exit(0);
  }
};

runApp();