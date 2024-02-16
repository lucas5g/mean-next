'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
interface Props {
  children: ReactNode
}
export interface WordInterface {
  id: number;
  name: string;
  meaning: string;
  fixed: boolean;
  bookId: number
}

interface ContextInterface {
  words: WordInterface[]
  setWords: Dispatch<SetStateAction<WordInterface[]>>
  word: WordInterface 
  setWord: Dispatch<SetStateAction<WordInterface>>
}

export const WordContext = createContext({} as ContextInterface);

export const WordProvider = ({ children }: Props) => {
  const [word, setWord] = useState({} as WordInterface)
  const [words, setWords] = useState([] as WordInterface[])

  return (
    <WordContext.Provider value={{ words, setWords, word, setWord }}>
      {children}
    </WordContext.Provider>
  )
}

export const useWordContext = () => useContext(WordContext)