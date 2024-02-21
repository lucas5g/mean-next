'use client'
import { useEffect, useState } from "react"
import { Form } from "./Form"

export interface BookInterface {
  id: number
  name: string
  _count?: {
    words: number
  }
}
interface Props {
  books: BookInterface[]
}


export function List({books}: Props) {

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
          {books?.map(book => {
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

      {/* <Form
        books={books}
        setBooks={setBooks}
      /> */}
    </div>
  )
}