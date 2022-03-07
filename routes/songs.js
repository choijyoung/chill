import { Router } from "express";
import methodOverride from "method-override";
import * as songsCtrl from '../controllers/songs.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

// GET - localhost:3000/songs
router.get('/', songsCtrl.index)

// GET - localhost:3000/songs/new
router.get('/new', isLoggedIn, songsCtrl.new)

// GET - localhost:3000/songs/:id
router.get('/:id', songsCtrl.show)

// GET - localhost:3000/songs/:id/edit
router.get('/:id/edit', isLoggedIn, songsCtrl.edit)

// PUT - localhost:3000/songs/:id
router.put('/:id', isLoggedIn, songsCtrl.update)

// POST - localhost:3000/songs/
router.post('/', isLoggedIn, songsCtrl.create)

// DELETE - localhost:3000/songs/:id
router.delete('/:id', isLoggedIn, songsCtrl.delete)


export{
    router
}