import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { PersonalInfo } from '../../types/portfolio';
import { PROFILE_HEADLINE, PROFILE_IMAGE, USDA_TOUR_URL } from '../../constants/profile';
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
        <header className="bg-gray-800 text-white p-8 md:p-12 rounded-b-lg shadow-xl mb-12">
          <div className="max-w-5xl mx-auto">
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

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <img
                  src={PROFILE_IMAGE}
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-500"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{info.name}</h1>
                <p className="text-xl text-gray-300 mb-6">{PROFILE_HEADLINE}</p>
                <ContactLinks links={info.links} />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
