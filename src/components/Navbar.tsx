'use client'
import React, { useState } from 'react'
import ContentContainer from './containers/ContentContainer'
import { HEADER_NAV } from '@/consts'
import Link from 'next/link'
import { AngleDownIcon, AngleRightIcon, CardIcon } from '@/icons'
import MenuNavButton from './buttons/MenuNavButton'
import SearchButton from './buttons/SearchButton'

const SublinkContent = ({ sublinks }: { sublinks: SubLinkProps[] }) => {
  return (
    <div className="absolute top-full left-0 mt-2 w-fit bg-gray-800 rounded-md z-50 p-3 flex items-center gap-5">
      {sublinks.map((item) => (
        <Link 
          key={item.id} 
          href={item.link} 
          className="flex items-center justify-between px-4 py-2 hover:bg-purple-900 transition-colors duration-200 min-w-50 rounded-md"
        >
          <div className="flex items-center gap-2">
            <CardIcon size={16} classname="text-purple-400" />
            <span className="text-sm font-medium capitalize text-white">
              {item.label}
            </span>
          </div>
          <AngleRightIcon size={14} classname="text-purple-400" />
        </Link>
      ))}
    </div>
  )
}

const Navbar = () => {
  const [exploreClick, setExploreClick] = useState(false);

  return (
    <header className="bg-gray-900 py-3">
      <ContentContainer>
        <nav aria-label='header navigations' className='flex items-center justify-between'>
          {/* left side */}
          <div className="flex items-center gap-10">
            {/* logo */}
            <h1 className="text-xl font-bold text-purple-500">LOGO</h1>

            {/* navigation links */}
            <ul className='hidden md:flex items-center gap-5'>
              {HEADER_NAV.map((item: NavLinkProps) => (
                <li key={item.id} className="relative">
                  {item.label === 'explore' && item.sublink ? (
                    <div 
                      className="group group-hover:text-purple-400 relative flex items-center gap-2 cursor-pointer" 
                      onClick={() => setExploreClick(!exploreClick)}
                    >
                      <span className="text-sm md:text-md capitalize text-white hover:text-purple-400 transition-colors">
                        {item.label}
                      </span>
                      <AngleDownIcon 
                        size={12} 
                        classname={`text-white group-hover:text-purple-400 transition-transform ${exploreClick ? 'rotate-180' : ''}`} 
                      />

                      {/* Dropdown menu for explore */}
                      {exploreClick && (
                        <SublinkContent sublinks={item.sublink} />
                      )}
                    </div>
                  ) : (
                    <Link 
                      aria-label={`Navigate to ${item.label}`} 
                      href={item.link}
                      className="text-sm md:text-md capitalize text-white hover:text-purple-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* right side */}
          <div className="flex items-center gap-5">
            <SearchButton />
            <MenuNavButton />
          </div>
        </nav>
      </ContentContainer>
    </header>
  )
}

export default Navbar