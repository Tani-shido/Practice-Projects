const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db");

courseRouter.get("/preview" , async function (req , res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const courses = await courseModel.find({ isPublished: true })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate('creatorId', 'firstName lastName');
            const totalCourses = await courseModel.countDocuments({ isPublished: true });

            res.json({
                message: "Showing all published courses",
                data: {
                    courses,
                    totalPages: Math.ceil(totalCourses / limit),
                    currentPage: page,
                }
            });
    });

module.exports = {
    courseRouter: courseRouter
}
