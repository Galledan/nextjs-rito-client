import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';

interface GameButtonProps {
    label: string;
}

const GameButton: React.FC<GameButtonProps> = ({ label }) => {
    return (
        <button className='bg-blue-400 w-3/5 rounded-2xl flex flex-row items-center gap-5 py-3 px-3'>
            <div className=" bg-black rounded-full text-3xl py-2 px-2 font-semibold flex flex-row items-center justify-center hover:scale-125 transition ">
                <BsFillPlayFill color='white'/>
            </div>
            <p className='text-3xl text-white font-REM'>{label}</p>
        </button>
    )
}

export default GameButton