'use client'
import { useScrollLock } from '@/hooks/useScrollLock';
import { useUtiltiyStore } from '@/lib/zustand/useUtilityStore';

const ScrollController = () => {
  const {buttonClick} = useUtiltiyStore();
  useScrollLock(buttonClick.value);
  
  return null;
};

export default ScrollController;