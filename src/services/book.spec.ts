import { BookService } from '@/services/book.service'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { randomInt } from 'crypto'
const service = new BookService()
describe('Book', async () => {

  let id: number

  beforeAll(async () => {
    const res = await service.create({
      name: `test-${randomInt(1000)}`
    });

    expect(res).toHaveProperty('name')

    id = res.id

  })

  afterAll(async () => {
    await service.remove(id)

  })

  it('find all', async () => {
    const res = await service.findAll();
    res.forEach(row => {

      ['name'].forEach(property => {
        expect(row).property(property)
      })
    })
  })

  it('find one', async () => {
    const res = await service.findOne(id);

    ['name'].forEach(property => {
      expect(res).property(property)
    })
  })

  it('update', async() => {
    const data = {
      name: 'test-update'
    }
    const res = await service.update(id, data)

    expect(res).toMatchObject(data)
  })
})