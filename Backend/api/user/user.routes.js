const express = require('express')
const router = express.Router()
const {getUser, getUsers, deleteUser, updateUser} = require('./user.controller')


router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id',  updateUser)

router.delete('/:id', deleteUser)

module.exports = router