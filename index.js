import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"
import mongoose from "mongoose";
import clientRouter from "./routes/client.js"

const app = express();




app.use(cors({
    origin: ["https://neox-invoice-system.netlify.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))


// **Middlewares
dotenv.config()
app.use(cookieParser())
app.use(express.json())

app.use("/api/v1", clientRouter)



app.get("/", (req, res) => {
    res.send("App running successfully")
})


const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: "InvoiceNeoxRecords" });
        console.log("Database has been connected successfully")
    } catch (error) {
        console.log(error)
    }
}



app.listen(process.env.PORT, () => {
    ConnectDb()
    console.log("Listining on 8000")
})
