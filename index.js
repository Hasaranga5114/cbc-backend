import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; 
import Student from './models/student.js';   
import studentRouter from './routes/studentRouter.js';  
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRouter.js';
import jwt from 'jsonwebtoken';
const app = express();




app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

const mongoUrl="mongodb+srv://admin:123@cluster0.v6xa77c.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoUrl,{})
const connection=mongoose.connection; 

connection.once('open',()=>{
  console.log("MongoDB database connected");})



app.use(bodyParser.json())

app.use(
  (req, res, next) => {
    const token =req.header("Authorization")?.replace("Bearer ","")
  console.log(token)
  if(token != null){
    jwt.verify(token,"cbc-secret-key-7973",(error,decoded)=>{
      if(!error){
        
        req.user=decoded
      }
  })
}
    next();
  }
)



app.use('/api/students', studentRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

