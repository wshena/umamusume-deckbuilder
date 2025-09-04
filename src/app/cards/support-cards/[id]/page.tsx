import React from 'react'

const page = async ({params}:{params:any}) => {
  const {id} = await params

  console.log(`id= ${id}`)
  
  return (
    <div>page</div>
  )
}

export default page