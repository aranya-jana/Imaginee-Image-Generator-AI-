import { request } from 'express';
import jwt from 'jsonwebtoken'

const userAuth = async(requestAnimationFrame, resizeBy, next) => {
    const {token} = req.headers;

    if (!token) {
        return res.json({success: false, message: 'Not Authorizrd.Login Again'});
    } 

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.body.userID = tokenDecode.id;
        }
        else{
            return res.json({success: false, message: 'Not Authorizrd.Login Again'});
        }

    } catch (error) {
        
    }

}