import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import Input from './Input'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'


const LoginSide = () => {

  const router = useRouter()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        name,
        password,
        redirect: false,
        callbackUrl: '/'
      });

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }, [name, password, router]);


  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        name,email,password
      })
    } catch (error) {
      console.log(error);
      
    }
  },[name,email,password])

  return (
    <div className='w-1/4 h-full bg-white'>
      <div className='flex flex-col'>
        <div className='w-full mt-12 flex flex-col items-center justify-center gap-14'>
          <Image src="/images/logo.jpg" alt='logo' height={75} width={120} />
          <div className='w-full flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl font-REM font-semibold '>{variant === 'login' ? 'Giriş yap' : 'Kayıt ol'}</h1>
            <div className='w-full flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <Input id={name} type='text' onChange={(e: any) => setName(e.target.value)} value={name} label='KULLANICI ADI' />
                {variant === 'register' && <Input id={email} type='email' onChange={(e: any) => setEmail(e.target.value)} value={email} label='EMAİL' /> }
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
              onClick={variant === 'login' ? login : register}
              disabled={name === '' || password === '' ? true : false}
              className={`rounded-2xl px-5 py-5 ${name === '' || password === '' ? 'bg-zinc-100' : 'bg-red-500'}`}>
              <AiOutlineArrowRight size={30} className={`${name === '' || password === '' ? 'text-zinc-300' : 'text-white'}`} />
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