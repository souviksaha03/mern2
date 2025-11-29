import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./Route/Bookroute.js"
import UserRoute from"./Route/UserRoute.js"
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({path:"backend/process.env"});

const PORT=  process.env.PORT || 4001 ;
const mDBURO = "mongodb://localhost:27017/bookdekho" ;



//connect to mongodb
try{
    mongoose.connect(mDBURO,{
        useNewUrlParser :true,
        useUnifiedTopology: true
    });

    console.log("conneted to mongodb");
}catch(error){
    console.log("Error:" , error) ;
}
//defining routes
app.use("/book",bookRoute)
app.use("/user", UserRoute);
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
}) 