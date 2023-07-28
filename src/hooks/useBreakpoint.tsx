import { useState, useEffect } from 'react';

interface Breakpoints {
  [key: string]: MediaQueryList;
}

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    function handleResize() {
      const breakpoints: Breakpoints = {
        sm: window.matchMedia('(max-width: 640px)'),
        md: window.matchMedia('(max-width: 768px)'),
        lg: window.matchMedia('(max-width: 1024px)'),
        xl: window.matchMedia('(max-width: 1280px)'),
      };

      const activeBreakpoint = Object.keys(breakpoints).find((key) => breakpoints[key].matches);
      setBreakpoint(activeBreakpoint || '');
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}

export default useBreakpoint;
