import mongoose from 'mongoose'

const mongoURI =
  'mongodb+srv://FoodGo:cg371nCpzWAEWJ84@cluster0.8y6qc.mongodb.net/FoodGo?retryWrites=true&w=majority'

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log('MongoDB connected successfully')
    const fetchData = mongoose.connection.db.collection('FoodItem')
    const data = await fetchData.find({}).toArray()
    //category data
    const categoryData = mongoose.connection.db.collection('FoodCategory')
    const catData = await categoryData.find({}).toArray()
    global.FoodCategory = catData
    global.FoodItem = data
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

export default mongoDB
