'use client'
import clsx from 'clsx';
import { useContext } from 'react';
import { api } from '../app/libs/api';
import { useWordContext } from '../contexts/WordContext';



interface Props {
  fixed?: boolean;
}
export function List({ fixed = false }: Props) {

  const { words, setWords } = useWordContext()

  // if(words.length === 0)return <h1>Carregando</h1>

  return (

    <ul
      className={clsx('grid md:grid-cols-3 lg:grid-cols-5 gap-5 grid-cols-1', {
        'grid-cols-1': words.length === 1,
        'grid-cols-2 lg:grid-cols-2': words.length === 2,
      })}
    >
      {words
        .filter((word) => word.fixed === fixed)
        .map((word) => {
          return (
            <li
              key={word.id}
              className={clsx('p-2 border rounded-xl hover:cursor-pointer ', {
                'bg-gray-600 hover:bg-gray-700': word.fixed,
                'hover:bg-gray-900': !word.fixed,
              })}
              onClick={async () => {

                api.patch('/words/'.concat(word.id), {
                  fixed: !word.fixed,
                });


                const updateWords = words.map((row) => {
                  if (row.id === word.id) {
                    row.fixed = !row.fixed;
                  }
                  return row;
                });

                setWords(updateWords);          

              }}
            >
              <strong className="pr-2">{word.name.toUpperCase()}</strong>
              <div>{word.meaning}</div>
            </li>
          );
        })}
    </ul>
  );
}
