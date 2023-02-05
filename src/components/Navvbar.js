import Link from 'next/link'
import React from 'react'


function Navvbar() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Conatct
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>

            </ul>
        </>
    )
}

export default Navvbar