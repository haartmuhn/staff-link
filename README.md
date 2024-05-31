<div align="center">

# Staff Link

[![License: MIT](https://img.shields.io/badge/License-MIT-darkgreen.svg)](https://opensource.org/licenses/MIT)
![JSON Badge](https://img.shields.io/badge/JSON-E34F26?logo=json&logoColor=fff&style=flat)
![Node.JS Badge](https://img.shields.io/badge/Node.js-1572B6?logo=node.js&logoColor=fff&style=flat)
 ![JavaScript Badge](https://img.shields.io/badge/JS-F7DF1E?logo=javascript&logoColor=000&style=flat)
 ![npm Badge](https://img.shields.io/badge/npm-A020F0?logo=npm&logoColor=fff&style=flat)

</div>

## Description
Staff Link is a robust command-line application designed to streamline the management of employee databases for businesses. Leveraging the power of Node.js, PostgreSQL, and Inquirer, Staff Link empowers business owners to efficiently organize and plan their workforce, facilitating seamless operations.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/haartmuhn/staff-link.git
```

2. **Navigate to the project directory**:

```bash
cd staff-link
```

3. **Install dependencies**:

```bash
npm install
```

This will install Inquirer along with other required dependencies.

4. **Set up the PostgreSQL database**:
    - Ensure PostgreSQL is installed on your system.
    - Create a new database and update the database configuration in `lib/queries.js` with your database credentials.

5. **Run the application**:

```bash
node index.js
```

## Usage
Staff Link offers a user-friendly interface to manage employee databases effectively. Upon launching the application, users are presented with a main menu offering various functionalities:

- **View all departments**: Display a list of all departments in the company.
- **View all roles**: Show a list of all roles within the organization.
- **View all employees**: Present a comprehensive view of all employees, including their roles and departments.
- **Add a department**: Create a new department and add it to the database.
- **Add a role**: Define a new role within the organization and assign it to a department.
- **Add an employee**: Onboard a new employee, specifying their role and manager.
- **Update an employee role**: Modify an employee's role within the company.

Staff Link ensures smooth navigation through these options, guiding users at every step of the process. To gain a better understanding of how Staff Link operates, below is a demonstration of the application's functionality:

<div align="center">

[staff-link.webm](https://github.com/haartmuhn/staff-link/assets/164945655/149f986d-4ca5-4118-af4c-be9a188cd12c)

</div>

## Features
Staff Link boasts several features tailored to meet the diverse needs of businesses:

- **Efficient Database Management**: Seamlessly view, add, and update departments, roles, and employees.
- **Interactive Command-Line Interface**: Engage with the application effortlessly through an intuitive command-line interface.
- **Error Handling**: Robust error handling ensures smooth operation, providing feedback in case of unexpected scenarios.
- **Data Integrity**: Maintain data integrity with unique constraints and proper data validation.
- **Scalability**: Designed to scale with your business, allowing for future expansion and customization.

## Contributing
Contributions to Staff Link are highly appreciated! Whether it's fixing bugs, implementing new features, or enhancing existing functionalities, your contributions are valuable. To contribute:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## Tests

To run tests, execute the following command:

```bash
npm test
```

(Note: You will need to write the tests based on the endpoints and operations your application performs, as this is not set up by default.)

## License
Staff Link is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this application according to the terms of the license.
