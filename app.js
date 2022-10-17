
const express=require("express")
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const app= express();
require('dotenv').config()

//middleware
app.use(express.json())



//route


app.use('/api/v1/tasks', tasks)


const port = 3000

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console .log(`SERVER IS LISTENING ON PORT${port}..`) )

    }catch(error){
        console.log(error)
    }
}

start()

