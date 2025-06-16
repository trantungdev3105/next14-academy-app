'use server'

import mongoose from 'mongoose'

// Singleton Connect
let isConnected: boolean = false

const connectToMongoDB = async () => {
  if (!process.env.MONGODB_URL) throw new Error('Chuỗi kết nối bắt buộc!')

  if (isConnected) {
    console.log('Ready connecting to mongodb!')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, { dbName: 'Academy' })
    isConnected = true
    console.log('Connecting to mongodb!')
  } catch (error: any) {
    console.log('Error connecting to mongodb!')
  }
}

export { connectToMongoDB }
