const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery",true);
const connectDatabase=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://sachinv26:123vermasv@cluster0.a62wak3.mongodb.net/").then(()=>{
            console.log("Database is connected!")
        })
    } catch (error) {
        console.log("Error",error);
    }
}
module.exports=connectDatabase;