import React from 'react'

interface InfosProps {
    website: String
    developer: String
    publisher: String
    releaseDate: String
}

const Infos:React.FC<InfosProps> = ({website,developer,publisher,releaseDate}) => {
  return (
    <div className='flex flex-row gap-10 ml-52'>
        <div className='flex flex-col gap-3'>
            <p className='text-zinc-700'>İNTERNET SİTESİ</p>
            <a href={website as string}><p className='text-zinc-400 cursor-pointer'>{website}</p></a>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-zinc-700'>GELİŞTİRİCİ</p>
            <p className='text-zinc-400'>{developer}</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-zinc-700'>YAYINCI</p>
            <p className='text-zinc-400'>{publisher}</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-zinc-700'>ÇIKIŞ TARİHİ</p>
            <p className='text-zinc-400'>{releaseDate}</p>
        </div>
    </div>
  )
}

export default Infos