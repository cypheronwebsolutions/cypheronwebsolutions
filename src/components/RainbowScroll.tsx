import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const RainbowScroll = ({ children }: { children: React.ReactNode }) => {
  const smoothWrapper = useRef<HTMLDivElement>(null);
  const smoothContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!smoothWrapper.current || !smoothContent.current) return;

    // Create ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapper.current,
      content: smoothContent.current,
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });

    // Create rainbow gradient background animation
    const rainbow = gsap.timeline({
      scrollTrigger: {
        trigger: smoothContent.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    rainbow.to('body', {
      background: 'linear-gradient(180deg, hsl(0, 100%, 50%) 0%, hsl(60, 100%, 50%) 20%, hsl(120, 100%, 50%) 40%, hsl(180, 100%, 50%) 60%, hsl(240, 100%, 50%) 80%, hsl(300, 100%, 50%) 100%)',
      ease: 'none',
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={smoothWrapper} id="smooth-wrapper" className="relative">
      <div ref={smoothContent} id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default RainbowScroll;
