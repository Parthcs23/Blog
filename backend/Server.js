import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectdb from './configs/db.js';
import adminrouter from './routes/Adminroutes.js';
import userrouter from './routes/Userrouttes.js';

const app=express();
await connectdb()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>res.send("API is working"))
app.use('/api/admin',adminrouter)
app.use('/api/user',userrouter)


const PORT = process.env.PORT|| 3000

app.listen(PORT ,()=>{
    console.log('Server is running on port' + " "+ PORT)
})

export default app;