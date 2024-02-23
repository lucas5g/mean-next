import { Word } from "@prisma/client";
import { prisma } from "../lib/prisma";

export class WordService {
  async create(data: Word) {
    const wordExist = await prisma.word.count({
      where: {
        name: data.name,
      },
    });

    // console.log(wordExist == true )

    if (wordExist > 0) {
      throw new Error(`Palavra ${data.name} já existe.`);
    }

    return prisma.word.create({
      data
    });
  }

  findAll() {
    return this.prisma.word.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.word.findFirstOrThrow({
      where: { id },
    });
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return this.prisma.word.update({
      where: { id },
      data: updateWordDto,
    });
  }

  remove(id: number) {
    return this.prisma.word.delete({
      where: { id },
    });
  }

}