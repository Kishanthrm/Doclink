import express from "express";
import userRouter from "./src/routes/userRouter.js"
import cors from "cors";

const app=express();
const port=5000;
app.use(cors());
app.use(userRouter);
app.listen(port,()=>{
    console.log(`Server is Listening the port ${port}`);
});
