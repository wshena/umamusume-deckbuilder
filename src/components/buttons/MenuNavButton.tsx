'use client'
import React from 'react'
import { MenuIcon } from '@/icons'
import { useUtiltiyStore } from '@/lib/zustand/useUtilityStore';
import Button from './Button';

const MenuNavButton = () => {
  const {buttonClick, setButtonClick} = useUtiltiyStore();

  const handleClick = () => {
    setButtonClick('mobile-nav', !buttonClick.value)
  }

  return (
    <Button
      isTooltip={false}
      handleClick={handleClick}
      style='flex lg:hidden items-center gap-1'
    >
      <MenuIcon size={20} classname='text-white' />
      <span className="hidden md:inline text-md text-white">Menu</span>
    </Button>
  )
}

export default MenuNavButton