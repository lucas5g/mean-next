import { prisma } from "../lib/prisma";

export class WordService {
  async create(createWordDto: CreateWordDto) {
    const wordExist = await prisma.word.count({
      where: {
        name: createWordDto.name,
      },
    });

    // console.log(wordExist == true )

    if (wordExist > 0) {
      throw new BadRequestException(`Palavra ${createWordDto.name} já existe.`);
    }

    return this.prisma.word.create({
      data: createWordDto,
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