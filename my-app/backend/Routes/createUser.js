import express from 'express'
import user from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const jwtSecret = 'my-babygirl-sweety'

import { body, validationResult } from 'express-validator'

const router = express.Router()

router.post(
  '/createuser',
  [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const salt = await bcrypt.genSalt(10)
    const securePass = await bcrypt.hash(req.body.password, salt)
    try {
      await user.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
        location: req.body.location,
      })
      res.json({ success: true })
    } catch (err) {
      console.log(err)
      res.json({ success: false })
    }
  }
)
router.post(
  '/loginuser',
  [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 6 }),
  ],
  async (req, resp) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() })
    }
    let email = req.body.email
    try {
      let useremail = await user.findOne({ email })
      if (!useremail) {
        return resp
          .status(400)
          .json({ errors: 'Try logging with correct credentials' })
      }

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        useremail.password
      )

      if (!pwdCompare) {
        return resp
          .status(400)
          .json({ errors: 'Try logging with correct credentials' })
      }
      const data = {
        user: {
          id: useremail.id,
        },
      }
      const authToken = jwt.sign(data, jwtSecret)

      return resp.json({ success: true, authToken: authToken })
    } catch (error) {
      console.log(error)
      resp.json({ success: false })
    }
  }
)

export default router
