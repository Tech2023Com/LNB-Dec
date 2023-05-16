const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 8765
const MyRoutes = require('./Routes/Routes')
const AdminRoutes = require('./Routes/AdminRoutes')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :  true}))

app.use('/student' , MyRoutes)
app.use('/admin' , AdminRoutes)



app.listen( PORT ,  ()=>{
    console.log(`Server is running on PORT : ${PORT}`)
} )