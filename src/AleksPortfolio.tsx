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
  const [formStatus, setFormStatus] = useState('idle');
  const [formMessage, setFormMessage] = useState('');
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0, isMobile: false });
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [debugInfo, setDebugInfo] = useState({});
  
  const lastWheelTime = useRef(0);
  const isAnimating = useRef(false);
  const timelineRef = useRef(null);
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const CONFIG = {
    ZIP_CODE: '94132',
    REFRESH_INTERVAL: 300000,
    API_TIMEOUT: 5000,
    ARTIFICIAL_DELAY: 4000
  };

  // Screen size detection and responsive utilities
  const updateScreenSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    
    setScreenSize({ 
      width, 
      height, 
      isMobile,
      isTablet,
      isDesktop,
      // Calculate safe viewport height accounting for mobile browsers
      safeHeight: window.innerHeight,
      // Determine expansion levels based on content
      maxExpansionLevel: isMobile ? 4 : 4
    });
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
      description: 'Graduated SJSU with B.S. in Industrial Design. Named IDSA \'17 Finalist for systematic approach to design challenges and cross-functional collaboration.'
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
    const randomDelay = Math.floor(Math.random() * 5000) + 5000;
    let finalLocation = 'San Francisco, CA';

    const isFastConnection = await checkConnectionSpeed();
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

  const toggleContent = (expand) => {
    if (expand && expansionLevel < screenSize.maxExpansionLevel) {
      const newLevel = expansionLevel + 1;
      setExpansionLevel(newLevel);
      
      if (newLevel === 1) {
        setShowWeatherOnMobile(true);
        if (screenSize.isMobile && !weatherAnimationStarted) {
          setWeatherAnimationStarted(true);
          if (!weatherAnimationCompleted) {
            fetchWeather();
          }
        }
      }
    } else if (!expand && expansionLevel > 0) {
      const newLevel = expansionLevel - 1;
      setExpansionLevel(newLevel);
      
      if (newLevel === 0) {
        setShowWeatherOnMobile(false);
      }
    }
  };

  const handleWheel = (event) => {
    const now = Date.now();
    const wheelDelay = screenSize.isMobile ? 800 : 1200;
    
    if (isAnimating.current || now - lastWheelTime.current < wheelDelay) {
      return;
    }

    const isScrollingDown = event.deltaY > 0;
    
    isAnimating.current = true;
    lastWheelTime.current = now;

    if (isScrollingDown && expansionLevel < screenSize.maxExpansionLevel) {
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

  const handleTimelineMove = (e) => {
    if (!timelineRef.current) return;
    
    const rect = timelineRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    const exactPosition = Math.max(0, Math.min(100, position));
    
    setMousePosition(exactPosition);
    
    const index = Math.round((exactPosition / 100) * (timelineData.length - 1));
    const description = timelineData[index]?.description;
    
    if (description) {
      setTimelineText(description);
    }
  };

  const handleTimelineItemClick = (index) => {
    const position = (index / (timelineData.length - 1)) * 100;
    setMousePosition(position);
    setTimelineText(timelineData[index].description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setFormStatus('submitting');
    setFormMessage('');
    
    const form = e.target;
    const formData = new FormData(form);
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
      setTimeout(() => {
        setFormStatus('idle');
        setFormMessage('');
      }, 5000);
    }
  };

  const handleExpansion = () => {
    if (expansionLevel >= 0) {
      setContactDiscovered(true);
      if (expansionLevel >= 3) {
        setContactExpanded(true);
      } else {
        setContactExpanded(false);
      }
    } else {
      setContactDiscovered(false);
      setContactExpanded(false);
    }
  };

  // Touch handling for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;

    if (isUpSwipe && expansionLevel < screenSize.maxExpansionLevel) {
      toggleContent(true);
    }
    if (isDownSwipe && expansionLevel > 0) {
      toggleContent(false);
    }
  };

  useEffect(() => {
    updateScreenSize();
    
    const handleResize = () => {
      updateScreenSize();
      // Recheck form visibility on resize
      setTimeout(checkFormVisibility, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setWeatherAnimationStarted(true);
    fetchWeather();
    
    setMousePosition(0);
    setTimelineText(timelineData[0].description);
    
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);
    
    const handleWheelEvent = (e) => handleWheel(e);
    window.addEventListener('wheel', handleWheelEvent, { passive: false });
    
    handleExpansion();
    
    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
      clearInterval(timeInterval);
    };
  }, [expansionLevel, screenSize]);

  // Check form visibility after transitions
  useEffect(() => {
    if (expansionLevel === 4) {
      const timer = setTimeout(checkFormVisibility, 1300); // After transition completes
      return () => clearTimeout(timer);
    }
  }, [expansionLevel]);

  // Dynamic styles based on screen size and expansion level
  const getContainerStyle = () => {
    const availableHeight = screenSize.safeHeight;
    
    // Much more aggressive positioning for level 4
    if (expansionLevel === 4) {
      // Calculate total content height and force it to fit
      const heroHeight = 80;
      const sectionsHeight = 3 * 120; // 3 sections at 120px each
      const formHeight = 280;
      const totalNeeded = heroHeight + sectionsHeight + formHeight;
      
      // If content is taller than screen, position at very top
      if (totalNeeded > availableHeight) {
        return {
          transform: `translateY(10px)`, // Almost at top
          transition: 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)'
        };
      }
      
      // Otherwise position to fit exactly
      const position = Math.max(10, availableHeight - totalNeeded - 20);
      return {
        transform: `translateY(${position}px)`,
        transition: 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)'
      };
    }
    
    // For other levels, use progressive positioning
    const positions = {
      0: availableHeight * 0.45,  // Center
      1: availableHeight * 0.35,  // Up a bit
      2: availableHeight * 0.25,  // Higher
      3: availableHeight * 0.15   // Much higher
    };
    
    return {
      transform: `translateY(${positions[expansionLevel]}px)`,
      transition: 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)'
    };
  };

  // Check if form is visible in viewport
  const checkFormVisibility = () => {
    if (!formRef.current || expansionLevel < 4) return;
    
    const formRect = formRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Check if form bottom is below viewport
    const isFormCutOff = formRect.bottom > viewportHeight - 50; // Bigger buffer
    setIsFormVisible(!isFormCutOff);
    
    console.log('Form check:', {
      formBottom: formRect.bottom,
      viewportHeight,
      isFormCutOff,
      expansionLevel
    });
  };

  const mainContentClass = `main-content ${expansionLevel > 0 ? `expanded-${expansionLevel}` : ''}`;
  const firstExpandClass = `expand-button ${expansionLevel > 0 ? 'expanded' : ''}`;

  return (
    <div 
      ref={containerRef}
      className="portfolio-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        minHeight: '100vh',
        height: `${screenSize.safeHeight}px`,
        maxHeight: `${screenSize.safeHeight}px`,
        background: '#000000',
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          margin: 0;
          padding: 0;
          background: #000000;
          color: rgba(255, 255, 255, 0.7);
          overflow: hidden;
          height: 100vh;
          width: 100vw;
        }

        .portfolio-container {
          width: 100vw;
          position: relative;
          padding: 0;
          margin: 0;
        }

        .top-gradient {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: clamp(100px, 15vh, 150px);
          background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%);
          pointer-events: none;
          z-index: 50;
        }

        .main-content {
          position: relative;
          width: 100%;
          text-align: center;
          will-change: transform;
          padding: 0 1rem;
          max-width: 100vw;
          overflow: visible;
        }

        .desktop-text, .mobile-text {
          font-size: clamp(0.9rem, 4vw, 1.4rem);
          color: rgba(255, 255, 255, 0.85);
          max-width: 95%;
          margin: 0 auto;
          word-wrap: break-word;
          hyphens: auto;
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.3;
          padding: 0 0.5rem;
        }

        @media (max-width: 767px) {
          .desktop-text {
            display: none;
          }
          .mobile-text {
            display: block;
            font-size: clamp(1rem, 5vw, 1.2rem);
            line-height: 1.4;
          }
        }

        @media (min-width: 768px) {
          .mobile-text {
            display: none;
          }
          .desktop-text {
            display: block;
          }
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
          width: clamp(24px, 6vw, 32px);
          height: clamp(24px, 6vw, 32px);
          margin: clamp(0.8rem, 2vw, 1.2rem) auto;
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

        .expand-button:hover, .expand-button:active {
          opacity: 0.9;
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.1);
        }

        .expand-button::before {
          content: '';
          position: absolute;
          width: clamp(8px, 2vw, 12px);
          height: clamp(8px, 2vw, 12px);
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
          width: 95%;
          max-width: min(90vw, 32rem);
          margin: clamp(0.3rem, 1vw, 0.8rem) auto;
          padding: clamp(0.8rem, 2vw, 1.2rem);
          color: rgba(255, 255, 255, 0.75);
          transition: opacity 1s ease, visibility 1s ease, transform 1s ease;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          font-size: clamp(0.75rem, 2.5vw, 0.85rem);
          line-height: 1.4;
          text-align: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: clamp(6px, 1.5vw, 8px);
          backdrop-filter: blur(20px);
          transform: translateY(15px);
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

        .section-hint {
          font-size: clamp(0.7rem, 2vw, 0.85rem);
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: clamp(0.6rem, 2vw, 0.8rem);
          text-align: center;
          font-weight: 500;
        }

        .timeline {
          position: relative;
          width: 100%;
          height: clamp(60px, 12vw, 80px);
          cursor: pointer;
          margin-bottom: clamp(0.8rem, 2vw, 1.2rem);
          padding: 0 clamp(0.5rem, 2vw, 1rem);
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 50%;
          left: clamp(0.5rem, 2vw, 1rem);
          right: clamp(0.5rem, 2vw, 1rem);
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          z-index: 1;
        }

        .timeline::after {
          content: '';
          position: absolute;
          top: 50%;
          left: calc(clamp(0.5rem, 2vw, 1rem) + ${mousePosition}% * (100% - ${2 * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--timeline-padding') || '1rem')}));
          width: clamp(8px, 2vw, 12px);
          height: clamp(8px, 2vw, 12px);
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
          width: clamp(40px, 10vw, 60px);
          text-align: center;
          padding: clamp(4px, 1vw, 8px) 0;
          z-index: 3;
        }

        .timeline-item .year {
          font-size: clamp(0.7rem, 2vw, 0.85rem);
          color: rgba(255, 255, 255, 0.7);
          display: block;
          white-space: nowrap;
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .timeline-item:hover .year,
        .timeline-item:active .year {
          opacity: 1;
          transform: translateY(-2px);
        }

        .timeline-text {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          max-width: 100%;
          margin: 0;
          font-size: clamp(0.75rem, 2.5vw, 0.85rem);
          line-height: 1.5;
          text-align: center;
          color: rgba(255, 255, 255, 0.85);
        }

        .weather-container {
          position: fixed;
          top: clamp(1rem, 3vw, 1.5rem);
          right: clamp(1rem, 3vw, 1.5rem);
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: clamp(1rem, 3vw, 1.5rem);
          padding: clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.6rem, 2vw, 0.8rem);
          font-size: clamp(0.7rem, 2vw, 0.8rem);
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          cursor: pointer;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          visibility: visible;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: clamp(2rem, 6vw, 2.5rem);
          min-height: clamp(2rem, 6vw, 2.5rem);
        }

        @media (max-width: 767px) {
          .weather-container {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
        }

        .weather-content {
          display: flex;
          align-items: center;
          gap: clamp(0.3rem, 1vw, 0.5rem);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .location-pin {
          font-size: clamp(0.8rem, 2vw, 1rem);
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }

        .location-emoji {
          font-size: clamp(0.8rem, 2vw, 0.9rem);
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

        .location-text {
          font-weight: 500;
          opacity: 1;
          transform: translateX(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          width: auto;
          overflow: visible;
          margin-left: clamp(0.1rem, 0.5vw, 0.2rem);
        }

        .location-text.loading::after {
          content: '';
          display: inline-block;
          width: 20px;
          text-align: left;
          animation: loadingDots 2s linear infinite;
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
          margin: 0 clamp(0.1rem, 0.5vw, 0.2rem);
          opacity: 0;
          transform: scale(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .weather-container:hover .time-separator {
          opacity: 1;
          transform: scale(1);
        }

        .time-text {
          font-size: clamp(0.6rem, 1.5vw, 0.7rem);
          color: rgba(255, 255, 255, 0.7);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .weather-container:hover .time-text {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-bar {
          position: fixed;
          bottom: max(1.5rem, env(safe-area-inset-bottom));
          left: 50%;
          transform: translateX(-50%) translateY(100%);
          width: auto;
          max-width: clamp(16rem, 40vw, 20rem);
          min-width: clamp(2.5rem, 8vw, 3rem);
          height: clamp(2.5rem, 8vw, 3rem);
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: clamp(1.25rem, 4vw, 1.5rem);
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
          padding: clamp(0.2rem, 1vw, 0.3rem);
          width: clamp(2.5rem, 8vw, 3rem);
          height: clamp(2.5rem, 8vw, 3rem);
        }

        .contact-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.6rem, 2vw, 0.8rem);
          transition: gap 0.8s cubic-bezier(0.23, 1, 0.32, 1);
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
          padding: clamp(0.5rem, 2vw, 0.65rem);
          border-radius: clamp(1.25rem, 4vw, 1.5rem);
          text-decoration: none;
          font-weight: 500;
          font-size: clamp(0.7rem, 2vw, 0.85rem);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          width: clamp(2.2rem, 7vw, 2.6rem);
          height: clamp(2.2rem, 7vw, 2.4rem);
          cursor: pointer;
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

        .email-button:hover::before,
        .email-button:active::before {
          left: 100%;
        }

        .email-button:hover,
        .email-button:active {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .email-button.collapsed {
          width: clamp(2.2rem, 7vw, 2.6rem);
          height: clamp(2.2rem, 7vw, 2.4rem);
          border-radius: clamp(1.1rem, 3.5vw, 1.3rem);
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
          height: clamp(1.5rem, 5vw, 1.8rem);
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 1;
          transform: scaleX(1);
          margin: 0 clamp(0.3rem, 1vw, 0.4rem);
        }

        .social-divider.collapsed {
          opacity: 0;
          transform: scaleX(0);
          width: 0;
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: clamp(0.6rem, 2vw, 0.8rem);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 1;
          transform: scale(1);
          width: auto;
          max-width: clamp(50px, 15vw, 60px);
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
          padding: clamp(0.5rem, 2vw, 0.65rem);
          border-radius: clamp(1.25rem, 4vw, 1.5rem);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          font-size: clamp(0.7rem, 2vw, 0.85rem);
          white-space: nowrap;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          width: clamp(2.2rem, 7vw, 2.6rem);
          height: clamp(2.2rem, 7vw, 2.4rem);
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.15);
          border-radius: clamp(1.25rem, 4vw, 1.5rem);
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
        }

        .social-icon:hover::before,
        .social-icon:active::before {
          width: 100%;
          height: 100%;
        }

        .social-icon:hover,
        .social-icon:active {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 1);
        }

        .linkedin-icon {
          color: #0077b5;
        }

        .linkedin-icon:hover,
        .linkedin-icon:active {
          color: #0077b5;
          border-color: rgba(0, 119, 181, 0.3);
          background: rgba(0, 119, 181, 0.1);
        }

        .contact-form {
          opacity: 0;
          visibility: hidden;
          width: 90%;
          max-width: 26rem;
          margin: 0.3rem auto 0.5rem auto;
          padding: 0.6rem 0.8rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          backdrop-filter: blur(20px);
          transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
          transform: translateY(10px);
          box-sizing: border-box;
        }

        .contact-form.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .contact-form .form-title {
          font-size: clamp(0.8rem, 2.5vw, 0.9rem);
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: clamp(1rem, 3vw, 1.5rem);
          text-align: center;
          font-weight: 500;
        }

        .contact-form .form-title {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.8rem;
          text-align: center;
          font-weight: 500;
        }

        .contact-form .form-group {
          margin-bottom: 0.6rem;
        }

        .contact-form label {
          display: block;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.25rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.5rem 0.7rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.7rem;
          font-family: inherit;
          transition: all 0.3s ease;
          box-sizing: border-box;
          resize: none;
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
          min-height: 45px;
          max-height: 80px;
        }

        .contact-form .submit-button {
          width: 100%;
          padding: 0.6rem 1rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-family: inherit;
        }

        .contact-form .submit-button:hover,
        .contact-form .submit-button:active {
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

        .form-message {
          padding: clamp(0.7rem, 2vw, 0.8rem) clamp(0.8rem, 2.5vw, 1rem);
          border-radius: clamp(5px, 1.5vw, 6px);
          margin-bottom: clamp(0.8rem, 2vw, 1rem);
          font-size: clamp(0.75rem, 2vw, 0.8rem);
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

        /* Touch targets for mobile */
        @media (max-width: 767px) {
          .expand-button,
          .email-button,
          .social-icon,
          .timeline-item {
            min-width: 44px;
            min-height: 44px;
          }
          
          .contact-form {
            margin: 0.2rem auto 0.3rem auto;
            padding: 0.5rem 0.6rem;
            width: 88%;
            max-width: 24rem;
          }

          .content-section {
            margin: 0.3rem auto;
            padding: 0.6rem;
            line-height: 1.25;
          }

          .main-content {
            padding-bottom: 0.3rem;
          }

          .contact-form .form-title {
            font-size: 0.75rem;
            margin-bottom: 0.6rem;
          }

          .contact-form .form-group {
            margin-bottom: 0.5rem;
          }

          .contact-form textarea {
            min-height: 40px;
            max-height: 70px;
          }

          .contact-form input,
          .contact-form textarea {
            padding: 0.45rem 0.6rem;
            font-size: 0.65rem;
          }

          .contact-form .submit-button {
            padding: 0.55rem 0.9rem;
            font-size: 0.65rem;
          }
        }

        /* Landscape phone adjustments */
        @media (max-width: 896px) and (orientation: landscape) {
          .main-content {
            padding: 0 2rem;
          }
          
          .content-section {
            margin: 0.5rem auto;
            padding: 0.8rem;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .desktop-text {
            font-size: clamp(1.1rem, 3vw, 1.3rem);
          }
          
          .content-section {
            max-width: 28rem;
            width: 85%;
          }
        }

        /* Large screen adjustments */
        @media (min-width: 1200px) {
          .desktop-text {
            font-size: 1.4rem;
            max-width: 800px;
          }
          
          .content-section {
            max-width: 34rem;
            width: 70%;
          }
        }
      `}</style>

      <div className="top-gradient" />

      <div className="main-content" style={getContainerStyle()}>
        <div className="mobile-text">
          <p>Hi, I'm Aleks — I turn ambitious ideas into reality through strategic execution.</p>
        </div>
        
        <div className="desktop-text">
          <span>Hi</span><span>, </span>
          <span>I'm </span>
          <span className="name relative">Aleks</span>
          <span>— </span>
          <span>I turn ambitious ideas into </span>
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

        <div className={`content-section ${expansionLevel >= 2 ? 'visible' : ''}`}>
          <div className="section-hint">Current Work</div>
          <p>
          As Card79's Strategic Program Manager, I align industrial design, mechanical, electrical, firmware, UX, and brand teams around a unified roadmap. I own schedules, budgets, and risk plans for products shipping into medical, robotics, and wearable markets, serving founders fresh off seed rounds as well as multinational enterprises launching next‑gen lines.
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
      </div>

      {!screenSize.isMobile && (
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
      )}

      {contactDiscovered && expansionLevel < 4 && (
        <div className={`contact-bar ${!contactExpanded ? 'collapsed' : ''}`}>
          <div className={`contact-content ${!contactExpanded ? 'collapsed' : ''}`}>
            <button 
              type="button" 
              className={`email-button ${!contactExpanded ? 'collapsed' : ''}`}
              onClick={() => setExpansionLevel(4)}
            >
              <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </button>
            
            <div className={`social-divider ${!contactExpanded ? 'collapsed' : ''}`}></div>
            
            <div className={`social-links ${!contactExpanded ? 'collapsed' : ''}`}>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5" stroke="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
