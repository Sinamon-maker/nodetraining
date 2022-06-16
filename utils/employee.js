const transformTime=require('./transformTime')
const {timestampIntoDbFormat, transformIntoTimestamp} = transformTime

const transformEmployeeIntoDB = (employee) => {
 const savedEmployee = {
    first_name: employee.firstName,
    last_name: employee.lastName,
    date_start: timestampIntoDbFormat(employee.dateStart),
    job_title: employee.jobTitle,
    department: employee.department,
    salary: employee.salary,
    age: timestampIntoDbFormat(employee.age),
    date_quit: timestampIntoDbFormat(employee.dateQuit),
    employee_id: employee.employeeId,
  }

  return savedEmployee
}

const transformEmployeeFromDB = (employee) => {
  const fromDbEmployee = {
    firstName: employee.first_name,
    lastName: employee.last_name,
    dateStart: transformIntoTimestamp(employee.date_start),
    jobTitle: employee.job_title,
    department: employee.department,
    salary: employee.salary,
    age: transformIntoTimestamp(employee.age),
    dateQuit: transformIntoTimestamp(employee.date_quit),
     employeeId: employee.employee_id,
  }
  return fromDbEmployee
}

module.exports = {
  transformEmployeeFromDB,
transformEmployeeIntoDB
}