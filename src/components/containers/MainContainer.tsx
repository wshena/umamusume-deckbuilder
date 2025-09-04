'use client'

import React from 'react'
import { store } from '@/lib/redux/store'
import { Provider as ReduxProvider } from 'react-redux'
import MobileNav from '../MobileNav'
import ScrollController from '../controllers/ScrollController'
import ProgressBar from '../ProgressBar'
import { useNavigationProgress } from '@/hooks/useNavigationProgress'

const MainContainer = ({children}: DefaultContainerProps) => {
  // Initialize navigation progress
  useNavigationProgress();

  return (
    <div className="relative overflow-x-hidden">
      <ReduxProvider store={store}>
        {/* Progress Bar */}
        <ProgressBar />
        
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