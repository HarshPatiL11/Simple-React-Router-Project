import express from "express"
import sendEmailController from '../Controller/ContactController.js'
// router obj

const router = express.Router()

// routes
router.post('/sendEmail',sendEmailController)

export default router