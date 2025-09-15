import React from 'react'
import Link from 'next/link'
import { Rarity } from '@/consts'
import ContentContainer from '@/components/containers/ContentContainer'

const page = async () => {

  return (
    <main className="py-20">
      <ContentContainer>
        <ul className="flex flex-col items-start gap-5 text-left">
          {Rarity.map((item: {id:string, label:string, url:string}) => (
            <li key={item.id}>
              <Link href={item.url}>
                <span className="capitalize font-semibold text-md">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </main>
  )
}

export default page