const knex = require('../db/db-config')

const getAllEmployees = async (params) => {
  const { filter, sortBy, order, limit, offset } = params

  const result = await knex('employees')
    .where('first_name', 'like', `%${filter}%`)
    .orWhere('last_name', 'like', `%${filter}%`)
    .orderBy(sortBy, order)
    .limit(limit)
    .offset(offset)

  return result
}

const getEmployeeById = async (id) => {
  const result = await knex(`employees`)
    .where('employee_id', `${id}`)
    .join('departments', 'employees.department', 'departments.department_id')
    .select()
  return result
}

const saveEmployee = async (employee) => {
  const [resultId] = await knex(`employees`).insert(employee)
  return resultId
}

const updateEmployee = async (employee) => {
  console.log('employee', employee)
   const updatedRaws = await knex(`employees`)
    .where('employee_id', `${employee.employee_id}`)
    .update(employee)

  return updatedRaws
}

const deleteEmployeeById = async (id) => {
  const deletedRaws = await knex(`employees`)
    .where('employee_id', `${id}`)
    .del()
  return deletedRaws
}


module.exports = {
  getAllEmployees,
  getEmployeeById,
  saveEmployee,
  updateEmployee,
  deleteEmployeeById,
}
