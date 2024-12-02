import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.CONNECTION_STRING as string).then(()=>{
    console.log("Connection with db done");
})

const app = express();
app.use(express.json())
app.use(cors());

app.get("/", async(req: express.Request, res: express.Response) => {
    res.json({
        message : "Hello, server is working"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})