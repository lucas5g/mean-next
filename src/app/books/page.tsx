import { env } from "@/util/env"
import { List } from "../../components/book/List"



export default async function Book() {

  const res = await fetch(env.API + '/books')
  const books = await res.json()

  return <List books={books} />
}