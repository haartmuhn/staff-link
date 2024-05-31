-- Insert data into the department table
INSERT INTO department (name) VALUES
('Sales'),
('Engineering'),
('Finance'),
('Human Resources');

-- Insert data into the role table
INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 80000, 1),
('Salesperson', 50000, 1),
('Lead Engineer', 100000, 2),
('Software Engineer', 80000, 2),
('Accountant', 70000, 3),
('HR Manager', 90000, 4);

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Alice', 'Johnson', 3, NULL),
('Bob', 'Lee', 4, 3),
('Charlie', 'Brown', 5, NULL),
('Eve', 'Davis', 6, NULL);
