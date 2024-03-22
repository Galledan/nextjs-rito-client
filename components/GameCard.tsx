import { useRouter } from 'next/router'
import React from 'react'


interface GameCardProps {
    data: Record<string, any>
}

const GameCard: React.FC<GameCardProps> = ({ data }) => {


    const router = useRouter()

    return (
        <div className='flex flex-col gap-4'>
            <img className=' 
        cursor-pointer
        object-cover
        rounded-md
        w-[300px]
        h-[200px]' src={data.thumbnailUrl} alt={data.title} />
            <div>
                <p className='text-xl text-white'>{data.title}</p>
            </div>

        </div>
    )
}

export default GameCard