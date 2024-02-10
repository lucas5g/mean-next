import { Input } from "../components/Input";
import { List } from "../components/List";


export interface WordInterface {
  id: string;
  name: string;
  meaning: string;
  fixed: boolean;
}


export default async function Home() {

  const res = await fetch('http://localhost:3000/api/words', {
    cache: 'no-cache'
    // next:{
    //   revalidate: 5
    // }
  })

  const data = await res.json()

  return (
    <>
      <Input
        words={data}
      />
      <List fixed />
      <List />

    </>

  );
}
