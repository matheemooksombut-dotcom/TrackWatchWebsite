const express  = require('express')
const bodyParser = require('body-parser')  
const cors  =  require('cors') 
const app = express()
const PORT = 3000|| process.env.PORT; 


app.use(bodyParser.json())
app.use(cors())


// Route


// showdata
app.get('/users',  (req , res) =>{
    console.log('Addmin is Joining')
    res.send('Hello World')
})

//   ส่ง  User เข้า Database
app.post('/user' , (raq, res) =>{
    
})











app.listen(PORT,()=>{
    console.log(`Server Running On http://localhost:${PORT}`)
})
 