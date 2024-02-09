'use client'
import { Dispatch, SetStateAction, createContext } from "react";
import { WordInterface } from "../components/Main";


interface ContextInterface {
  words: WordInterface[]
  setWords:  Dispatch<SetStateAction<WordInterface[]>>;
}

export const WordContext = createContext({} as ContextInterface );
