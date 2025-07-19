require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json())

const mongoose = require("mongoose");


const { userRouter } = require("./router/user_router.js");
const { courseRouter } = require("./router/course_router.js");
const { adminRouter } = require("./router/admin_router.js");



app.use("/api/v1/user" , userRouter);
app.use("/api/v1/admin" , adminRouter);
app.use("/api/v1/course" , courseRouter);


    app.use((err, req, res, next) => {
        console.error(err); // Log the error for debugging
        const statusCode = err.statusCode || 500;
        const message = err.message || "An internal server error occurred.";
        res.status(statusCode).json({ message });
    });

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
}

main();
