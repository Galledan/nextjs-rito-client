import React from 'react'
import { FaApple, FaDesktop, FaGooglePlay, FaMobile, FaWindows } from 'react-icons/fa'

interface PlatformsProps {
    platforms: Array<String>
}

const Platforms: React.FC<PlatformsProps> = ({ platforms }) => {

    return (
        <div className='flex flex-col gap-10 ml-96' >
            {platforms?.map((platform, index) => (
                <div key={index}>
                    {platform === "PC" &&
                        <div className='flex flex-row gap-5 items-center'>
                            <FaDesktop className='text-3xl' color='white'/>
                            <div className='flex flex-row gap-2 px-3 py-5 bg-zinc-800 rounded-3xl text-white text-xl items-center hover:bg-zinc-600 cursor-pointer'>
                                <FaWindows /> <p>Windows</p>
                            </div>
                            <div className='flex flex-row gap-2 px-3 py-5 bg-zinc-800 rounded-3xl text-white text-xl items-center hover:bg-zinc-600  cursor-pointer'>
                                <FaWindows /> <p>MacOS</p>
                            </div>
                        </div>
                    }
                    {platform === "Mobile" &&
                        <div className='flex flex-row gap-5 items-center'>
                            <FaMobile className='text-3xl' color='white'/>
                            <div className='flex flex-row gap-2 px-3 py-5 bg-zinc-800 rounded-3xl text-white text-xl items-center hover:bg-zinc-600  cursor-pointer'>
                            <FaApple /> <p>iOS App Store</p>
                            </div>
                            <div className='flex flex-row gap-2 px-3 py-5 bg-zinc-800 rounded-3xl text-white text-xl items-center hover:bg-zinc-600  cursor-pointer'>
                            <FaGooglePlay /> <p>Google Play</p>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default Platforms
