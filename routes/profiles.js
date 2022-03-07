import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET 
router.get('/', isLoggedIn, profilesCtrl.index)

// GEt
router.get('/:id', isLoggedIn, profilesCtrl.show)


export {
    router
}