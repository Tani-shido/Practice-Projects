const { Router } = require("express"); //Importing Router from express to create routes  
const adminRouter = Router(); //Router 

const jwt = require("jsonwebtoken"); //Importing jsonwebtoken to sign jwts 
const { JWT_ADMIN_PASSWORD } = require("../config"); //Assigning secret

const { adminModel, courseModel } = require("../db"); //Importing Schema objects from database
const { adminmiddleware } = require("../middleware/admin"); //Importing middleware
const bcrypt = require("bcrypt");
const { z } = require("zod");

//Sign Up Route 1
adminRouter.post("/signup" , async function(req , res) { 
    try {
            const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
            firstName: z.string(),
            lastName: z.string()
        });
        const parsedDataWithSuccess = requiredBody.safeParse(req.body);

        if (!parsedDataWithSuccess.success) {
            res.json({
                message: "Incorrect Format",
                error: parsedDataWithSuccess.error
            })
            return;
        }
    
        const { email, password , firstName , lastName } = req.body;

        const mailIdCheck = await adminModel.findOne({email: email});
        
        if (mailIdCheck) {
            return res.status(409).json({
                message: "Invalid input or user already exists."
            });
        }
        

        const hashedPassword = await bcrypt.hash(password , 15);

        await adminModel.create({
        email: email, 
        password: hashedPassword, 
        firstName: firstName, 
        lastName: lastName
        });
        res.json({
            message: "You are signed up"   
        });
    } 
    catch (e) {
        res.status(403).json({
            message: "Wrong Details Entered"   
        });
    }  
});

//Sign In Route 2
adminRouter.post("/signin" , async function(req , res) { 
    try {
        const { email , password } = req.body;

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
            res.status(403).json({
            message: "Wrong Credentials"
            });
        }

    } catch (e) {
        res.status(500).json({
            message: "An error occurred during the sign-in process."
        });
    }
})

// Create course Route 3
adminRouter.post("/course" , adminmiddleware , async function(req , res) { 
    
   try{
        const adminId = req.userId; //userId holds the value of adminId from db and declared in middleware

        const { title, description, price, imageUrl } = req.body

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
            // adminId
        });
   }
   catch (e) {
    res.status(403).json({
        message: "Entered incorrect format"
    });
   }
});

// Update course Route 4
adminRouter.put("/course" , adminmiddleware , async function(req , res) { 
    try{
        const adminId = req.userId;

        const { title, description, price, imageUrl, courseId } = req.body

        const course = await courseModel.updateOne({
            _id: courseId,
            creatorId: adminId
        } , {
            title: title, 
            description: description, 
            price: price, 
            imageUrl: imageUrl
        });

        if (course.modifiedCount > 0) {
            res.json({
                message: "Course Updated Successfully"
            });
        } 
        else {
            res.status(404).json({
                message: "Course not found or you don't have permission to update it."
            });
        }
    }
    catch (e) {
        res.status(403).json({
        message: "Entered incorrect format"
    });
    }
});

// All courses Route 5
adminRouter.get("/course/bulk" , adminmiddleware , async function(req , res) {
    try{
        const adminId = req.userId;

        const courses = await courseModel.find({
            creatorId: adminId
        });

        // console.log(creatorId , adminId);

        res.json({
            message: "All courses",
            courses
        });
    }
    catch(e) {
        res.status(403).json({
            message: "Courses are not loading try again..."
        })
    }
});

// My courses Route 6
adminRouter.get("/course/mycourses" , adminmiddleware , async function(req , res) {
    try{
        const creatorId = req.userId;

        const courses = await courseModel.find({
            creatorId: creatorId
        });

        // console.log(creatorId , adminId);

        res.json({
            message: "Your all courses",
            courses
        });
    }
    catch (e) {
        res.status(403).json({
            message: "Courses are not loading try again later"
        });
    }
});

module.exports = {
    adminRouter: adminRouter
}
