'use client'
import { MenuIcon } from '@/icons'
import { setButtonClick } from '@/lib/redux/slices/utility';
import { RootState, useAppDispatch, useAppSelector } from '@/lib/redux/store';
import React from 'react'

const MenuNavButton = () => {
  const dispatch = useAppDispatch();
  const buttonClick = useAppSelector((state:RootState) => state.utility.buttonClick);

  const handleClick = () => {
    dispatch(setButtonClick({
      label: 'mobile-nav',
      value: !buttonClick.value
    }))
  }

  return (
    <button onClick={handleClick} className="flex lg:hidden items-center gap-1">
      <MenuIcon size={20} classname='text-white' />
      <span className="hidden md:inline text-md text-white">Menu</span>
    </button>
  )
}

export default MenuNavButton