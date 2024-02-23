import { prisma } from "../lib/prisma";
import { z } from 'zod'

const createBookSchema = z.object({
  name: z.string()
})

type CreateBookType = z.infer<typeof createBookSchema>

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

  // findAll() {
  //   return this.prisma.word.findMany({
  //     orderBy: {
  //       name: 'asc',
  //     },
  //   });
  // }

  // findOne(id: number) {
  //   return this.prisma.word.findFirstOrThrow({
  //     where: { id },
  //   });
  // }

  // update(id: number, updateWordDto: UpdateWordDto) {
  //   return this.prisma.word.update({
  //     where: { id },
  //     data: updateWordDto,
  //   });
  // }

  // remove(id: number) {
  //   return this.prisma.word.delete({
  //     where: { id },
  //   });
  // }

  remove(id: number) {
    return prisma.book.delete({
      where: { id }
    })
  }
}