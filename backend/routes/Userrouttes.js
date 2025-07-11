import express from 'express'
import { usersignup } from '../controllers/Usercontroller.js'
import { login } from '../controllers/Userlogin.js';

const userrouter=express.Router();
userrouter.post('/signup',usersignup);
userrouter.post('/login',login)

export default userrouter;