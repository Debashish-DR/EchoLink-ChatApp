import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import {app, server} from './socket/socket.js';

const PORT = process.env.PORT || 5000;

const __dirname = process.cwd();

dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON payloads{from req.body}
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});

// app.get('/',(req,res) => {
    //root route http://localhost:5000/
//     res.send('Hello from the backend & The server is ready.');
// });

server.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});