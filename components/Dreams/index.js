'use client'

import SingleDream from "./SingleDream"

const Dreams = ()=>{
  return(
    <SingleDream endPoint={'/api/dream/get'}/>
  )
}
export default Dreams