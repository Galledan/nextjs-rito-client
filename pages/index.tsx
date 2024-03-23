import Games from "@/components/Games";
import Navbar from "@/components/Navbar";
import useGameList from "@/hooks/useGameList";
import { NextPageContext } from "next";
import { getSession} from "next-auth/react";


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  console.log(session);
  
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {session}
  }

}


export default function Home() {

  const {data:games = []} = useGameList()
  
  return (
   <div className="w-4/5 min-w-[800px] h-[865px] bg-black flex flex-col relative overflow-y-scroll">
      <Navbar />
      <Games title='Oyunlarım' data={games} bg="bg-zinc-900"/>
      <Games title="Tüm Oyunlar" data={games} bg="bg-black"/>
   </div>
  );
}
