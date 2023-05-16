const express  =require('express')
const router = express.Router()
const MyControllers =  require('../Controllers/Controllers')


router.get('/' , MyControllers.regForm )
router.post('/result' , MyControllers.showResult)





module.exports = router