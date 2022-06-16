const departmentModel = require('../models/departmentModel')

const getDepartments = async () => {
  const departments = await departmentModel.getDepartmentsFromDb()
  return departments
}

const getDepartmentById = async (id) => {
  const department = await departmentModel.getDepartmentById(id)
  return department
}

const addNewDepartment = async (department) => {
  const savedId = await departmentModel.saveDepartment(department)
  return savedId
}

const isDepartmentExists = async (department) => {
  const theSameDepartmentInDb = await departmentModel.getDepartmentByName(
    department.departmentId,
    department.name,
  )
  if (theSameDepartmentInDb.length) {
    return true
  }
  return false
}

const updateDepartment = async (department) => {
  return await departmentModel.updateDepartment(department)
}

const deleteDepartment = async (id) => {
  const result = await departmentModel.deleteDepartment(id)
  return result
}


module.exports = {
  addNewDepartment,
  getDepartments,
  getDepartmentById,
  deleteDepartment,
  updateDepartment,
  isDepartmentExists,
}
