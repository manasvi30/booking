import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import  hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/room.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect =  async() =>
{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb.")
  } catch (error) {
    throw error
  }
}
mongoose.connection.on("disconnected",()=>
{
  console.log("mongodb is diconnected.")

})

//middlewares
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api/users", usersRoute)
app.use("/api/room", roomRoute)

app.get("/",(req,res)=>{
  res.send("hello first")
})
 app.get("/hello",(req,res)=>
 {
  res.send("hey there")
 })

app.use((err,req,res,next)=>
{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "something went wrong"
  return res.status(errorStatus).json({
    success : false,
    status : errorStatus,
    message : errorMessage,
    stack : err.stack
  })
})

app.listen(8880,()=>
{
    connect()
    console.log("connected to backend")
})
