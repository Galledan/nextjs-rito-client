import Image from 'next/image'
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { HiMiniSquares2X2 } from 'react-icons/hi2'
import AccountMenu from './AccountMenu'

const Navbar = () => {


    const [showAccountMenu, setShowAccountMenu] = useState(false)

    const toggleAccountMenu = () => {
        setShowAccountMenu(!showAccountMenu);
    }

  return (
    <>
        <div className="absolute top-5 left-5 cursor-pointer h-10 px-3 py-3 rounded-lg bg-zinc-800 z-10">
      <HiMiniSquares2X2 className="text-gray-300"/>
      </div>
      <div className="absolute top-5 left-[45%] z-10">
      <Image src="/images/logo-white.png" alt='logo' height={75} width={120} />
      </div>
      <div onClick={toggleAccountMenu} className="absolute top-5 right-5 cursor-pointer h-10 px-3 py-3 rounded-full bg-zinc-800 z-10">
      <FaUser className="text-gray-300" />
      </div>
      <AccountMenu visible={showAccountMenu}/>
    </>
  )
}

export default Navbar