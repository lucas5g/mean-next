import { prisma } from "../lib/prisma";
import { z } from 'zod'

export const createBookSchema = z.object({
  name: z.string()
})

const updateBookSchema = createBookSchema.partial()

type CreateBookType = z.infer<typeof createBookSchema>
type UpdateBookType = z.infer<typeof updateBookSchema>
export class BookService {
  async create(book: CreateBookType) {

    const data = createBookSchema.parse(book)

    const bookExist = await prisma.book.count({
      where: {
        name: data.name
      }
    })

    if (bookExist > 0) {
      throw new Error(`O livro ${data.name} já existe.`)
    }
    return prisma.book.create({
      data
    });
  }

  findAll() {
    return prisma.book.findMany({
      include: {
        _count: {
          select: {
            words: true
          }
        }
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: number) {
    return prisma.book.findFirstOrThrow({
      where: { id },
    });
  }

  update(id: number, updateBook: UpdateBookType) {
    const data = updateBookSchema.parse(updateBook)
    return prisma.book.update({
      where: { id },
      data
    });
  }

  remove(id: number) {
    return prisma.book.delete({
      where: { id }
    })
  }
}