import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as profilesCtrl from '../controllers/profiles.js'
import methodOverride from "method-override";

const router = Router()

// GET 
router.get('/', isLoggedIn, profilesCtrl.index)

// GET
router.get('/:id', isLoggedIn, profilesCtrl.show)


export {
    router
}