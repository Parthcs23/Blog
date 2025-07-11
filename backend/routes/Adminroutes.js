import express from 'express';
import { adminlogin } from '../controllers/Admincontroller.js';


const adminrouter=express.Router();

adminrouter.post("/login",adminlogin)


export default adminrouter