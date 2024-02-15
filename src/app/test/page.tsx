import { Word } from "@prisma/client"

export default async function Test() {

  const res = await fetch(process.env.API + '/words')

  const words:Word[] = await res.json()

  return (
    <table>
      <tbody>

        {words.map(word => {
          return (
            <tr key={word.id}>
              <td>{word.name}</td>
              <td>{word.name}</td>
              <td>{word.name}</td>

            </tr>
          )
        })}
      </tbody>
    </table>
  )
}