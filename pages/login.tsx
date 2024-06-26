import LoginSide from '@/components/LoginSide'
import React from 'react'

const Login = () => {
  return (
    <div className="w-4/5 min-w-[800px] h-[865px] min-h-[600px] flex flex-row">
      <LoginSide />
      <div className="w-3/4">
          <img className="h-full w-full object-cover" src="/images/bg.jpg" alt="background" />
      </div>
   </div>
  )
}

export default Login