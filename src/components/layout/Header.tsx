import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { PersonalInfo } from '../../types/portfolio';
import { PROFILE_IMAGE, PROFILE_TITLE_LINES, USDA_TOUR_URL } from '../../constants/profile';
import { SITE_SHELL } from '../../constants/layout';
import ContactLinks from './ContactLinks';
import StickyNavbar from './StickyNavbar';

interface HeaderProps {
  info: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ info }) => {
  const location = useLocation();
  const isStoriesPage = location.pathname.startsWith('/stories');
  const headerRef = useRef<HTMLDivElement>(null);
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyNav(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StickyNavbar info={info} visible={showStickyNav} />
      <div ref={headerRef}>
        <header className="site-header bg-gray-800 text-white py-8 md:py-12 rounded-b-lg shadow-xl mb-12">
          <div className={SITE_SHELL}>
            <nav className="mb-6 flex justify-center md:justify-between items-center">
              <div className="flex gap-4">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    !isStoriesPage ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  to="/stories"
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isStoriesPage ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  <BookOpen size={18} className="inline mr-2" />
                  Stories
                </Link>
              </div>
              <a
                href={USDA_TOUR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg transition-colors duration-300 bg-gray-700 hover:bg-gray-600 text-white"
              >
                USDA 360° Tour
              </a>
            </nav>

            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
              <div className="shrink-0">
                <img
                  src={PROFILE_IMAGE}
                  alt="Profile"
                  className="h-32 w-32 rounded-full object-cover shadow-[0_0_0_3px_#1f2937,0_0_0_5px_rgba(147,197,253,0.55),0_8px_24px_-6px_rgba(0,0,0,0.5)] md:h-40 md:w-40"
                />
              </div>

              <div className="flex w-full min-w-0 flex-1 flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-8">
                <div className="w-full text-center md:text-left lg:w-[20rem] lg:shrink-0 xl:w-[22rem]">
                  <h1 className="mb-2 text-balance text-4xl font-bold md:text-5xl">{info.name}</h1>
                  <div className="leading-snug">
                    {PROFILE_TITLE_LINES.map((line, index) => (
                      <p
                        key={line}
                        className={
                          index === 0
                            ? 'text-balance text-lg text-gray-100 sm:text-xl'
                            : `text-balance text-base text-gray-300 sm:text-lg${index === 1 ? ' mt-1' : ''}`
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="w-full min-w-0 lg:flex-1">
                  <ContactLinks links={info.links} />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
