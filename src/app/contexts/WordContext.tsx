'use client'
import { createContext } from "react";

interface WordInterface {
  id: string;
  name: string;
  meaning: string;
  fixed: boolean;
}


interface ContextInterface {
  words: WordInterface[]
}

export const WordContext = createContext({} as ContextInterface );
