const express = require('express')

var router = express.Router()

const validateEmploee = require('../validations/validateEmploee')
const validateToken = require('../middleware/auth')
const validateQueryParams = require('../validations/validateQueryParams')
const role = require('../middleware/role')

const employeeController = require('../controllers/employeeController')

router.get('/', async (req, res) => {
  const queryParams = req.query

  const error = validateQueryParams(queryParams)

  if (error) return res.status(400).json({ error: error.details[0].message })

  const emploees = await employeeController.getEmployees(queryParams)
  return res.status(200).json({ data: emploees })
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  const newEmploee = await employeeController.getEmployeeById(id)
  return res.status(200).json({ data: newEmploee })
})

router.post('/',  validateEmploee, async (req, res) => {  //validateToken,
  const emploee = req.body

  const savedId = await employeeController.saveNewEmployee(emploee)
  return res.status(200).json({ data: savedId })
})

router.put('/:id',  validateEmploee, async (req, res) => {  //validateToken,
  const employee = req.body

  employee.employeeId = req.params.id

  const savedInfo = await employeeController.changeEmployee(employee)

  return res.status(200).json({ data: savedInfo })
})

router.delete('/:id', role, async (req, res) => {
  const id = req.params.id
  const result = await employeeController.deleteEmployee(id)
  if (result.affectedRows === 0) {
    return res
      .status(400)
      .json({ error: 'Emploee with the given id does not exists' })
  }
  return res.status(200).json({ data: result })
})

module.exports = router
