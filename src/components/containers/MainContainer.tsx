'use client'

import React from 'react'
import { store } from '@/lib/redux/store'
import { Provider as ReduxProvider } from 'react-redux'
import MobileNav from '../MobileNav'
import ScrollController from '../controllers/ScrollController'

const MainContainer = ({children}:DefaultContainerProps) => {
  return (
    <div className="relative overflow-x-hidden">
      <ReduxProvider store={store}>
        {/* scroll controller */}
        <ScrollController />
        
        {children}

        {/* Mobile Navigations */}
        <MobileNav />
      </ReduxProvider>
    </div>
  )
}

export default MainContainer