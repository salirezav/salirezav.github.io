import React, { useLayoutEffect, useRef } from 'react';
import { SkillLevel } from '../../types/portfolio';
import { prefersReducedMotion } from '../../hooks/useRevealOnce';

interface SkillBarProps {
  name: string;
  level: SkillLevel;
}

const levelMap: Record<SkillLevel, { width: string; percent: string; color: string }> = {
  Advanced: { width: 'w-full', percent: '100%', color: 'bg-blue-500' },
  Intermediate: { width: 'w-2/3', percent: '66.6667%', color: 'bg-blue-400' },
  Basic: { width: 'w-1/3', percent: '33.3333%', color: 'bg-blue-300' },
};

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const { width, percent, color } = levelMap[level] || levelMap.Basic;
  const fillRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = fillRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (prefersReducedMotion()) {
      el.style.width = percent;
      return;
    }

    el.style.transition = 'none';
    el.style.width = '0%';
    const track = el.parentElement;
    if (!track) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      requestAnimationFrame(() => {
        el.style.transition = 'width 900ms ease-out';
        el.style.width = percent;
      });
    }, { threshold: 0.2 });

    observer.observe(track);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          ref={fillRef}
          className={`skill-bar-fill h-2.5 rounded-full ${color} ${width}`}
          style={{ ['--skill-width' as string]: percent }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
