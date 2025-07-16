require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json())

const mongoose = require("mongoose");


const { userRouter } = require("./router/user");
const { courseRouter } = require("./router/course");
const { adminRouter } = require("./router/admin");



app.use("/api/v1/user" , userRouter);
app.use("/api/v1/admin" , adminRouter);
app.use("/api/v1/course" , courseRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
}

main();
