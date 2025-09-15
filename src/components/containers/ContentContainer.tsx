import React from 'react'

const ContentContainer = ({children, style}:DefaultContainerProps) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-5 md:px-10 xl:px-20 ${style}`}>
      {children}
    </div>
  )
}

export default ContentContainer