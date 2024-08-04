import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'theunknownrealms.com' + window.location.pathname;
  }, []);

  return null;
}
