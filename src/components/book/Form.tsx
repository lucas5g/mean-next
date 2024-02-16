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

export interface BookInterface{
  name: string
}

export function Form() {

  const [book, setBook] = useState<BookInterface>()

  async function handleSubmit(event:FormEvent){
    event.preventDefault()
    try{
      await api.post('/books', book)
      axios.get('/api/cache?revalidate=books')

      location.reload()
    }catch(error){
      console.log(error)
    }finally{
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
          <DialogTitle>Informações do Livro </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input
            className="p-3 rounded bg-gray-500 placeholder:text-gray-300 font-bold text-gray-100 w-full"
            placeholder="Nome"
            value={book?.name}
            name='nome'
            onChange={event => setBook({...book, name: event.target.value})}
          />
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