'use client'
import { Input } from "@/app/components/Input";
import { List } from "@/app/components/List";
import { WordContext } from "@/app/contexts/WordContext";
interface WordInterface {
  id: string;
  name: string;
  meaning: string;
  fixed: boolean;
}

interface Props {
  words: WordInterface[]
}


export function Main({ words }: Props) {
  return (
    <WordContext.Provider value={{words}} >

      <main className="min-h-screen lg:p-20 p-10 space-y-6 text-white bg-gray-800">
        <Input />
        <List fixed />
        <List />
      </main>
    </WordContext.Provider>
  )
}