'use client'
import { useState } from "react";
export interface WordInterface {
  id: string;
  name: string;
  meaning: string;
  fixed: boolean;
}

interface Props {
  words: WordInterface[]
}


export function Main({ words: data }: Readonly<Props>) {
  const [words, setWords] = useState(data)

  return (
    <WordContext.Provider value={{ words, setWords }} >

      <main className="min-h-screen lg:p-20 p-10 space-y-6 text-white bg-gray-800">
        <Input
          data={data}
        />
        <List fixed />
        <List />
      </main>
    </WordContext.Provider>
  )
}