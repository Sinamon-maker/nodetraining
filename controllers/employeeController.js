const employeeModel = require('../models/employeeModel')

const paramsFunc = require('../utils/queryParams')
const employeeFunc = require('../utils/employee')
const {transformEmployeeIntoDB,transformEmployeeFromDB } = employeeFunc

const getEmployees = async (queryParams) => {
const params = paramsFunc(queryParams)
const returnedEmployees = await employeeModel.getAllEmployees(params)
  return  await returnedEmployees.map(it=> transformEmployeeFromDB(it))
}

const getEmployeeById = async (id) => {
  return employeeModel.getEmployeeById(id)
}

const saveNewEmployee = async (employee) => {
  const savedEmployee = transformEmployeeIntoDB(employee)
  return await employeeModel.saveEmployee(savedEmployee)
}



const changeEmployee = async (employee) => {
const savedEmployee = transformEmployeeIntoDB(employee)
  return await employeeModel.updateEmployee(savedEmployee)
}

const deleteEmployee = async (id) => {
  const employee = await employeeModel.deleteEmployeeById(id)
  return employee
}



module.exports = {
  getEmployees,
  getEmployeeById,
  deleteEmployee,
  changeEmployee,
  saveNewEmployee,

}
