const express  = require('express')
const bodyParser = require('body-parser')  
const cors  =  require('cors') 
const app = express()
const mysql = require('mysql2/promise')
const PORT = process.env.PORT || 3000;



app.use(bodyParser.json())
app.use(cors())


// Route


// showdata
app.get('/users',  (req , res) =>{
    console.log('Addmin is Joining')
    res.send('Hello World')
})


// Connecting Database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'trackwatchwebsite' , 
    port: 3306

})

//   Register
app.post('/user' , async(req, res) =>{
    
    try{
        const{Username , Email , Password } = req.body;
        const [result] = await pool.query(
              `INSERT INTO users ( Username, Password , Email)
             VALUES (?, ?, ? )`,
            [Username, Password , Email]
        );
        res.json({
            message: "User Created",
            id: result.insertId
        })

    } catch(err){
        console.log(err)
        res.status(500).send('Internal Server Error')
    }

})

// Login 
app.post('/login' , async(req, res) =>{

    try{

        const { Username , Password} = req.body;
        
        const [users] = await pool.query(
            'SELECT * FROM users WHERE Username = ? AND Password = ?',
            [Username, Password]
        
        );
        if(users.length === 0){
            return res.status(401).json({ message: 'User not found'})
        }
        const user = users[0]

        if(user.Password !== Password){
            return res.status(401).json({ message: 'Invalid Password'})

        }
        res.json({message: 'Login Success'})





    }catch(err){
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
})











app.listen(PORT,()=>{
    console.log(`Server Running On http://localhost:${PORT}`)
})
 