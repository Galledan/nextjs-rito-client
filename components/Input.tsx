import React from 'react'

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string
}

const Input: React.FC<InputProps> = ({id,onChange,value,label,type}) => {
  return (
    <div className='relative flex justify-center w-full'>
    <input
    onChange={onChange}
    type={type}
    value={value}
    id={id} 
    className='
    block 
    rounded-md
    px-3
    pt-4
    pb-1
    h-[50px] 
    w-3/4
    text-xl 
    text-zinc-700
    bg-neutral-200
    font-semibold
    bg-opacity-70
    peer
    focus:bg-white' 
    placeholder=' ' />
    <label 
    className={`
    absolute 
    text-[11px]
    text-zinc-600
    font-REM
    opacity-80
    font-bold
    duration-150 
    transform 
    -translate-y-3
    top-4 
    z-10 
    left-16
    ${value ? '-translate-x-2' : ''} 
    peer-placeholder-shown:translate-y-0
    peer-focus:-translate-y-3
    peer-focus:-translate-x-2
    `} htmlFor={id}>{label}</label>
</div>
  )
}

export default Input