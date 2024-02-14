import { env } from "@/util/env"
import { Form } from "@/components/book/Form"

interface BookInterface {
  id: number
  name: string
  _count: {
    words: number
  }
}

export default async function Book() {

  const res = await fetch(env.NEXT_PUBLIC_API + '/books', {
    cache: 'no-cache'
  })
  const books: BookInterface[] = await res.json()

  return (
    <div className="flex justify-center">
      <table className="w-full">
        <thead className="text-left">
          <tr className="border-b">
            {['Nome', 'Palavras'].map(title => {
              return (
                <th key={title} className="p-2">
                  {title}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {books.map(book => {
            return (
              <tr key={book.id}>
                <td className="p-2">
                  {book.name}
                </td>
                <td>
                  {book._count.words}
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>

      <Form />
    </div>
  )
}