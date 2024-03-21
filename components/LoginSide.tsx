import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import Input from './Input'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineArrowRight } from 'react-icons/ai'

const LoginSide = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, []);

  return (
    <div className='w-1/4 h-full bg-white'>
      <div className='flex flex-col'>
        <div className='w-full mt-12 flex flex-col items-center justify-center gap-14'>
          <Image src="/images/logo.jpg" alt='logo' height={75} width={120} />
          <div className='w-full flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl font-REM font-semibold '>{variant === 'login' ? 'Giriş yap' : 'Kayıt ol'}</h1>
            <div className='w-full flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <Input id={username} type='text' onChange={(e: any) => setUsername(e.target.value)} value={username} label='KULLANICI ADI' />
                <Input id={password} type='password' onChange={(e: any) => setPassword(e.target.value)} value={password} label='ŞİFRE' />
              </div>
              <div className="flex flex-row items-center gap-4 mt-2 justify-center">
                <div className="w-16 h-8  border-2 rounded-md flex items-center justify-center cursor-pointer  hover:bg-gray-300 transition">
                  <FcGoogle size={20} />
                </div>
                <div className="w-16 h-8 bg-black border-2 rounded-md flex items-center justify-center cursor-pointer  hover:bg-opacity-80 transition">
                  <FaGithub size={20} color='white' />
                </div>
              </div>
              <div className='w-full flex justify-center'>
                <p className='text-neutral-600 font-REM'>  {variant === 'login' ? 'İlk defa mı oynayacaksın?' : 'Zaten hesabın var mı?'}
                  <span onClick={toggleVariant} className="ml-1 text-black hover:underline cursor-pointer">
                    {variant === 'login' ? 'Hesap oluştur!' : 'Giriş yap!'}
                  </span></p>
              </div>
            </div>
          </div>
          <div className='mt-36'>
            <button
              disabled={username === '' || password === '' ? true : false}
              className={`rounded-2xl px-5 py-5 ${username === '' || password === '' ? 'bg-zinc-100' : 'bg-red-600'} bg-slate-100`}>
              <AiOutlineArrowRight size={30} className={`${username === '' || password === '' ? 'text-zinc-300' : 'text-white'}`} />
            </button>
          </div>
          <div className='mt-10 w-full flex flex-col gap-2'>
            <div className='ml-16 flex flex-row gap-8 justify-center' >
              <p className='font-REM font-bold cursor-pointer hover:text-zinc-900 text-zinc-600 text-[10px]'>GİRİŞ YAPAMIYOR MUSUN?</p>
              <span className='font-REM font-bold cursor-pointer hover:text-zinc-900 text-zinc-400 text-[10px]'>v82.0.2</span>
            </div>
            <p className='mx-8 text-center font-REM font-bold text-zinc-400 text-[10px]'>BU UYGULAMA HPCAPTCHA İLE KORUNUR VE ONUN GİZLİLİK POLİTİKASI VE HİZMET ŞARTLARI GEÇERLİDİR.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSide