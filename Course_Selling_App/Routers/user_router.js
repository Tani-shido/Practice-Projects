const { Router } = require("express"); //Importing Router class from express to create and handeles routes
const userRouter = Router(); //A Router in Router class

const jwt = require("jsonwebtoken"); //jwts
const { JWT_USER_PASSWORD } = require("../config"); //Importing secrect from config file

const { userModel, purchaseModel } = require("../db"); //Importing database models/objects
const { usermiddleware } = require("../middleware/user"); //Importing middleware
const bcrypt = require("bcrypt");
const { z } = require("zod");


// Route 1: Sign Up
userRouter.post("/signup", async function (req, res) {
        const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
            firstName: z.string(),
            lastName: z.string()
        });
        const parsedDataWithSuccess = requiredBody.safeParse(req.body);

        if (!parsedDataWithSuccess.success) {
            return res.status(400).json({
                message: "Incorrect Format",
                error: parsedDataWithSuccess.error.flatten()
            });
        }

        const { email, password, firstName, lastName } = parsedDataWithSuccess.data;

        const mailIdCheck = await userModel.findOne({ email: email });

        if (mailIdCheck) {
            return res.status(409).json({
                message: "Invalid input or user already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });

        res.json({
            message: "You are signed up"
        }); 
});

// Route 2: Sign In
userRouter.post("/signin", async function (req, res) {
        const { email, password } = req.body;

        const user = await userModel.findOne({
            email: email,
        });

        const isPasswordCorrect = user ? await bcrypt.compare(password, user.password) : false;

        if (isPasswordCorrect) {

            const token = jwt.sign({
                id: user._id
            }, JWT_USER_PASSWORD);

            res.json({
                token: token,
                message: "You are signed in"
            });
        }
        else {
            res.status(401).json({
                message: "You are not signed in (Wrong Credentials)"
            });
        }
});

// Route 3: Purchase a couse
userRouter.post("/purchase", usermiddleware, async function (req, res) {
        const userId = req.userId;
        const courseId = req.body.courseId;

        const existingPurchase = await purchaseModel.findOne({userId, courseId});
        if(existingPurchase) {
            return res.status(409).json({
                message: "You have already purchased this course"
            })
        }

        await purchaseModel.create({
            userId,
            courseId
        });
        res.json({
            message: "Congratulations: Course is purchased"
        });
});

// // Route 4: View Purchased course
userRouter.get("/mycourses", usermiddleware, async function (req, res) {
    const user = req.userId;

    if (!user) {
        return res.status(403).json({ message: "Authentication error, user not found." });
    }

    const courses = await purchaseModel.find({
            userId: user
        }).populate("courseId");

        const myCourses = courses.map(p => p.courseId);

        res.json({
            message: "Your all courses",
            courses: myCourses
        });
});

module.exports = {
    userRouter: userRouter
}



