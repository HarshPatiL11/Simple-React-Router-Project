import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import PortfolioRoutes from './Routes/ContactRoute.js'
import { connDB } from "./DB/DB.js";
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;


//middlewares
app.use(cors())  //cors connects to express
app.use(morgan('dev')) // morgan linking to express  //dev means development mode
app.use(express.json()) // to store data in the database in json format

// // Create __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// static files access
// app.use(express.static(path.join(__dirname, "./client/build")));



//Routes
app.use('/api/v1/portfolio',PortfolioRoutes)


// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });

app.get('/',(req,res)=>{
    res.send({
        message:"hello Harsh"
        
    })
})
connDB();

app.listen(PORT,()=>{
    console.log(`Listening to port number ${PORT}`.bgGreen.red);
} )

