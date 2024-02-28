// 'use server'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"

import { Plus } from "lucide-react"
import { env } from "../../util/env"
import { revalidateTag } from "next/cache"
import { BookService, createBookSchema } from "@/services/book.service"

const bookService = new BookService()

export async function Form() {
  // const [open, setOpen] = useState(false)

  async function handleSubmit(formData: FormData) {
    'use server'

    const data = createBookSchema.parse(Object.fromEntries(formData.entries()))

    bookService.create(data)

    revalidateTag('books')

  }
  return (
    <form
      className="space-y-3"
      action={handleSubmit}
    >
      <input
        className="p-3 rounded bg-gray-500 placeholder:text-gray-300 font-bold text-gray-100 w-full"
        placeholder="Nome"
        // value={book?.name ?? ''}
        name='name'
      // onChange={event => setBook({ ...book, name: event.target.value })}
      />
      <footer className="space-x-3 flex justify-end" >
        <button className="bg-gray-900 hover:bg-gray-950 font-bold w-24 h-10 rounded">
          Cadastrar
        </button>
      </footer>
    </form>
  )

  // return (
  //   <Dialog
  //   //  open={open} onOpenChange={setOpen}
  //   >
  //     <DialogTrigger className="bg-gray-500 fixed bottom-7 right-5 rounded-full p-3 hover:bg-gray-400" >
  //       <Plus size={25} />
  //     </DialogTrigger>
  //     < DialogContent className="bg-gray-700" >
  //       <DialogHeader>
  //         <DialogTitle>Informações do Livro </DialogTitle>
  //       </DialogHeader>
  //       <form
  //         className="space-y-3"
  //         action={handleSubmit}
  //         method="POST"
  //       // onSubmit={handleSubmit}
  //       >
  //         <input
  //           className="p-3 rounded bg-gray-500 placeholder:text-gray-300 font-bold text-gray-100 w-full"
  //           placeholder="Nome"
  //           // value={book?.name ?? ''}
  //           name='name'
  //         // onChange={event => setBook({ ...book, name: event.target.value })}
  //         />
  //         <footer className="space-x-3 flex justify-end" >
  //           <DialogClose
  //             className="bg-gray-200 hover:bg-gray-100 w-24 h-10 rounded font-bold text-gray-500 border-gray-800"
  //             type="reset"
  //           >
  //             Cancelar
  //           </DialogClose>
  //           <button className="bg-gray-900 hover:bg-gray-950 font-bold w-24 h-10 rounded">
  //             Cadastrar
  //           </button>
  //         </footer>
  //       </form>
  //     </DialogContent>
  //   </Dialog>
  // )



}