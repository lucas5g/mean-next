import { prisma } from "../../libs/prisma"

export async function GET(){
  const words = await prisma.word.findMany()
  return Response.json(words)
}