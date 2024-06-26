import 'dotenv/config'
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from "cookie-parser";

// create a middleware isAuthenticated that checks whether a User is logged in before entering using certain endpoints
// authentication matlab user signin hai ki nhi
// authorised matlab sahi admi sahi kam kr rha

//route import
import Aroute from "./routes/Aroute.js"
import Eroute from "./routes/Eroutes.js"
import Rroute from "./routes/Rroute.js"

const app = express();
const DB = process.env.DB;
const PORT = process.env.PORT
app.use(express.urlencoded({ extended: true }));


mongoose.connect(DB).then(() => {
    console.log('database connected');
}).catch(err => {
    console.log(err);
});

app.use(cors())
app.use(express.json());
app.use(cookieParser());



app.use("/api/user", Aroute);
app.use("/api/event", Eroute);
app.use("/api/review", Rroute);

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})

