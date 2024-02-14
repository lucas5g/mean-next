'use client'
import { BookInterface } from "@/components/book/Form"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { api } from "@/lib/api"
import { Plus } from "lucide-react"
import { FormEvent, useState } from "react"

interface WordInterface {
  name: string
  bookId: number
  meaning: string
  fixed?: boolean
}

interface Props {
  books: {
    id: number
    name: string
  }[]
}

export function Form({ books }: Props) {

  const [word, setWord] = useState({} as WordInterface)

  async function handleSubmit(event: FormEvent) {

    event.preventDefault()
    try {
      word.fixed = false
      await api.post('/words', word)
      location.reload()
    } catch (error) {
      console.log(error)
    } finally {
      console.log('finally')
    }

  }

  return (
    <Dialog>
      <DialogTrigger className="bg-gray-500 fixed bottom-7 right-5 rounded-full p-3 hover:bg-gray-400" >
        <Plus size={25} />
      </DialogTrigger>
      < DialogContent className="bg-gray-700" >
        <DialogHeader>
          <DialogTitle>Informações da Palavra</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input
            className="p-3 rounded bg-gray-500 placeholder:text-gray-300 font-bold text-gray-100 w-full"
            placeholder="Nome"
            value={word?.name}
            name='name'
            onChange={event => setWord({ ...word, name: event.target.value })}
          />

          <textarea
            name="meaning"
            className="w-full rounded h-24 bg-gray-500 p-3 font-bold placeholder:text-gray-300 text-gray-200"
            placeholder="Significado"
            value={word?.meaning}
            onChange={event => setWord({ ...word, meaning: event.target.value })}
          // cols={30}
          // rows={10}
          >

          </textarea>
          <select
            name="bookId"
            className="p-3 rounded bg-gray-500 placeholder:text-gray-300 font-bold text-gray-100 w-full"
            value={word?.bookId}
            onChange={event => setWord({ ...word, bookId: Number(event.target.value) })}
            required
          >
            <option value="">Livros</option>
            {books.map(book => {
              return (
                <option
                  key={book.id}
                  value={book.id}
                  className="p-3 optional:bg-green-600"
                >
                  {book.name}
                </option>
              )
            })}
          </select>

          <footer className="space-x-3 flex justify-end" >
            <DialogClose>

              <button
                className="bg-gray-200 hover:bg-gray-100 w-24 h-10 rounded font-bold text-gray-500 border-gray-800"
                type="reset"
              >
                Cancelar
              </button>
            </DialogClose>
            <button className="bg-gray-900 hover:bg-gray-950 font-bold w-24 h-10 rounded">
              Cadastrar
            </button>
          </footer>
        </form>
      </DialogContent>
    </Dialog>
  )

}