import { env } from "@/util/env";
import { Input } from "../components/Input";
import { List } from "../components/List";
export interface WordInterface {
  id: string;
  name: string;
  meaning: string;
  fixed: boolean;
}


export default async function Home() {

  // await setTimeout(30000)
  const res = await fetch(env.NEXT_PUBLIC_API + '/words', {
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
