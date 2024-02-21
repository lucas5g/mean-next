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
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { BookInterface } from "./List"


export function Form() {
  const [open, setOpen] = useState(false)

  function handleSubmit(event: FormEvent) {
    // event.preventDefault()
    // api.post('/books', book)
    //   .catch(error => {
    //     console.log(error)
    //     alert('Erro ao cadastrar o livro')
    //     location.reload()
    //   })

    // axios.get('/api/cache?revalidate=books')

    // setBooks([
    //   ...books, {
    //     ...book,
    //     id: new Date().valueOf(),
    //     _count: {
    //       words: 0
    //     }
    //   }
    // ])

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-gray-500 fixed bottom-7 right-5 rounded-full p-3 hover:bg-gray-400" >
        <Plus size={25} />
      </DialogTrigger>
      < DialogContent className="bg-gray-700" >
        <DialogHeader>
          <DialogTitle>Informações do Livro </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input
            className="p-3 rounded bg-gray-500 placeholder:text-gray-300 font-bold text-gray-100 w-full"
            placeholder="Nome"
            // value={book?.name ?? ''}
            name='nome'
            // onChange={event => setBook({ ...book, name: event.target.value })}
          />
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