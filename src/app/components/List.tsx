'use client'
import {  WordContext } from '@/app/contexts/WordContext';
import clsx from 'clsx';
import { useContext } from 'react';



interface Props {
  fixed?: boolean;
}
export function List({ fixed = false }: Props) {
  const { words } = useContext(WordContext)
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
                // await api.patch('words/'.concat(word.id), {
                //   fixed: !word.fixed,
                // });

                const updateWords = words.map((row) => {
                  if (row.id === word.id) {
                    row.fixed = !row.fixed;
                  }
                  return row;
                });

                // setWords(updateWords);
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
