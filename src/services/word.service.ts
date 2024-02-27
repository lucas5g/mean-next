import { Word } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { z } from "zod";

const createWordSchema = z.object({
  name: z.string(),
  meaning: z.string(),
  fixed: z.boolean(),
  bookId: z.number()
})

const updateWordSchema = createWordSchema.partial()

type CreateWordType = z.infer<typeof createWordSchema>
type UpdateWordType = z.infer<typeof updateWordSchema>
export class WordService {
  async create(createWord: CreateWordType) {
    const data = createWordSchema.parse(createWord)
    const wordExist = await prisma.word.count({
      where: {
        name: data.name,
      },
    });

    if (wordExist > 0) {
      throw new Error(`Palavra ${data.name} já existe.`);
    }

    return prisma.word.create({
      data
    });
  }

  findAll() {
    return prisma.word.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: number) {
    return prisma.word.findFirstOrThrow({
      where: { id },
    });
  }

  update(id: number, updateWord: UpdateWordType) {
    const data = updateWordSchema.parse(updateWord)
    return prisma.word.update({
      where: { id },
      data
    });
  }

  remove(id: number) {
    return prisma.word.delete({
      where: { id },
    });
  }

}