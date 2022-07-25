import React, { useRef, useEffect, useState } from "react";
import throttle from "lodash.throttle";

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
function useVisibility( offset = -170, throttleMilliseconds = 100, afterEffect = false): [Boolean, React.RefObject<any>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef<HTMLElement>(null);
  const topMinusOffset = afterEffect ? -1200 : 0;

  const handleScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= topMinusOffset && top - offset <= window.innerHeight);
  }, throttleMilliseconds);

  useEffect(() => {
    if(!afterEffect && isVisible) return;
    document.addEventListener('scroll', handleScroll, true);
    return () => document.removeEventListener('scroll', handleScroll, true);
  });

  return [isVisible, currentElement];
}

export default useVisibility;