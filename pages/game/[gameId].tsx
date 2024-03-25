import GameButton from '@/components/GameButton';
import Infos from '@/components/Infos';
import Navbar from '@/components/Navbar';
import Platforms from '@/components/Platforms';
import useGame from '@/hooks/useGame';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'


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

const Game = () => {

    const router = useRouter();

    const { gameId } = router.query;

    const { data } = useGame(gameId as string);

    

    return (
        <div className="w-4/5 min-w-[800px] h-[865px] bg-black flex flex-col relative overflow-y-scroll">
            <Navbar showLogo={false} />
            <div className='w-full h-auto'>
                <img className='w-full object-cover brightness-[60%]' src={data?.bigBg} alt={data?.title} />
            </div>
            <div className='absolute left-[8%] top-[15%] flex flex-col gap-5'>
                <Image src={`/images/${data?.bigLogo}`} alt={data?.title} height={100} width={300}/>
                <GameButton gameId={gameId as string}/>
            </div>
            <div className='absolute left-[8%] top-[65%] flex flex-col gap-2 font-REM'>
                <p className='text-white text-2xl font-bold'>{data?.descTitle}</p>
                <p className='text-white text-2xl'>{data?.descShort}</p>
            </div>
            <div className='py-24 pl-32 flex flex-col gap-44 font-REM w-full h-full bg-zinc-900'>
              <div className='flex flex-row'>
              <p className='text-white text-3xl text-center w-10'>Platform Uygunluk</p>
              <Platforms platforms={data?.platforms}/>
              </div>
              <div className='flex flex-row gap-44'>
              <p className='text-white text-3xl text-center w-10'>Ayrıntılı Bilgi</p>
              <Infos website={data?.website} developer={data?.developer} publisher={data?.publisher} releaseDate={data?.releaseDate}/>
              </div>
             
            </div>
        </div>
    )
}

export default Game