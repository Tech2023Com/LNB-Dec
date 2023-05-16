const express  =require('express')
const router = express.Router()
const MyControllers =  require('../Controllers/AdminController')


router.get('/' , MyControllers.sayHelloAdmin )





module.exports = router