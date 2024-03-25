import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'


interface GameCardProps {
    data: Record<string, any>
    biggerSize: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ data, biggerSize }) => {


    const router = useRouter()

    return (
        <div onClick={() => router.push(`/game/${data?.id}`)} className='flex flex-col gap-4 '>
            <img className={`
        cursor-pointer
        object-cover
        rounded-md
        ${biggerSize ? 'w-[400px]'  :'w-[300px]'}
        ${biggerSize ? 'h-[275px]'  :'h-[200px]'}
        hover:border-4 
        hover:border-gray-500` } src={data.thumbnailUrl} alt={data.title} />
            <div className='flex flex-row items-center gap-3'>
                <Image src={`/images/${data.logo}`} alt={data.title} height={30} width={30} />
                <p className='font-REM text-lg text-white'>{data.title}</p>
            </div>

        </div>
    )
}

export default GameCard