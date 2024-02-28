import { prisma } from "@/lib/prisma"

const books = [
  {
    "id": 1,
    "name": "Aldous Huxley - Admirável mundo novo",
  },
  {
    "id": 5,
    "name": "As Cavernas de Aço",
  },
]

async function main(){
  for(const book of books){
    await prisma.book.upsert({
      where:{ id: book.id},
      create: book,
      update: book
    })
  }
}

main()