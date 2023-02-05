//In this we can also handle events.
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Error() {
  const router = useRouter();
  const handleClick = () => {         //Third Method
    router.push ("/")
  }

  return (
    <>
    <h1>
      This is the error page.
    </h1>
    {/* <Link href="/">                    ///First method-Using Link ------It will refresh the page.
      <button>  
      Back to Home Page.
      </button>
    </Link> */}

    {/* <a onClick={()=>router.push("/")}>     //Second Method-Inline Onclick method without refresh.
      Back to Home Page 
    </a> */}

    <a onClick={handleClick}>
      <button>
      Back to Home Page
      </button>
      
    </a>

    </>
  )
}

export default Error