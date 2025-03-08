import express from 'express'

const router = express.Router()

router.post('/foodData', (req, res) => {
  try {
    res.send([global.FoodItem, global.FoodCategory])
  } catch (error) {
    console.log(error)
  }
})

export default router
