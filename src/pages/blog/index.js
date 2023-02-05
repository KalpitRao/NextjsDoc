//Nested Routing ke liyee blog pages me blog1.js ,blog2.js create karoo
//url hoga //https:localhost:3000/blog/blog1
//url hoga //https:localhost:3000/blog/blog2     (simple)

import React from 'react'
import Navvbar from '../../components/Navvbar'


function blog() {
  return (
    <div>
      <Navvbar/>
      blog</div>
  )
}

export default blog


//For dynamic route we have to use a special file naming convention that is to use [].