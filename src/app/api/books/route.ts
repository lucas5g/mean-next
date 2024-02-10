import { prisma } from "@/lib/prisma"

export async function GET(){
  const books = await prisma.book.findMany({
    include:{
      _count: true
    }
  })
  return Response.json(books)
}