import { revalidateTag, unstable_cache } from "next/cache"
import { Form } from "../../components/book/Form"
import { BookService } from "@/services/book.service"

const bookService = new BookService()

export default async function Book() {

  const findAllBooks = unstable_cache(async () => {
    return await bookService.findAll()
  }, ['books'], {
    revalidate: false,
    tags: ['books']
  })

  const books = await findAllBooks()
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
                  {book._count?.words}
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