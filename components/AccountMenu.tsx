import { signOut } from 'next-auth/react';
import React from 'react';

import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {

    const { data: currentUser } = useCurrentUser();

    if (!visible) {
        return null;
    }
    return (
        <div className='flex flex-col gap-5 absolute top-20 px-3 py-3  right-5 bg-zinc-800 font-REM z-10'>
            <div>
                <p className='text-lg text-center text-white'>{currentUser.name}</p>
            </div>
            <div className='cursor-pointer' onClick={() => signOut()}>
                <p className='text-lg text-gray-400 hover:text-white'>OTURUMU KAPAT</p>
            </div>
        </div>
    )
}

export default AccountMenu