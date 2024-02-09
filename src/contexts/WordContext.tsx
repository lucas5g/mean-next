'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
interface Props {
  children: ReactNode
}
export interface WordInterface {
  id: string;
  name: string;
  meaning: string;
  fixed: boolean;
}

interface ContextInterface {
  words: WordInterface[]
  setWords: Dispatch<SetStateAction<WordInterface[]>>
}

export const WordContext = createContext({} as ContextInterface);

export const WordProvider = ({ children }: Props) => {
  const [search, setSearch] = useState('')
  const [words, setWords] = useState([] as WordInterface[])

  return (
    <WordContext.Provider value={{ words, setWords }}>
      {children}
    </WordContext.Provider>
  )
}

export const useWordContext = () => useContext(WordContext)