'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { HEADER_NAV } from '@/consts'
import React, { useState } from 'react'
import { useUtiltiyStore } from '@/lib/zustand/useUtilityStore'

const MobileNav = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const {buttonClick, setButtonClick} = useUtiltiyStore();
  console.log(buttonClick)
  return (
    <section id="mobile-nav" aria-label='mobile-nav' className={cn(
      'absolute block lg:hidden w-full h-screen bg-black text-white p-10 z-100',
      'left-0 top-[52px]',
      'transition-transform duration-100 ease-in-out',
      (buttonClick.label === 'mobile-nav' && buttonClick.value === true) ? 'left-0' : 'translate-x-[1000px]'
    )}>
      <ul className="flex flex-col items-start gap-5">
        {HEADER_NAV.map((item:NavLinkProps) => (
          <li key={item.id} className="text-sm md:text-md font-semibold capitalize relative w-full">
            {item.label === 'explore' ? (
              <div className="w-full">
                  {/* Toggle button for services */}
                  <button 
                    className="flex items-center justify-between w-full hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span>{item.label}</span>
                    <span className="transform transition-transform duration-300">
                      {isServicesOpen ? '▲' : '▼'}
                    </span>
                  </button>
                  
                  {/* Collapse menu */}
                  <div className={`
                    overflow-hidden transition-all duration-300 ease-in-out mt-3
                    ${isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <ul className="pl-4 pt-2 space-y-5">
                      {item.sublink?.map((dropdownItem) => (
                        <li key={dropdownItem.id}>
                          <Link
                            href={dropdownItem.link}
                            className="block text-sm hover:text-blue-600 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
            ) : (
              <Link 
                href={item.link} 
                className="hover:text-blue-600 transition-colors block w-full py-1"
                onClick={() => setButtonClick('', false)}
              >{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MobileNav