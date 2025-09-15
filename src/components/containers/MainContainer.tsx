'use client'
import React from 'react'
import MobileNav from '../MobileNav'
import ScrollController from '../controllers/ScrollController'
import ProgressBar from '../ProgressBar'
import { useNavigationProgress } from '@/hooks/useNavigationProgress'

const MainContainer = ({children}: DefaultContainerProps) => {
  useNavigationProgress();

  return (
    <div className="relative overflow-hidden">
      {/* Progress Bar */}
      <ProgressBar />
        
      {/* scroll controller */}
      <ScrollController />
        
      {children}

      {/* Mobile Navigations */}
      <MobileNav />
    </div>
  )
}

export default MainContainer