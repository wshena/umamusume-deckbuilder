import { useEffect, useRef } from 'react';

export const useScrollLock = (lock: boolean) => {
  const scrollYRef = useRef(0);

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      if (lock) {
        e.preventDefault();
      }
    };

    if (lock) {
      // Simpan posisi scroll saat ini
      scrollYRef.current = window.scrollY;
      
      // Disable scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';
      
      // Untuk mobile devices
      document.addEventListener('touchmove', preventDefault, { passive: false });
    } else {
      // Enable scroll
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Kembalikan posisi scroll
      window.scrollTo(0, scrollYRef.current);
      
      // Hapus event listener
      document.removeEventListener('touchmove', preventDefault);
    }

    // Cleanup function
    return () => {
      if (lock) {
        document.body.style.overflow = 'unset';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollYRef.current);
        
        document.removeEventListener('touchmove', preventDefault);
      }
    };
  }, [lock]);
};