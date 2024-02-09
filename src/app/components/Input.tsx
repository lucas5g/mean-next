'use client'
import clsx from "clsx";
import { X } from "lucide-react";

export function Input() {

  return (
    <div className="flex items-center relative justify-end">
      <input
        placeholder="Type word"
        className="w-full p-5 font-semibold text-white bg-gray-600 border rounded-xl placeholder:text-white"
      // onChange={(event) => setSearch(searchText(event.target.value))}
      // value={search}
      />
      <X
        className={clsx('absolute mr-5 size-8 hover:cursor-pointer', {
          // hidden: search.length === 0,
        })}
      // onClick={() => setSearch('')}
      />
    </div>
  )
}