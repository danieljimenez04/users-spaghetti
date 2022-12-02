const router=require('express').Router()


const userServices=require('./users.services')

router.get('/users',userServices.getAllUsers)
router.post('/users',userServices.postUser)

router.get('/users/:id',userServices.getUserById)
router.delete('/users/:id',userServices.deleteUser)
router.patch('/users/:id',userServices.patchUser)

module.exports=router