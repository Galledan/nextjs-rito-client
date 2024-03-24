import GameButton from '@/components/GameButton';
import Navbar from '@/components/Navbar';
import useGame from '@/hooks/useGame';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

const Game = () => {

    const router = useRouter();

    const { gameId } = router.query;

    const { data } = useGame(gameId as string);

    

    return (
        <div className="w-4/5 min-w-[800px] h-[865px] bg-black flex flex-col relative overflow-y-scroll">
            <Navbar />
            <div className='absolute left-[8%] top-[15%] flex flex-col gap-5'>
                <Image src={`/images/${data?.bigLogo}`} alt={data?.title} height={100} width={300}/>
                <GameButton gameId={gameId as string}/>
            </div>
            
        </div>
    )
}

export default Game