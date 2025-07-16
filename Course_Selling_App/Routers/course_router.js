const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db");

courseRouter.get("/preview" , async function (req , res) {
    try {
        const courses = await courseModel.find({});
        res.json({
            message: "These are the all the courses",
            courses
        });
    }
    catch(e) {
        res.status(403).json({
            message: "Courses are not loading"
        });
    }
});

module.exports = {
    courseRouter: courseRouter
}