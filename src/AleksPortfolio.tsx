import React, { useState, useEffect, useRef } from 'react';

export default function AleksPortfolio() {
  const [expansionLevel, setExpansionLevel] = useState(0);
  const [showWeatherOnMobile, setShowWeatherOnMobile] = useState(false);
  const [weatherAnimationStarted, setWeatherAnimationStarted] = useState(false);
  const [weatherAnimationCompleted, setWeatherAnimationCompleted] = useState(false);
  const [location, setLocation] = useState("Finding Aleks");
  const [isLoading, setIsLoading] = useState(true);
  const [timelineText, setTimelineText] = useState("");
  const [mousePosition, setMousePosition] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [weatherEmoji, setWeatherEmoji] = useState("🔍");
  const [contactExpanded, setContactExpanded] = useState(false);
  const [contactDiscovered, setContactDiscovered] = useState(false);
  const [contactCompressing, setContactCompressing] = useState(false);
  const [contactExpanding, setContactExpanding] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  
  const lastWheelTime = useRef(0);
  const isAnimating = useRef(false);
  const timelineRef = useRef(null);
  const touchStartY = useRef(0);
  const lastTouchTime = useRef(0);
  const prevExpansionLevel = useRef(0);

  const CONFIG = {
    ZIP_CODE: '94132',
    REFRESH_INTERVAL: 300000,
    API_TIMEOUT: 5000,
    ARTIFICIAL_DELAY: 4000
  };

  const getTimeBasedEmoji = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return "🌅";
    if (hour >= 12 && hour < 17) return "☀️";
    if (hour >= 17 && hour < 20) return "🌇";
    return "🌃";
  };

  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
    setCurrentTime(timeString);
    setWeatherEmoji(getTimeBasedEmoji());
  };

  const timelineData = [
    {
      year: '1990',
      description: 'Born in Ukraine, moved to America at age 4 — my first lesson in managing transitions with competing stakeholder priorities and tight deadlines.'
    },
    {
      year: '2015',
      description: 'Industrial Design Intern at Tech Waves. Learned the fundamentals of product development cycles and stakeholder alignment in consumer product launches.'
    },
    {
      year: '2017',
      description: 'Graduated from SJSU with a B.S. in Industrial Design; IDSA ’17 Student Merit Award Finalist.'
    },
    {
      year: '2021',
      description: 'Advanced to leadership at Topology Eyewear, managing creative teams while balancing operational requirements and client expectations in a fast-paced environment.'
    },
    {
      year: '2022',
      description: 'Joined Card79 as Project Manager Manager. Started orchestrating complex hardware and digital initiatives, discovering my talent for managing competing priorities and stakeholder expectations.'
    },
    {
      year: '2025',
      description: 'Strategic Program Manager at Card79. Currently managing innovation projects for clients ranging from established brands to emerging companies, with a focus on scope clarity, risk mitigation, and delivery excellence.'
    }
  ];

  const checkConnectionSpeed = async () => {
    const startTime = performance.now();
    try {
      const response = await fetch(`https://api.zippopotam.us/us/${CONFIG.ZIP_CODE}`);
      const endTime = performance.now();
      return (endTime - startTime) < 1000;
    } catch {
      return false;
    }
  };

  const fetchWeather = async () => {
    // Random delay between 5-10 seconds to simulate realistic searching
    const randomDelay = Math.floor(Math.random() * 5000) + 5000; // 5000-10000ms (5-10 seconds)
    
    // Store the final location so it's available when the weather container becomes visible
    let finalLocation = 'San Francisco, CA'; // Default fallback

    const isFastConnection = await checkConnectionSpeed();
    
    // Always add the artificial delay regardless of connection speed
    await new Promise(resolve => setTimeout(resolve, CONFIG.ARTIFICIAL_DELAY));
    
    try {
      const response = await fetch(`https://api.zippopotam.us/us/${CONFIG.ZIP_CODE}`);
      if (!response.ok) throw new Error('Location fetch failed');
      
      const data = await response.json();
      finalLocation = `${data.places[0]['place name']}, CA`;
      
      setTimeout(() => {
        setIsLoading(false);
        setLocation(finalLocation);
        setWeatherAnimationCompleted(true);
        setWeatherEmoji(getTimeBasedEmoji());
      }, randomDelay);
    } catch (error) {
      console.error('Weather error:', error);
      setTimeout(() => {
        setIsLoading(false);
        setLocation(finalLocation);
        setWeatherAnimationCompleted(true);
        setWeatherEmoji(getTimeBasedEmoji());
      }, randomDelay);
    }
  };

  const toggleContent = (expand: boolean) => {
    if (expand && expansionLevel < 4) {
      const newLevel = expansionLevel + 1;
      setExpansionLevel(newLevel);
      
      if (newLevel === 1) {
        setShowWeatherOnMobile(true);
        if (window.innerWidth <= 640 && !weatherAnimationStarted) {
          setWeatherAnimationStarted(true);
          if (!weatherAnimationCompleted) {
            fetchWeather();
          }
        }
      }
      
      // Restart weather animation when reaching contact form on mobile
      if (newLevel === 4 && window.innerWidth <= 768) {
        setIsLoading(true);
        setWeatherAnimationCompleted(false);
        setLocation("Finding Aleks");
        setWeatherEmoji("🔍");
        fetchWeather();
      }
    } else if (!expand && expansionLevel > 0) {
      const newLevel = expansionLevel - 1;
      setExpansionLevel(newLevel);
      
      if (newLevel === 0) {
        setShowWeatherOnMobile(false);
      }
    }
  };

  const handleWheel = (event: WheelEvent) => {
    const now = Date.now();
    const wheelDelay = 1200;
    
    if (isAnimating.current || now - lastWheelTime.current < wheelDelay) {
      return;
    }

    const isScrollingDown = event.deltaY > 0;
    
    isAnimating.current = true;
    lastWheelTime.current = now;

    if (isScrollingDown && expansionLevel < 4) {
      toggleContent(true);
    } else if (!isScrollingDown && expansionLevel > 0) {
      toggleContent(false);
    } else {
      isAnimating.current = false;
      return;
    }

    setTimeout(() => {
      isAnimating.current = false;
    }, 700);
    
    event.preventDefault();
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const now = Date.now();
    const touchDelay = 1200;
    
    if (isAnimating.current || now - lastTouchTime.current < touchDelay) {
      return;
    }

    const touchEndY = event.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;
    const minSwipeDistance = 50; // Minimum distance to trigger swipe

    // Only trigger if swipe is long enough
    if (Math.abs(deltaY) < minSwipeDistance) {
      return;
    }

    const isSwipingUp = deltaY > 0;
    
    isAnimating.current = true;
    lastTouchTime.current = now;

    if (isSwipingUp && expansionLevel < 4) {
      toggleContent(true);
    } else if (!isSwipingUp && expansionLevel > 0) {
      toggleContent(false);
    } else {
      isAnimating.current = false;
      return;
    }

    setTimeout(() => {
      isAnimating.current = false;
    }, 700);
    
    event.preventDefault();
  };

  const handleTimelineMove = (e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    
    const rect = (timelineRef.current as HTMLElement).getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    const exactPosition = Math.max(0, Math.min(100, position));
    
    setMousePosition(exactPosition);
    
    const index = Math.round((exactPosition / 100) * (timelineData.length - 1));
    const description = timelineData[index]?.description;
    
    if (description) {
      setTimelineText(description);
    }
  };

  const handleTimelineItemClick = (index: number) => {
    const position = (index / (timelineData.length - 1)) * 100;
    setMousePosition(position);
    setTimelineText(timelineData[index].description);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setFormStatus('submitting');
    setFormMessage('');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Add Formspree's required field to prevent any mailto fallback
    formData.append('_subject', 'New contact from portfolio');
    
    try {
      const response = await fetch('https://formspree.io/f/xdkzklvd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thanks! Your message has been sent successfully.');
        form.reset();
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setFormMessage('Oops! There was a problem sending your message. Please try again.');
      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormMessage('');
      }, 5000);
    }
  };

  const handleExpansion = () => {
    const prevLevel = prevExpansionLevel.current;
    
    if (expansionLevel >= 0) {
      setContactDiscovered(true);
      
      // Handle compression animation when transitioning from level 2 to level 3 (before timeline appears)
      if (expansionLevel === 3 && prevLevel === 2 && contactDiscovered && !contactCompressing) {
        setContactCompressing(true);
        setContactExpanded(false);
        setContactExpanding(false);
        // Reset compression state after animation completes
        setTimeout(() => {
          setContactCompressing(false);
        }, 600);
      } else if (expansionLevel < 3) {
        setContactCompressing(false);
        
        // Handle expansion animation when coming back from level 3+ to level 2
        if (expansionLevel === 2 && prevLevel >= 3 && !contactExpanding) {
          setContactExpanding(true);
          // Reset expansion state after animation completes
          setTimeout(() => {
            setContactExpanding(false);
          }, 600);
        }
      }
      
      if (expansionLevel >= 1 && expansionLevel < 3 && !contactCompressing) {
        // Expand to show both email and LinkedIn at levels 1-2 (unless compressing)
        setContactExpanded(true);
      } else {
        // Show just email button (collapsed) at level 0 or hide at level 3+
        setContactExpanded(false);
      }
    } else {
      setContactDiscovered(false);
      setContactExpanded(false);
      setContactCompressing(false);
      setContactExpanding(false);
    }
    
    // Update previous level for next comparison
    prevExpansionLevel.current = expansionLevel;
  };



  useEffect(() => {
    setWeatherAnimationStarted(true);
    fetchWeather();
    
    // Initialize timeline to first position
    setMousePosition(0);
    setTimelineText(timelineData[0].description);
    
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);
    
    const handleWheelEvent = (e: WheelEvent) => handleWheel(e);
    window.addEventListener('wheel', handleWheelEvent, { passive: false });
    
    // Prevent default touch behavior on the document to avoid scroll conflicts
    const preventDefaultTouch = (e: TouchEvent) => {
      if (e.touches.length > 1) return; // Allow pinch zoom
      e.preventDefault();
    };
    
    document.addEventListener('touchmove', preventDefaultTouch, { passive: false });
    
    handleExpansion();
    
    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
      document.removeEventListener('touchmove', preventDefaultTouch);
      clearInterval(timeInterval);
    };
  }, [expansionLevel]);

  const mainContentClass = `main-content ${expansionLevel > 0 ? `expanded-${expansionLevel}` : ''}`;
  const firstExpandClass = `expand-button ${expansionLevel > 0 ? 'expanded' : ''}`;

  return (
    <div 
      className="min-h-screen bg-black text-white overflow-hidden relative flex flex-col items-center" 
      style={{ height: '100vh', maxHeight: '100vh' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <style>{`
        :root {
          --base-unit: calc(1.5vh + 1.5vw);
          --font-base: calc(var(--base-unit) * 0.7);
          --spacing-unit: calc(var(--base-unit) * 0.5);
          --font-size: clamp(1rem, var(--font-base), 2rem);
          --icon-size: calc(var(--font-size) * 1.5);
          --emoji-size: calc(var(--font-size) * 1.2);
          --bottom-spacing: calc(var(--spacing-unit) * 2);
          --safe-area-bottom: max(1.5rem, env(safe-area-inset-bottom));
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          background: #000000;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          height: 100vh;
          overflow: hidden;
          touch-action: pan-y;
          -webkit-overflow-scrolling: touch;
        }

        .top-gradient {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 150px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%);
          pointer-events: none;
          z-index: 50;
        }

        .main-content {
          position: relative;
          width: 100vw;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          margin-top: 42vh;
          padding: 0;
          padding-bottom: 3vh;
          max-height: 100vh;
          overflow: visible;
          box-sizing: border-box;
          touch-action: pan-y;
        }

        .main-content.expanded-1 {
          transform: translateY(-15vh);
        }

        .main-content.expanded-2 {
          transform: translateY(-25vh);
        }

        .main-content.expanded-3 {
          transform: translateY(-35vh);
        }

        .main-content.expanded-4 {
          transform: translateY(-90vh);
        }

        @media (max-width: 768px) {
          .main-content.expanded-4 {
            transform: translateY(-90vh);
          }
        }



        .desktop-text {
          display: block;
          font-size: clamp(0.8rem, 3vw, 1.2rem);
          color: rgba(255, 255, 255, 0.85);
          padding: 0 2.5vw;
          max-width: 95vw;
          margin: 0 auto;
          word-wrap: break-word;
          hyphens: auto;
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.25;
          box-sizing: border-box;
        }

        .mobile-text {
          display: none;
          font-size: clamp(0.9rem, 3.5vw, 1.2rem);
          color: rgba(255, 255, 255, 0.85);
          margin: 1rem 2.5vw;
          max-width: 95vw;
          word-wrap: break-word;
          hyphens: auto;
          font-weight: 400;
          line-height: 1.25;
          box-sizing: border-box;
        }

        .name {
          position: relative;
          display: inline-block;
        }

        .name:hover {
          padding-right: 1.5em;
        }

        .name::after {
          content: "👋";
          position: absolute;
          right: 0.2em;
          top: 0;
          transform: translateX(0);
          opacity: 0;
          transition: opacity 0.8s ease;
          font-size: 1.2em;
          pointer-events: none;
        }

        .name:hover::after {
          opacity: 1;
          animation: wave 2s ease-in-out;
          transition: opacity 0.4s ease;
        }

        @keyframes wave {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          15% { transform: translateX(0) rotate(25deg); }
          30% { transform: translateX(0) rotate(-15deg); }
          45% { transform: translateX(0) rotate(20deg); }
          60% { transform: translateX(0) rotate(-10deg); }
          75% { transform: translateX(0) rotate(15deg); }
        }

        .role:hover {
          padding-right: 4.2em;
        }

        .role::after {
          content: "@Card79";
          position: absolute;
          right: 0;
          opacity: 0;
          transition: all 0.3s ease;
          transform: translateX(100%);
          font-size: 0.95em;
        }

        .name:hover::after {
          opacity: 0.5;
        }

        .vision {
          position: relative;
          z-index: 2;
          transition: all 0.5s ease;
        }

        .execution {
          position: relative;
          color: rgba(255, 255, 255, 0.85);
          transition: color 0.5s ease;
        }

        .execution::before {
          content: "execution";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #f72585, #b5179e, #7209b7, #3a0ca3, #4361ee, #4cc9f0, #667eea, #764ba2);
          background-size: 400% 100%;
          background-position: -100% 50%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          pointer-events: none;
          opacity: 0;
          transition: background-position 1.5s ease, opacity 0.5s ease;
        }

        .execution:hover {
          color: transparent;
        }

        .execution:hover::before {
          opacity: 1;
          background-position: 100% 50%;
        }

        .expand-button {
          position: relative;
          width: 28px;
          height: 28px;
          margin: 1.5rem auto;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.6;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .expand-button:hover {
          opacity: 0.9;
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.1);
        }

        .expand-button::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-right: 2px solid rgba(255, 255, 255, 0.8);
          border-bottom: 2px solid rgba(255, 255, 255, 0.8);
          transform: translate(-50%, -50%) rotate(45deg);
          transition: all 0.3s ease;
          top: 48%;
          left: 48%;
        }

        .expand-button.expanded::before {
          transform: translate(-50%, -50%) rotate(-135deg);
          top: 52%;
          left: 48%;
        }

        .expand-button.expanded {
          opacity: 0.4;
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.02);
        }

        .content-section {
          opacity: 0;
          visibility: hidden;
          width: 92vw;
          max-width: 92vw;
          margin: 0.8rem auto;
          padding: 0.5rem 0.7rem;
          color: rgba(255, 255, 255, 0.75);
          transition: opacity 1s ease, visibility 1s ease, transform 1s ease;
          min-height: auto;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          box-sizing: border-box;
          font-size: 0.7rem;
          line-height: 1.4;
          text-align: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          backdrop-filter: blur(20px);
          transform: translateY(20px);
        }

        @media (min-width: 640px) {
          .content-section {
            max-width: 28rem;
            width: 80%;
            padding: 0.7rem 0.9rem;
            font-size: 0.75rem;
            line-height: 1.4;
            margin: 1.2rem auto;
          }

          .timeline-text {
            font-size: 0.75rem;
            line-height: 1.4;
          }

          .section-hint {
            font-size: 0.85rem;
          }
        }

        @media (min-width: 1024px) {
          .content-section {
            max-width: 32rem;
            width: 75%;
            padding: 0.9rem 1.1rem;
            font-size: 0.8rem;
            line-height: 1.45;
            margin: 1.5rem auto;
          }

          .timeline-text {
            font-size: 0.8rem;
            line-height: 1.45;
          }

          .section-hint {
            font-size: 0.9rem;
          }
        }

        .content-section.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .content-section p {
          margin: 0;
          text-align: center;
        }

        .timeline-text {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          max-width: 100%;
          margin: 0;
          font-size: 0.7rem;
          line-height: 1.4;
          text-align: center;
          color: rgba(255, 255, 255, 0.85);
        }

        .metric {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }

        .highlight {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
        }

        .section-hint {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.8rem;
          text-align: center;
          font-weight: 500;
        }

        .timeline {
          position: relative;
          width: 100%;
          height: 80px;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          z-index: 1;
        }

        .timeline::after {
          content: '';
          position: absolute;
          top: 50px;
          left: ${mousePosition}%;
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
          transition: left 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
          pointer-events: none;
          z-index: 2;
        }

        .timeline-item {
          position: absolute;
          top: 15px;
          transform: translateX(-50%);
          opacity: 1;
          cursor: pointer;
          width: 50px;
          text-align: center;
          padding: 6px 0;
          z-index: 3;
        }

        .timeline-item .year {
          font-size: 0.85em;
          color: rgba(255, 255, 255, 0.7);
          display: block;
          white-space: nowrap;
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .timeline-item:hover .year {
          opacity: 1;
          transform: translateY(-2px);
        }

        .weather-container {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 1.5rem;
          padding: 0.5rem 0.8rem;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          cursor: pointer;
          z-index: 200;
          width: auto;
          height: auto;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          visibility: visible;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 2.5rem;
          min-height: 2.5rem;
        }

        .mobile-weather-container {
          display: none;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .mobile-weather-container.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        @media (max-width: 768px), (max-width: 820px) and (orientation: portrait) {
          .weather-container:not(.mobile-weather-container .weather-container),
          .weather-container.loading:not(.mobile-weather-container .weather-container),
          .weather-container.pin-only:not(.mobile-weather-container .weather-container),
          .weather-container:hover:not(.mobile-weather-container .weather-container),
          .weather-container.pin-only:hover:not(.mobile-weather-container .weather-container) {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            position: absolute !important;
            top: -9999px !important;
          }
          
          .mobile-weather-container {
            display: block !important;
            width: 92vw !important;
            margin: 0.8rem auto !important;
          }
          
          .mobile-weather-container .weather-container {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            position: static !important;
            top: auto !important;
            right: auto !important;
            left: auto !important;
            margin: 0 auto !important;
            width: auto !important;
            max-width: 200px !important;
            justify-content: center !important;
            transform: none !important;
            border-radius: 1.5rem !important;
            padding: 0.6rem 1.2rem !important;
            background: rgba(20, 20, 20, 0.8) !important;
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
            backdrop-filter: blur(12px) !important;
            font-size: 0.8rem !important;
            font-weight: 500 !important;
            letter-spacing: 0.02em !important;
            color: rgba(255, 255, 255, 0.9) !important;
            white-space: nowrap !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
          }

          .contact-form {
            width: 95vw;
            max-width: none;
            margin: 1rem auto 0 auto;
            padding: 1.2rem;
          }

          .contact-form .form-title {
            font-size: 0.85rem;
            margin-bottom: 1.2rem;
          }

          .contact-form input,
          .contact-form textarea {
            font-size: 0.85rem;
          }

          .contact-form textarea {
            min-height: 80px;
          }
        }

        .weather-container.pin-only .location-text {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          overflow: visible !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          transform: translateX(0) !important;
          font-weight: 500 !important;
          font-size: 0.9rem !important;
          white-space: nowrap !important;
        }

        @media (max-width: 768px) {
          .weather-container.pin-only .location-text {
            font-size: 1rem !important;
          }
        }

        .weather-container.loading {
          width: auto;
          padding: 0.5rem 0.8rem;
        }

        .weather-container.pin-only {
          width: auto;
          height: auto;
          padding: 0.6rem 1.2rem;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .weather-container.pin-only .weather-content {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.5rem !important;
        }

        .weather-container.pin-only .weather-content .location-pin {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          height: auto !important;
          overflow: visible !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 1rem !important;
          line-height: 1 !important;
          z-index: 1000 !important;
          position: relative !important;
          margin: 0 !important;
          flex-shrink: 0 !important;
        }

        .weather-container:hover {
          background: rgba(20, 20, 20, 0.9);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          width: auto;
          max-width: 350px;
          padding: 0.6rem 1rem;
        }

        .weather-container:hover .time-separator {
          display: block !important;
          opacity: 1 !important;
          transform: scale(1) !important;
          visibility: visible !important;
          width: 3px !important;
          height: 3px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          margin: 0 0.2rem !important;
        }

        .weather-container:hover .time-text {
          display: block !important;
          opacity: 1 !important;
          transform: translateX(0) !important;
          visibility: visible !important;
          font-size: 0.65rem !important;
          color: rgba(255, 255, 255, 0.7) !important;
          width: auto !important;
          overflow: visible !important;
        }

        .weather-content {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .location-pin {
          font-size: 1rem;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }

        .weather-container.loading .location-pin {
          display: none;
        }

        .weather-container.pin-only .location-pin {
          display: block !important;
          opacity: 1 !important;
          width: auto !important;
          overflow: visible !important;
          color: red !important;
          font-size: 1.5rem !important;
        }

        .weather-container:hover .location-pin {
          display: block !important;
          opacity: 1 !important;
          width: auto !important;
          overflow: visible !important;
        }

        .location-emoji {
          font-size: 0.9rem;
          margin-left: 0;
          animation: none;
          flex-shrink: 0;
          opacity: 0;
          transform: scale(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          width: 0;
          overflow: hidden;
        }

        .weather-container.loading .location-emoji {
          opacity: 1;
          transform: scale(1);
          width: auto;
          overflow: visible;
        }

        .weather-container.pin-only .location-emoji {
          display: none !important;
          opacity: 0 !important;
          width: 0 !important;
          overflow: hidden !important;
        }

        .weather-container:hover .location-emoji {
          display: none !important;
          opacity: 0 !important;
          width: 0 !important;
          margin-left: 0 !important;
          overflow: hidden !important;
        }

        .location-text {
          font-weight: 500;
          opacity: 1;
          transform: translateX(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          width: auto;
          overflow: visible;
          margin-left: 0.2rem;
        }

        .weather-container.loading .location-text {
          opacity: 1;
          transform: translateX(0);
          width: auto;
          overflow: visible;
          margin-left: 0.2rem;
        }

        .location-text.loading {
          position: relative;
        }

        .location-text.loading::after {
          content: '';
          display: inline-block;
          width: 20px;
          text-align: left;
          animation: loadingDots 2s linear infinite;
        }

        .weather-container.pin-only .location-text {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          overflow: visible !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          transform: translateX(0) !important;
          font-weight: 500 !important;
          font-size: 0.8rem !important;
          white-space: nowrap !important;
        }

        .weather-container:hover .location-text {
          opacity: 1 !important;
          transform: translateX(0) !important;
          width: auto !important;
          margin-left: 0.2rem !important;
          overflow: visible !important;
        }

        @keyframes loadingDots {
          0% { content: '.'; }
          33% { content: '..'; }
          66% { content: '...'; }
          100% { content: ''; }
        }

        .time-separator {
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 0.2rem;
          opacity: 0;
          transform: scale(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .weather-container:hover .time-separator {
          display: block !important;
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        .time-text {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.7);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .weather-container:hover .time-text {
          display: block !important;
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        .contact-bar {
          position: fixed;
          bottom: var(--safe-area-bottom);
          left: 50%;
          transform: translateX(-50%) translateY(100%);
          width: auto;
          max-width: 20rem;
          min-width: 3rem;
          height: 3rem;
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 1.5rem;
          backdrop-filter: blur(12px);
          z-index: 100;
          opacity: 0;
          visibility: hidden;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-bar:not(.collapsed) {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .contact-bar.collapsed {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
          visibility: visible;
          padding: 0.2rem;
          width: 3rem;
          height: 2.8rem;
          min-width: 3rem;
        }

        .contact-bar.compressing {
          animation: compressAndDisappear 0.6s cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        .contact-bar.expanding {
          animation: expandAndAppear 0.6s cubic-bezier(0, 0, 0.2, 1) forwards;
          transform-origin: center center !important;
          left: 50% !important;
          margin-left: 0 !important;
          position: fixed !important;
        }

        @keyframes compressAndDisappear {
          0% {
            transform: translateX(-50%) translateY(0) scaleX(1) scaleY(1);
            opacity: 1;
          }
          30% {
            transform: translateX(-50%) translateY(0) scaleX(0.7) scaleY(1.1);
            opacity: 0.8;
          }
          60% {
            transform: translateX(-50%) translateY(0) scaleX(0.3) scaleY(0.8);
            opacity: 0.4;
          }
          100% {
            transform: translateX(-50%) translateY(10px) scaleX(0) scaleY(0);
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes expandAndAppear {
          0% {
            transform: translateX(-50%) translateY(10px) scale(0) !important;
            opacity: 0;
            visibility: visible;
            left: 50% !important;
            margin-left: 0 !important;
          }
          40% {
            transform: translateX(-50%) translateY(0) scale(0.3) !important;
            opacity: 0.4;
            left: 50% !important;
            margin-left: 0 !important;
          }
          70% {
            transform: translateX(-50%) translateY(0) scaleX(0.7) scaleY(1.1) !important;
            opacity: 0.8;
            left: 50% !important;
            margin-left: 0 !important;
          }
          100% {
            transform: translateX(-50%) translateY(0) scale(1) !important;
            opacity: 1;
            visibility: visible;
            left: 50% !important;
            margin-left: 0 !important;
          }
        }

        .email-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .email-button:hover::before {
          left: 100%;
        }

        .email-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .email-button:hover .button-icon {
          transform: translateX(2px);
        }

        .contact-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          transition: gap 3s cubic-bezier(0.23, 1, 0.32, 1);
          white-space: nowrap;
          opacity: 1;
        }

        .contact-content.collapsed {
          gap: 0;
          opacity: 1;
        }

        .email-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.65rem;
          border-radius: 1.5rem;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.85rem;
          transition: all 3s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          width: 2.6rem;
          height: 2.4rem;
          cursor: pointer;
        }

        .email-button.collapsed {
          padding: 0.65rem;
          width: 2.6rem;
          height: 2.4rem;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          border-radius: 1.3rem;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
        }

        .social-divider {
          width: 1px;
          height: 1.8rem;
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 1;
          transform: scaleX(1);
          margin: 0 0.4rem;
        }

        .social-divider.collapsed {
          opacity: 0;
          transform: scaleX(0);
          width: 0;
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: 0.8rem;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 1;
          transform: scale(1);
          width: auto;
          max-width: 60px;
          overflow: hidden;
        }

        .social-links.collapsed {
          opacity: 0;
          transform: scale(0.9);
          width: 0;
          max-width: 0;
          gap: 0;
          margin: 0;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.65rem;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.85rem;
          white-space: nowrap;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          width: 2.6rem;
          height: 2.4rem;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 1.5rem;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
        }

        .social-icon:hover::before {
          width: 100%;
          height: 100%;
        }

        .social-icon:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 1);
        }

        .linkedin-icon {
          color: #0077b5;
          background: none;
          border: none;
          cursor: pointer;
        }

        .linkedin-icon:hover {
          color: #0077b5;
          border-color: rgba(0, 119, 181, 0.3);
          background: rgba(0, 119, 181, 0.1);
        }

        @media (max-width: 640px) {
          .contact-bar {
            bottom: 1.5rem;
            padding: 0.6rem 1.2rem;
            height: 3.2rem;
          }

          .contact-bar.collapsed {
            padding: 0.4rem;
            width: 3.6rem;
            height: 2.8rem;
            min-width: 3.6rem;
          }

          .email-button {
            padding: 0.65rem;
            width: 2.6rem;
            height: 2.4rem;
          }

          .email-button.collapsed {
            padding: 0.65rem;
            width: 2.6rem;
            height: 2.4rem;
          }

          .social-icon {
            padding: 0.65rem;
            width: 2.6rem;
            height: 2.4rem;
          }

          .button-icon, .social-icon svg {
            width: 20px;
            height: 20px;
          }
        }

        .social-container {
          display: none;
        }

        .location-emoji.finding-animation {
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.8; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1);
          }
        }

        .weather-container.pin-only .weather-content {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .weather-container.pin-only .weather-content .location-pin {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          height: auto !important;
          overflow: visible !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 1rem !important;
          line-height: 1 !important;
          z-index: 1000 !important;
          position: relative !important;
        }

        .weather-container.pin-only .location-emoji {
          display: none !important;
          opacity: 0 !important;
          width: 0 !important;
          overflow: hidden !important;
        }

        .weather-container.pin-only .time-separator {
          display: block !important;
          opacity: 0 !important;
          visibility: hidden !important;
          width: 0 !important;
          margin: 0 !important;
          transform: scaleX(0);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .weather-container.pin-only .time-text {
          display: block !important;
          opacity: 0 !important;
          visibility: hidden !important;
          max-width: 0 !important;
          overflow: hidden !important;
          white-space: nowrap;
          transform: translateX(-20px);
          transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .weather-container.pin-only:hover .time-separator {
          opacity: 1 !important;
          visibility: visible !important;
          width: 3px !important;
          height: 3px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          margin: 0 0.4rem !important;
          transform: scaleX(1) !important;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
        }

        .weather-container.pin-only:hover .time-text {
          opacity: 1 !important;
          visibility: visible !important;
          max-width: 100px !important;
          overflow: visible !important;
          font-size: 0.75rem !important;
          color: rgba(255, 255, 255, 0.8) !important;
          transform: translateX(0) !important;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.4s;
        }

        .weather-container.pin-only:hover .location-text {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          overflow: visible !important;
          margin-left: 0.5rem !important;
        }

        .contact-form {
          opacity: 0;
          visibility: hidden;
          width: 92vw;
          max-width: 32rem;
          margin: 1rem auto 2rem auto;
          padding: 1.2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          backdrop-filter: blur(20px);
          transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
          transform: translateY(30px);
          box-sizing: border-box;
          max-height: 80vh;
          overflow-y: auto;
        }



        @media (max-width: 480px) {
          .contact-form {
            width: 92vw;
            padding: 0.6rem;
            max-height: 85vh;
            font-size: 0.85rem;
          }
        }

        .contact-form.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .contact-form .form-title {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 500;
        }

        .contact-form .form-group {
          margin-bottom: 1.2rem;
        }

        .contact-form label {
          display: block;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.5rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.8rem;
          font-family: inherit;
          transition: all 0.3s ease;
          box-sizing: border-box;
          resize: none;
        }

        @media (max-width: 768px) {
          .contact-form input,
          .contact-form textarea {
            padding: 0.6rem 0.8rem;
            font-size: 0.85rem;
          }
          
          .contact-form textarea {
            min-height: 70px;
            max-height: 90px;
          }
          
          .contact-form .form-group {
            margin-bottom: 0.8rem;
          }
          
          .contact-form .form-title {
            font-size: 0.8rem;
            margin-bottom: 1rem;
          }
          
          .contact-form label {
            font-size: 0.7rem;
            margin-bottom: 0.4rem;
          }
          
          .contact-form .submit-button {
            padding: 0.8rem 1.2rem;
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .contact-form input,
          .contact-form textarea {
            padding: 0.5rem 0.7rem;
            font-size: 0.8rem;
          }
          
          .contact-form textarea {
            min-height: 60px;
            max-height: 80px;
          }
          
          .contact-form .form-group {
            margin-bottom: 0.7rem;
          }
          
          .contact-form .form-title {
            font-size: 0.75rem;
            margin-bottom: 0.8rem;
          }
          
          .contact-form label {
            font-size: 0.65rem;
            margin-bottom: 0.3rem;
          }
          
          .contact-form .submit-button {
            padding: 0.7rem 1rem;
            font-size: 0.7rem;
          }
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .contact-form textarea {
          min-height: 100px;
          max-height: 150px;
        }

        .contact-form .submit-button {
          width: 100%;
          padding: 0.9rem 1.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-family: inherit;
        }

        .contact-form .submit-button:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .contact-form .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .contact-form .submit-button:disabled:hover {
          transform: none;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-color: rgba(255, 255, 255, 0.2);
        }

        .form-message {
          padding: 0.8rem 1rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          font-size: 0.8rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .form-message.success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: rgba(34, 197, 94, 0.9);
        }

        .form-message.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: rgba(239, 68, 68, 0.9);
        }

        @media (min-width: 640px) {
          .contact-form {
            padding: 2rem;
            max-width: 28rem;
            width: 80%;
          }

          .contact-form .form-title {
            font-size: 1rem;
          }

          .contact-form label {
            font-size: 0.8rem;
          }

          .contact-form input,
          .contact-form textarea {
            font-size: 0.85rem;
            padding: 0.9rem 1.2rem;
          }

          .contact-form .submit-button {
            font-size: 0.85rem;
            padding: 1rem 1.8rem;
          }
        }

        @media (min-width: 1024px) {
          .contact-form {
            max-width: 32rem;
            width: 75%;
          }
        }
      `}</style>

      <div className="top-gradient" />

      <div className={mainContentClass} data-expansion={expansionLevel}>
        <div className="mobile-text">
          <p>Hi, I'm Aleks — I help turn ambitious ideas into reality through strategic execution.</p>
        </div>
        
        <div className="desktop-text">
          <span>Hi</span><span>, </span>
          <span>I'm </span>
          <span className="name relative">Aleks</span>
          <span>— </span>
          <span>I help turn ambitious ideas into </span>
          <span className="vision">reality</span>
          <span> through strategic </span><span className="execution">execution</span><span>.</span>
        </div>

        <div className={firstExpandClass} onClick={() => toggleContent(true)} />

        <div className={`content-section ${expansionLevel >= 1 ? 'visible' : ''}`}>
          <div className="section-hint">Leadership & Scale</div>
          <p>
          I've led cross-functional teams through complex product development cycles, with experience managing initiatives ranging from mid-six to seven figures. My focus is on clear communication, realistic timelines, and building scalable processes that align business needs with technical execution
          </p>
        </div>

        <div className={`content-section ${expansionLevel >= 2 ? 'visible' : ''}`} onClick={() => expansionLevel >= 2 && setExpansionLevel(3)}>
          <div className="section-hint">Current Work</div>
          <p>
          At my current role as a Strategic Program Manager, I align industrial design, mechanical, electrical, firmware, UX, and brand teams around a unified roadmap. I own schedules, budgets, and risk plans for products shipping into medical, robotics, and wearable markets, serving founders fresh off seed rounds as well as multinational enterprises launching next‑gen lines.
          </p>
        </div>

        <div className={`content-section ${expansionLevel >= 3 ? 'visible' : ''}`} style={{ 
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          margin: '0.8rem auto 1.5rem auto',
          padding: '1rem 1.5rem'
        }}>
          <div className="text-center mb-4">
            <div className="section-hint">Journey</div>
            <p className="text-white/60 font-light" style={{ fontSize: '0.7rem' }}>Explore the timeline</p>
          </div>
          <div 
            ref={timelineRef}
            className="timeline"
            onMouseMove={handleTimelineMove}
            style={{ 
              position: 'relative', 
              marginBottom: '1rem',
              padding: '0 1rem'
            }}
          >
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className="timeline-item"
                style={{ left: `${(index / (timelineData.length - 1)) * 100}%` }}
                onClick={() => handleTimelineItemClick(index)}
              >
                <span className="year">{item.year}</span>
              </div>
            ))}
          </div>
          <div style={{ 
            minHeight: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 1rem',
            marginBottom: '1.5rem'
          }}>
            <p className="timeline-text">
              {timelineText}
            </p>
          </div>
        </div>

        <div className={`contact-form ${expansionLevel >= 4 ? 'visible' : ''}`}>
          <div className="form-title">Get In Touch</div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
            </div>
            
            {formMessage && (
              <div className={`form-message ${formStatus}`}>
                {formMessage}
              </div>
            )}
            
            <button type="submit" className="submit-button" disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Weather widget below contact form on mobile */}
        <div className={`mobile-weather-container ${expansionLevel >= 4 ? 'visible' : ''}`}>
          <div className={`weather-container ${isLoading ? 'loading' : 'pin-only'}`}>
            <div className="weather-content">
              <span className="location-pin">📍</span>
              <span className={`location-emoji ${isLoading ? 'finding-animation' : ''}`}>
                {isLoading ? '🔍' : weatherEmoji}
              </span>
              <span className={`location-text ${isLoading ? 'loading' : ''}`}>{location}</span>
              {currentTime && !isLoading && (
                <>
                  <span className="time-separator"></span>
                  <span className="time-text">{currentTime}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`weather-container ${isLoading ? 'loading' : 'pin-only'}`}>
        <div className="weather-content">
          <span className="location-pin">📍</span>
          <span className={`location-emoji ${isLoading ? 'finding-animation' : ''}`}>
            {isLoading ? '🔍' : weatherEmoji}
          </span>
          <span className={`location-text ${isLoading ? 'loading' : ''}`}>{location}</span>
          {currentTime && !isLoading && (
            <>
              <span className="time-separator"></span>
              <span className="time-text">{currentTime}</span>
            </>
          )}
        </div>
      </div>

      {contactDiscovered && (expansionLevel < 3 || contactCompressing || contactExpanding) && (
        <div className={`contact-bar ${!contactExpanded ? 'collapsed' : ''} ${contactCompressing ? 'compressing' : ''} ${contactExpanding ? 'expanding' : ''}`}>
          <div className={`contact-content ${!contactExpanded ? 'collapsed' : ''}`}>
            <button 
              type="button" 
              className={`email-button ${!contactExpanded ? 'collapsed' : ''}`}
              onClick={() => window.location.href = 'mailto:aleksandertsatskin@gmail.com'}
            >
              <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </button>
            
            <div className={`social-divider ${!contactExpanded ? 'collapsed' : ''}`}></div>
            
            <div className={`social-links ${!contactExpanded ? 'collapsed' : ''}`}>
              <button
                type="button"
                className="social-icon linkedin-icon"
                onClick={() => window.open('https://www.linkedin.com/in/aleksander-tsatskin-63167125', '_blank')}
                title="LinkedIn Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5" stroke="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
