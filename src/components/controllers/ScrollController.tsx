'use client'
import { useScrollLock } from '@/hooks/useScrollLock';
import { RootState, useAppSelector } from '@/lib/redux/store';

const ScrollController = () => {
  const buttonClick = useAppSelector((state: RootState) => state.utility.buttonClick.value);
  useScrollLock(buttonClick);
  
  return null;
};

export default ScrollController;