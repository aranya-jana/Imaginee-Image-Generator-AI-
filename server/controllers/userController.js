import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import { json, response } from "express";
import jwt from 'jsonwebtoken'
import razorpay from 'razorpay'


const registerUser = async (req, res)=> {
    try {
        const{name, email, password} = req.body;
        
        if(!name || !email || !password){
            return res.json({success:false, message: 'Missing Details'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name, 
            email, 
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success: true, token, user:{name: user.name}})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false, message: 'User does not exist'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

            res.json({success: true, token, user:{name: user.name}})

        }else{
            return res.json({success:false, message: 'Invalid credentials'})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const userCredits= async (req, res)=>{
    try {
        const {userId} = req.body
        const user = await userModel.findById(userId)
        res.json({success: true, credits: user.creditBalance, user:{name: user.name}})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const paymentRazorpay = async(req, res)=>{
    try {
        
        const {userId, planId} = req.body

        const userData = await userModel.findById(userId)

        if(!userId || !planId){
            return res.json({success: false, message: 'Missing Details'})
        }

        let credits, plan, amount, date

        switch (planId) {
            case value:
                
                break;
        
            default:
                break;
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


export{registerUser, loginUser, userCredits}