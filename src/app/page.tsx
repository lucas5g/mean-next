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

export const dynamic = "force-dynamic";

export default async function Home() {

  const [resWords, resBooks] = await Promise.all([
    fetch(env.API + '/words'),
    fetch(env.API + '/books')
  ])

  const [words, books] = await Promise.all([
    resWords.json(),
    resBooks.json()
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
