const { Router } = require("express"); //Importing Router from express to create routes  
const adminRouter = Router(); //Router 

const jwt = require("jsonwebtoken"); //Importing jsonwebtoken to sign jwts 
const { JWT_ADMIN_PASSWORD } = require("../config"); //Assigning secret

const { adminModel, courseModel } = require("../db"); //Importing Schema objects from database
const { adminmiddleware } = require("../middleware/admin"); //Importing middleware
const bcrypt = require("bcrypt");
const { z } = require("zod");

//Sign Up Route 1
adminRouter.post("/signup", async function (req, res) {
        const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
            firstName: z.string(),
            lastName: z.string()
        });
        const parsedDataWithSuccess = requiredBody.safeParse(req.body);

        if (!parsedDataWithSuccess.success) {
            return res.json({
                message: "Incorrect Format",
                error: parsedDataWithSuccess.error
            });
        }

        const { email, password, firstName, lastName } = req.body;

        const mailIdCheck = await adminModel.findOne({ email: email });

        if (mailIdCheck) {
            return res.status(409).json({
                message: "Invalid input or user already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 15);

        await adminModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });
        
        res.json({
            message: "You are signed up"
        });
});

//Sign In Route 2
adminRouter.post("/signin", async function (req, res) {
        const { email, password } = req.body;

        const admin = await adminModel.findOne({
            email: email
        });

        const isPasswordCorrect = admin ? await bcrypt.compare(password, admin.password) : false;

        if (isPasswordCorrect) {

            const token = jwt.sign({
                id: admin._id
            }, JWT_ADMIN_PASSWORD);

            res.json({
                token: token,
                message: "You are signed in"
            });
        }
        else {
            res.status(401).json({
                message: "Wrong Credentials"
            });
        }
});

// Create course Route 3
adminRouter.post("/course", adminmiddleware, async function (req, res) {
        const adminId = req.userId; //userId holds the value of adminId from db and declared in middleware

        const { title, description, price, imageUrl } = req.body

        if (!title || !description || !price) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

        const course = await courseModel.create({
            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl,
            creatorId: adminId
        });

        res.json({
            message: "Course Created",
            courseId: course._id,
        });
});

// Update course Route 4
adminRouter.put("/updatecourse/:courseId", adminmiddleware, async function (req, res) {
        const adminId = req.userId;
        const { courseId } = req.params; 
        const { title, description, price, imageUrl } = req.body //$set will only update the assigned values in it 
        const update = {title, description, price, imageUrl};

        const course = await courseModel.updateOne({
            _id: courseId,
            creatorId: adminId
        }, { $set: update }
        );

        if (course.matchedCount === 0) {
            res.status(404).json({
                message: "Course not found or you don't have permission to update it."
            });
        }
        else {
            res.json({
                message: "Course Updated Successfully"
            });
        }
});

// My courses Route 6
adminRouter.get("/course/mycourses", adminmiddleware, async function (req, res) {
        const adminId = req.userId;

        const courses = await courseModel.find({
            creatorId: adminId
        });

        // console.log(creatorId , adminId);

        res.json({
            message: "All courses",
            courses
        });
});

module.exports = {
    adminRouter: adminRouter
}
