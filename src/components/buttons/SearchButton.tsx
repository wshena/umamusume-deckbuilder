import { SearchIcon } from '@/icons'
import React from 'react'
import Button from './Button'

const SearchButton = () => {
  return (
    <Button
      isTooltip={true}
      tooltipContent={ <span className='text-sm'>Site Search</span> }
      style='cursor-pointer'
    >
      <SearchIcon size={15} classname='text-white' />
    </Button>
  )
}

export default SearchButton