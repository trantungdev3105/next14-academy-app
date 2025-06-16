'use server'

import { connectToMongoDB } from '@/libs/mongoose'

export default async function Home() {
  const connect = await connectToMongoDB()

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos, veniam
      similique quis delectus voluptatem dolorum repudiandae repellendus quas,
      maiores vero cumque. Quae asperiores, ab deleniti quia modi enim quasi?
    </div>
  )
}
