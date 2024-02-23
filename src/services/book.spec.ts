import { BookService } from '@/services/book.service'
import { describe, expect, it } from 'vitest'

const service = new BookService()
describe('Word', async() => {

  it('create', async() => {
    const res = await service.create({
      name: 'teste'
    });

    expect(res).toHaveProperty('name')

    await service.remove(res.id)
  })
})