'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { api } from "@/lib/api"
import axios from "axios"
import { Plus } from "lucide-react"
import { FormEvent, useState } from "react"
import { WordInterface, useWordContext } from "../../contexts/WordContext"

interface Props {
  books: {
    id: number
    name: string
  }[]
}

export function Form({ books }: Props) {

  const [open, setOpen] = useState(false);

  const { setWords, words, word, setWord } = useWordContext()

  async function handleSubmit(event: FormEvent) {


    event.preventDefault()
    word.fixed = false
    api.post('/words', word)
      .catch(error => {
        if (error.response.status !== 400) {
          console.log(error)
          alert('Erro ao criar palavra')
        }
        alert(error.response.data.message)
        window.location.reload()

      })

    axios.get('/api/cache?revalidate=books')


    const newListWords = [...words, {
      ...word,
      id: new Date().valueOf()
    }]

    setWords(newListWords)
    
    setWord({} as WordInterface)

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            className="w-full rounded h-36 bg-gray-500 p-3 font-bold placeholder:text-gray-300 text-gray-200"
            placeholder="Significado"
            value={word?.meaning}
            onChange={event => setWord({ ...word, meaning: event.target.value })}

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
            <DialogClose
              className="bg-gray-200 hover:bg-gray-100 w-24 h-10 rounded font-bold text-gray-500 border-gray-800"
              type="reset"
            >
              Cancelar
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