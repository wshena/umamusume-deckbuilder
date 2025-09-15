'use client'
import { createSlug, truncateText } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface SupportCardProps {
  data: {
    name: string
    image_hd_url: string
  }
}

const SupportCard = ({ data }: SupportCardProps) => {
  const id = createSlug(data.name)

  // state untuk handle reload image
  const [imgSrc, setImgSrc] = useState(data.image_hd_url)
  const [reloadCount, setReloadCount] = useState(0)

  const handleImageError = () => {
    if (reloadCount < 3) { // 3x retry
      setReloadCount(reloadCount + 1)
      // query param
      setImgSrc(`${data.image_hd_url}?reload=${Date.now()}`)
    } else {
      console.warn(`Image gagal dimuat setelah ${reloadCount} percobaan: ${data.image_hd_url}`)
      // bisa fallback ke placeholder
      setImgSrc('https://placehold.co/125x150')
    }
  }

  return (
    <Link
      href={`/support-cards/${id}`}
      className="group md:w-[125px] max-w-[125px] flex flex-col items-start gap-3"
    >
      <Image
        src={imgSrc}
        alt={data.name}
        width={125}
        height={150}
        loading="lazy"
        className="w-[80px] md:w-[125px]"
        onError={handleImageError} // ini akan dipanggil kalau gagal load
      />
      <span className="hidden md:inline-block group-hover:text-orange-500 text-sm font-semibold truncate">
        {truncateText(data.name, 15)}
      </span>
    </Link>
  )
}

export default SupportCard
