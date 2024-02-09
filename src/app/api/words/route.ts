import { prisma } from "../../libs/prisma"

export async function GET(){
  const words = await prisma.word.findMany({
    orderBy:{
      name:'asc'
    }
  })
  return Response.json(words)
}