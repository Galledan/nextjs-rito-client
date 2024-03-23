import React from 'react'
import GameCard from './GameCard';
import { isEmpty } from 'lodash'

interface GamesProps {
    data: Record<string, any>;
    title: string;
    bg: string;
}

const Games: React.FC<GamesProps> = ({ data, title,bg }) => {



    return (
        <div className={`flex ${bg} min-h-[800px] h-full`}>
            <div className='flex flex-col justify-center pl-24 pt-16'>
                <h1 className='text-3xl text-white font-REM font-semibold'>{title}</h1>
                <div className='mt-5 flex flex-row flex-wrap w-full gap-8'>
                    {!isEmpty(data) && data.map((game: any) => (
                        <GameCard key={game.id} data={game} />
                    ))}

                </div>
            </div>


        </div>
    )
}

export default Games