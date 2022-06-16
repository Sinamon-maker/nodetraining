
const knex = require('../db/db-config')

const saveDepartment = async (department) => {

  const [resultId] = await knex(`departments`).insert(department)
  return resultId
}

const getDepartmentsFromDb = async () => {
  const result = await knex('departments').select()
  return result
}

const getDepartmentById = async (id) => {
  const result = await knex(`departments`).where('department_id', `${id}`)

  return result
}

const getDepartmentByName = async ( name) => {
   const result = await knex(`departments`).where('name', `${name}`)

  return result
}

const updateDepartment = async (department) => {
  const updatedRaws = await knex(`departments`)
  .where('department_id', `${department.departmentId}`)
  .update({name: department.name})

  return updatedRaws
}

const deleteDepartment = async (id) => {
  const deletedRaws = await knex(`departments`)
  .where('department_id', `${id}`)
  .del()

  return deletedRaws
}

module.exports = {
  getDepartmentsFromDb,
  getDepartmentById,
  saveDepartment,
  updateDepartment,
  deleteDepartment,
  getDepartmentByName,
}
