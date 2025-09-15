'use client'
import { Support_Card_Type } from '@/consts'
import { cn } from '@/lib/utils';
import { useUtiltiyStore } from '@/lib/zustand/useUtilityStore';
import React from 'react'

const SupportCardTab = () => {
  const { setActiveTab, activeTab } = useUtiltiyStore();
  
  return (
    <ul className='overflow-x-auto w-[250px] md:w-full flex items-center gap-3 pb-3 md:pb-0'>
      <li>
        <button key={'all'} onClick={() => setActiveTab('All')} className={cn(
          'cursor-pointer py-1 px-3 rounded-full',
          activeTab === 'All' && 'bg-gray-200'
        )}>
          <span className='capitalize text-sm md:text-md'>All</span>
        </button>
      </li>
          
      {Support_Card_Type?.map((item:string) => (
        <li key={item}>
          <button onClick={() => setActiveTab(item)} className={cn(
            'cursor-pointer py-1 px-3 rounded-full',
            item === activeTab && 'bg-gray-200'
          )}>
            <span className='capitalize text-sm md:text-md'>{item}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default SupportCardTab