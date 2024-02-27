import { WordService } from '@/services/word.service'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const service = new WordService()
describe('Word', async() => {

  let id:number

  beforeAll(async() => {
    const res = await service.create({
      bookId: 1,
      fixed: false,
      meaning: 'significado-test',
      name: 'word-test'

    })

    id = res.id
  })

  afterAll(async() => {
    await service.remove(id)
  })
  it('find all', async() => {
    const res = await service.findAll()

    res.forEach(row => {
      ['bookId', 'fixed', 'meaning', 'name'].forEach(property => {
        expect(row).toHaveProperty(property)
      })
    })
  })

  it('find one', async() => {
    const res = await service.findOne(id);
    ['bookId', 'fixed', 'meaning', 'name'].forEach(property => {
      expect(res).toHaveProperty(property)
    })
  })

  it('update', async() => {
    const data = {
      name: 'test-update-123'
    }

    const res = await service.update(id, data)

    expect(res).toMatchObject(data)
  })


})