import { Input } from "@/app/components/Input";
import { List } from "@/app/components/List";
import { Main } from "@/app/components/Main";
// import { Main } from "@/app/components/Main";
import { WordContext } from "@/app/contexts/WordContext";
interface WordInterface {
  id: string;
  name: string;
  meaning: string;
  fixed: boolean;
}


export default async function Home() {

  const res = await fetch('https://frightened-blazer-dog.cyclic.app/words')

  const data:WordInterface[] = await res.json()

  return (
    <Main  words={data} />
  );
}
