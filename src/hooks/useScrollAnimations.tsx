
import { useEffect, useRef } from "react";

export const useScrollAnimations = () => {
  // Reference for scroll animation
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll reveal animation
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        revealElements.forEach((el) => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  return observerRef;
};

export default useScrollAnimations;
