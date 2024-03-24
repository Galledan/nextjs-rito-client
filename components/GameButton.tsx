import useCurrentUser from '@/hooks/useCurrentUser';
import useGames from '@/hooks/useGames';
import axios from 'axios';
import React, { useCallback, useMemo } from 'react'
import { BsFillPlayFill } from 'react-icons/bs';

interface GameButtonProps {
    gameId: string
}

const GameButton: React.FC<GameButtonProps> = ({ gameId }) => {

    const { mutate: mutateDownloaded } = useGames();

    const { data: currentUser, mutate } = useCurrentUser();

    const isDownloaded = useMemo(() => {
        const list = currentUser?.games || [];

        return list.includes(gameId)
    }, [currentUser,gameId])


    const toggleDownloaded = useCallback(async () => {
        let response;

    if (isDownloaded) {
      response = await axios.delete('/api/game', { data: { gameId } })
    } else {
      response = await axios.post('/api/game', { gameId })
    }

    const updatedGames = response?.data?.games;

    mutate(({
      ...currentUser, games: updatedGames
    }))

    mutateDownloaded()
    },[gameId, isDownloaded,currentUser,mutate,mutateDownloaded])



    return (
        <button onClick={toggleDownloaded} className='bg-blue-400 w-3/5 rounded-2xl flex flex-row items-center gap-5 py-3 px-3'>
            <div className=" bg-black rounded-full text-3xl py-2 px-2 font-semibold flex flex-row items-center justify-center hover:scale-125 transition ">
                <BsFillPlayFill color='white'/>
            </div>
            <p className='text-3xl text-white font-REM'>{!isDownloaded ? 'Yükle' : 'Oyna'}</p>
        </button>
    )
}

export default GameButton