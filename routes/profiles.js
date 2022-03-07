import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

// GET 
router.get('/', isLoggedIn)



export {
    router
}