export default async function Test() {

  const res = await fetch('http://localhost:3000/api/words')

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