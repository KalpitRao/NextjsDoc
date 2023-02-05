import React from 'react'
import { useRouter} from "next/router";

function pageno() {
    const router = useRouter();
    const pageNumber = router.query.pageno;
  return (
    <>  
    <h1>this is {pageNumber} page</h1>
    </>
  )
}

export default pageno