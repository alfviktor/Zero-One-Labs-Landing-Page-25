import { useState, useEffect, useCallback } from 'react'

// Debounce function to limit frequent execution
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const useWindow = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    isSmallDes: false,
    isTablet: false,
    isMobile: false,
  })

  const calculateDimensions = useCallback(() => {
    if (typeof window === 'undefined') return
    
    const width = window.innerWidth
    const height = window.innerHeight
    
    return {
      width,
      height,
      isSmallDes: width >= 960 && width <= 1078,
      isTablet: width >= 648 && width <= 960,
      isMobile: width <= 648,
    }
  }, [])

  useEffect(() => {
    // Handle initial size
    setWindowSize(calculateDimensions())
    
    // Debounced resize handler to improve performance
    const handleResize = debounce(() => {
      setWindowSize(calculateDimensions())
    }, 150) // 150ms debounce time

    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [calculateDimensions])

  return windowSize
}
