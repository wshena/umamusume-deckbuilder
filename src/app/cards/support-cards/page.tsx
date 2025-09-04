import SupportCard from '@/components/cards/SupportCard'
import ContentContainer from '@/components/containers/ContentContainer'
import React from 'react'

const data = {
  name: "SSR Silence Suzuka (Beyond This Shining Moment)",
  url: "https://umamusu.wiki/Game:SSR_Silence_Suzuka_(Beyond_This_Shining_Moment)",
  image_url: "https://umamusu.wiki/w/thumb.php?f=Support_Card_30002_Card.png&width=100",
  image_hd_url: "https://umamusu.wiki/w/thumb.php?f=Support_Card_30002_Card.png&width=200"
}

const page = () => {
  return (
    <main className="py-20">
      <ContentContainer>
        <h1>all support card</h1>

        <div className="w-full flex items-center justify-center">
          <ul className="grid grid-cols-5 gap-5">
            {[...Array(20)].map((_, idx:number) => (
              <li key={idx} className="w-fit block border border-red-400">
                <SupportCard data={data} />
              </li>
            ))}
          </ul>
        </div>
      </ContentContainer>
    </main>
  )
}

export default page