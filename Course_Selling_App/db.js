const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {type: String , unique: true},
    password: String,
    firstName: String,
    lastName: String
}, {timestamps: true});

const adminSchema = new Schema({
    email: {type: String , unique: true},
    password: String,
    firstName: String,
    lastName: String 
}, {timestamps: true});

const courseSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    isFree: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: function(){
            return !this.isFree;
        }
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    imageUrl: String,
    creatorId: {type: ObjectId, ref: "admin"}
}, {timestamps: true});

const purchaseSchema = new Schema({
    userId: {type: ObjectId , ref: "user"},
    courseId: {type: ObjectId , ref: "course"}
}, {timestamps: true});

const userModel = mongoose.model("user" , userSchema);
const adminModel = mongoose.model("admin" , adminSchema);
const courseModel = mongoose.model("course" , courseSchema);
const purchaseModel = mongoose.model("purchase" , purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
