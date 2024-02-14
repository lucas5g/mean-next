import { env } from "@/util/env";
import { Input } from "../components/Input";
import { List } from "../components/List";
import { Form } from "@/components/word/Form";
export interface WordInterface {
  id: string;
  name: string;
  meaning: string;
  fixed: boolean;
}


export default async function Home() {

  const res = await fetch('https://frightened-blazer-dog.cyclic.app/words', {
    cache: 'no-cache'
  })

  const data = await res.json()

  const resBooks = await fetch('https://frightened-blazer-dog.cyclic.app/books', {
    cache: 'no-cache'
  })

  const books = await resBooks.json()

  return (
    <>
      <Input
        words={data}
      />
      <List fixed />
      <List />
      <Form 
        books={books}
        />
    </>

  );
}
