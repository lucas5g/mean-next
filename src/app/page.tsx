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
    // cache: 'no-cache'
    // next:{
    //   revalidate: 5
    // }
  })

  const data = await res.json()

  return (

    <main 
    // className="min-h-screen lg:p-20 p-10 space-y-6 text-white bg-gray-800"
    >

      {/* <Input
        words={data}
      />

      <List fixed />
      <List /> */}
    </main>

  );
}
