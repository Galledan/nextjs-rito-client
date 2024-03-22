import Games from "@/components/Games";
import useGameList from "@/hooks/useGameList";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";

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
      <div className="absolute top-5 left-5 cursor-pointer h-10 px-3 py-3 rounded-lg bg-zinc-800 z-10">
      <HiMiniSquares2X2 className="text-gray-300"/>
      </div>
      <div className="absolute top-5 left-[45%] z-10">
      <Image src="/images/logo-white.png" alt='logo' height={75} width={120} />
      </div>
      <div onClick={() => signOut()} className="absolute top-5 right-5 cursor-pointer h-10 px-3 py-3 rounded-full bg-zinc-800 z-10">
      <FaUser className="text-gray-300" />
      </div>
      <Games title='Oyunlarım' data={games}/>
      <Games title="Tüm Oyunlar" data={games}/>
   </div>
  );
}
