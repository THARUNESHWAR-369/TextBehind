'use client';

import { HOME_ROUTE } from '@/constants/routes';
import useAuthentication from '@/hooks/useAuthentication';
import { UserAuth } from '@/lib/firebase/context/AuthContext';
import { Button } from '@nextui-org/button'
import { Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function NavBar() {
    const { user, logOut } = UserAuth();

    const router = useRouter();

    useAuthentication();
    const [DD, setDD] = useState(false);

    const handleSignOut = async () => {
        try {
            await logOut();
            router.push(HOME_ROUTE);
        } catch (error) {
            console.error(error);
        }
    }

    const showDD = () => {
        setDD(!DD);
    }

    return (
        <nav className="bg-white/[0.05] backdrop-blur-3xl border-[0.1px] border-black/50 shadow-sm sticky top-0 z-[25] max-w-[1500px] rounded-full w-[80%] mx-auto my-5">
            {user.isLogin ? (
                <div className={`flex justify-between items-center py-3 px-10 `}>
                    <Link href={`${user ? '/app' : '/'}`} >
                        <h1 className="text-3xl font-thin capitalize ">
                            <span>T</span>
                            <span>e</span>
                            <span>x</span>
                            <span>t</span>
                            <span className='italic font-medium'>B</span>
                            <span>e</span>
                            <span>h</span>
                            <span>i</span>
                            <span>n</span>
                            <span>d</span>
                        </h1>
                    </Link>
                    <div className="flex flex-row gap-5">

                        <Button color="danger" variant="bordered" className="rounded-full px-5  flex gap-1 max-[530px]:hidden" startContent={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f31260"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>} >
                            Logout
                        </Button>
                        <div className='relative'>
                            <Avatar onClick={showDD} isBordered color="primary" src={user?.photoURL ?? ''} />

                            {
                                DD && (
                                    <div className='hidden max-[530px]:flex absolute bg-white/10 backdrop-blur-md top-12 -right-1 rounded-md w-fit h-fit p-2'>
                                        <Button onClick={handleSignOut} color="danger" variant="bordered" className="rounded-full px-5  flex gap-1" startContent={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f31260"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>} >
                                            Logout
                                        </Button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            )
                : (
                    <div className={`flex justify-center items-center py-3 px-10 `}>
                        <Link href={`${user ? '/app' : '/'}`} >
                            <h1 className="text-3xl font-thin capitalize ">
                                <span>T</span>
                                <span>e</span>
                                <span>x</span>
                                <span>t</span>
                                <span className='italic font-medium'>B</span>
                                <span>e</span>
                                <span>h</span>
                                <span>i</span>
                                <span>n</span>
                                <span>d</span>
                            </h1>
                        </Link>
                    </div>
                )}
        </nav >
    );
}
export default NavBar
