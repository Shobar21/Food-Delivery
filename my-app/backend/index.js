import express from 'express'
import cors from 'cors' // Import CORS
const app = express()
import mongoDB from './DbConnect/Db.js'
import createUser from './Routes/createUser.js'
import DisplayData from './Routes/DisplayData.js'
import OrderData from './Routes/OrderData.js'

mongoDB()

// Use CORS middleware to allow requests from your frontend
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
)

app.use(express.json())

app.get('/', (req, resp) => {
  resp.send('hello world')
})

app.use('/api', createUser)
app.use('/api', DisplayData)
app.use('/api', OrderData)

const port = 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
