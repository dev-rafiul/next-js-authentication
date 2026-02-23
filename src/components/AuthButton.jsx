"use client"
import Link from 'next/link';
import React from 'react';
import LoginButton from './LoginButton';
import { signOut, useSession } from 'next-auth/react';

const AuthButton = () => {
    const session = useSession()
    return (
        <div>
            <div className="flex gap-5">
                {
                    session.status == "authenticated" ? <button className='btn' onClick={() => signOut()}>LogOut</button> : <>
        <LoginButton></LoginButton>
        <Link href={"/register"} className="btn">
          Register
        </Link>
                    </>
                }
        {/* <button className="btn">Login</button> */}
      </div>
        </div>
    );
};

export default AuthButton;