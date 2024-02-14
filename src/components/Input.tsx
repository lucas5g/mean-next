'use client'
import clsx from "clsx";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { WordInterface, useWordContext } from '@/contexts/WordContext'


const searchText = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

interface Props{
  words: WordInterface[]
}

export function Input({words:data}:Props) {

  const [search, setSearch] = useState('')
  const { setWords, words } = useWordContext()

  useEffect(() => {
    const wordsList = data.filter((word) => {
      return searchText(word.name).includes(search.trim());
    });

    setWords(wordsList)

  },[search])

  return (
    <div className="flex items-center relative justify-end">
      <input
        placeholder="Type word"
        className="w-full p-5 font-semibold text-white bg-gray-600 border rounded-xl placeholder:text-white"
        onChange={(event) => setSearch(searchText(event.target.value))}
        value={search}
      />
      <X
        className={clsx('absolute mr-5 size-8 hover:cursor-pointer', {
          hidden: search.length === 0,
        })}
        onClick={() => setSearch('')}
      />
    </div>
  )
}