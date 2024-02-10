import { prisma } from "../../../../lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const word = await prisma.word.findUnique({
    where:{
      id: Number(params.id)
    }
  })
  
  return Response.json(word)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  const data = await request.json()

  const word = await prisma.word.update({
    where:{
      id: Number(params.id)
    },
    data
  })
  
  return Response.json(word)
}