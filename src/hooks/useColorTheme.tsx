import { useEffect } from 'react';

function useColorTheme() {
  useEffect(() => {
    if (localStorage.getItem('--primary-100')) {
      document.documentElement.style.setProperty(
        '--primary-100',
        localStorage.getItem('--primary-100')
      );
      document.documentElement.style.setProperty(
        '--primary-200',
        localStorage.getItem('--primary-200')
      );
      document.documentElement.style.setProperty(
        '--primary-300',
        localStorage.getItem('--primary-300')
      );
    }
  }, []);
}

export default useColorTheme;
