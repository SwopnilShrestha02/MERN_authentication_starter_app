import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config()

const app=express()


const port = process.env.PORT || 5000;

app.get('/',(req,res)=>console.log('API is running'));
app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`Server started on port ${port}`));


