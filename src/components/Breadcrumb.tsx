'use client'
import React from 'react'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './ui/breadcrumb'
import { useUtiltiyStore } from '@/lib/zustand/useUtilityStore'

const CustomBreadcrumb = ({ items }: { items: BreadcrumbItemProps[] }) => {
  const {setActiveTab} = useUtiltiyStore();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items?.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <React.Fragment key={item.label}>
              <BreadcrumbItem>
                {item?.url && !isLast ? (
                  <BreadcrumbLink asChild onClick={() => setActiveTab('All')}>
                    <Link href={item.url}>
                      <span className="capitalize text-sm md:text-md lg:text-lg">
                        {item.label}
                      </span>
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>
                    <span className="capitalize text-sm md:text-md lg:text-lg">
                      {item.label}
                    </span>
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default CustomBreadcrumb
