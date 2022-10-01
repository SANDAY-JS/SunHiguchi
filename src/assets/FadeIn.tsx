import React, { useEffect, useRef, useState } from "react";

type Props = {
    children: JSX.Element[] | JSX.Element;
    className?: string;
    id?: string;
    onlyOpacity?: boolean;
    slow?: boolean;
    delay?: boolean;
}


const FadeIn = ({ children, className, id, onlyOpacity, slow, delay }: Props) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState<boolean>(false);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });

      observer.observe(domRef.current);
      
      return () => observer.disconnect();
    }, []);
  
    return (
      <div 
        ref={ domRef } 
        id={id ?? ''}
        className={`fadeInEl ${onlyOpacity ? 'onlyOpacity' : ''} ${delay ? `!delay-1000` : ''} ${slow ? 'durationSlow' : ''} ${className ?? ''} ${isVisible ? 'fadeIn' : ''}`}
      >
        { children }
      </div>
    ) 
  };
  
  export default FadeIn;