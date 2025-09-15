import CustomBreadcrumb from '@/components/Breadcrumb';
import SupportCard from '@/components/cards/SupportCard';
import ContentContainer from '@/components/containers/ContentContainer';
import SupportCardTab from '@/components/SupportCardTab';
import { fetcher } from '@/utils/fetcher';
import { formatRarityLabel, getRarity } from '@/utils/functions';
import React from 'react'
import CardList from './CardList';

const page = async ({params}:{params:any}) => {
  const { rarity } = await params

  const support_cards_data = await fetcher(
    'http://localhost:3000/api/supports',
    { method: 'get' }
  );

  const card_data_by_rarity = support_cards_data?.data[getRarity(rarity)];
  const total:any = Object.values(card_data_by_rarity).reduce((acc, arr:any) => acc + arr.length, 0)

  return (
    <main className="py-20">
      <ContentContainer style='flex flex-col items-start gap-5'>
        {/* hedaer and breadcrumb */}
        <section id='header' className="space-y-1">
          <CustomBreadcrumb 
            items={[
              { label: 'support cards', url: '/support-cards' },
              { label: 'SSR Support Cards' }
            ]}
          />
          <div className="-space-y-1">
            <h1 className="text-[1.5rem] md:text-[2rem] capitalize">{formatRarityLabel(getRarity(rarity))}</h1>
            <span className="text-sm">{total} Cards</span>
          </div>
        </section>

        {/* card list */}
        <CardList data={card_data_by_rarity} />
      </ContentContainer>
    </main>
  )
}

export default page