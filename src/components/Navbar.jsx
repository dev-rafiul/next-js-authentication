import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='border-b-2 text-center py-3 space-x-5'>
            <Link href={'/'}></Link>
        </div>
    );
};

export default Navbar;