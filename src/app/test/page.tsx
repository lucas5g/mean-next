import { env } from "../../util/env"

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Test() {

  const res = await fetch(env.API_TEST + '/api/words')

  const data = await res.json()

  return (
    <div>
      {data.map((book: any) => {
        return (
          <p key={book.id}>{book.name}</p>
        )
      })}

    </div>
  )
}