import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Load Tawk.to widget script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/64dbe47acc26a871b02f7420/1h7tf90df';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the widget script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TawkToChat;
