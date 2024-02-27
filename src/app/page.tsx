import { env } from "@/util/env";
import { Input } from "../components/Input";
import { List } from "../components/List";
import { Form } from "@/components/word/Form";
import { WordService } from "@/services/word.service";
import { BookService } from "@/services/book.service";

const wordService = new WordService()
const bookService = new BookService()

export default async function Home() {

  const [words, books] =  await Promise.all([
    wordService.findAll(),
    bookService.findAll()
  ])


  return (
    <>
      <Input
        words={words}
      />
      <List fixed />
      <List />
      <Form
        books={books}
      />
    </>

  );
}
