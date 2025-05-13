
import * as React from "react"
import { useDebounce } from "./use-debounce"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null)

  const checkMobile = React.useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
  }, [])

  const debouncedCheckMobile = useDebounce(checkMobile, 100)
  
  React.useEffect(() => {
    // Initial check
    checkMobile()
    
    // Set up the event listener for resize with debounce for better performance
    window.addEventListener('resize', debouncedCheckMobile)
    
    // Clean up
    return () => window.removeEventListener('resize', debouncedCheckMobile)
  }, [checkMobile, debouncedCheckMobile])

  // Only return true/false when we have a definitive answer
  return isMobile === null ? false : isMobile
}
