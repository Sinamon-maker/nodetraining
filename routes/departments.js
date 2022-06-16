const express = require('express')

var router = express.Router()

const validateDepartment = require('../validations/validateDepartment')
const auth = require('../middleware/auth')
const role = require('../middleware/role')
const departmentController = require('../controllers/departmentController')

router.get('/', async (req, res) => {
  const departments = await departmentController.getDepartments()
  return res.json({ data: departments })
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const department = await departmentController.getDepartmentById(id)
  return res.status(200).json({ data: department })
})

router.post('/',validateDepartment, async (req, res) => {
  const department = req.body
  const isExist = await departmentController.isDepartmentExists(department)
  if (isExist) {
    return res.status(400).json({ error: 'Such department is already exists' })
  }
  const savedId = await departmentController.addNewDepartment(department)
  return res.status(201).json({ data: savedId })
})

router.put('/:id',validateDepartment, async (req, res) => {
  const department = req.body
  department.departmentId = req.params.id
  const savedInfo = await departmentController.updateDepartment(department)
  return res.status(201).json({ data: savedInfo })
})

router.delete('/:id', auth, role, async (req, res) => {
  const id = req.params.id
  const deletedDepartment = await departmentController.getDepartmentById(id)
  if (!deletedDepartment.length) {
    return res
      .status(400)
      .json({ error: 'Department with the given id does not exists' })
  }
  const result = await departmentController.deleteDepartment(id)
  return res.status(200).json({ data: result })
})

module.exports = router
