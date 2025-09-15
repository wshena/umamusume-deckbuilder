'use client'
import React, { useEffect, useState } from 'react'
import SupportCard from '@/components/cards/SupportCard'
import SupportCardTab from '@/components/SupportCardTab'
import { useUtiltiyStore } from '@/lib/zustand/useUtilityStore'

const CardList = ({data}:{data:any}) => {
  const {activeTab} = useUtiltiyStore();
  const [supportCards, setSupportCards] = useState<any[]>([]);

  useEffect(() => {
    if (!data) return

    if (activeTab !== 'All') {
      setSupportCards(data[activeTab] ?? []);
    } else {
      setSupportCards([]);
    }
  }, [data, activeTab]);

  return (
    <section id='card-list' className="w-full space-y-3">
      <SupportCardTab />

      {activeTab === 'All' ? (
        <div className="flex items-center justify-center">
          <ul className="flex flex-col items-start gap-5 text-left">
            {Object.keys(data).map((item:any) => {
              return (
                <li key={item} className='space-y-4'>
                  <h1 className="border-b border-b-gray-400 py-2 text-xl font-semibold capitalize">{item}</h1>
                  <ul className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-3">
                    {data[item].map((card:any) => (
                      <li key={card?.name} className='w-fit'>
                        <SupportCard data={card} />
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          {supportCards?.length === 0 ? (
            <h1 className='text-lg md:text-xl'>No Support Cards in this type</h1>
          ) : (
            <ul className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-3">
              {supportCards?.map((item:any) => {
                return (
                  <li key={item?.name}>
                    <SupportCard data={item} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </section>
  )
}

export default CardList