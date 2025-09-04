'use client'
import { createSlug, truncateText } from '@/lib/utils'
import Image from 'next/image';
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const SupportCard = ({data}:{data:any}) => {
  const id = createSlug(data.name);

  const cardRef = useRef<any>(null);
  const [bounds, setBounds] = useState<any>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      setBounds(cardRef.current.getBoundingClientRect());
    }
    document.addEventListener("mousemove", rotateToMouse);
  };

  const handleMouseLeave = () => {
    document.removeEventListener("mousemove", rotateToMouse);
    if (cardRef.current) {
      cardRef.current.style.transform = "";
      cardRef.current.querySelector(".glow").style.backgroundImage = "";
    }
  };

  const rotateToMouse = (e:any) => {
    if (!bounds) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    if (cardRef.current) {
      cardRef.current.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

      cardRef.current.querySelector(".glow").style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }
  };

  return (
    <Link 
      href={`/cards/support-cards/${id}`} 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='w-fit border flex flex-col items-start gap-3'
    >
      <div className="glow"></div>
      <Image src={data.image_hd_url} alt={data.name} width={150} height={150} loading='lazy' />
      <span className="text-sm font-semibold truncate">{truncateText(data.name, 20)}</span>
    </Link>
  )
}

export default SupportCard