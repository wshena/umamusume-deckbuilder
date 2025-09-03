import { MenuIcon } from '@/icons'
import React from 'react'

const MenuNavButton = () => {
  return (
    <button className="flex lg:hidden items-center gap-1">
      <MenuIcon size={20} classname='text-white' />
      <span className="hidden md:inline text-md text-white">Menu</span>
    </button>
  )
}

export default MenuNavButton