import React from 'react';
import { PersonalInfo } from '../../types/portfolio';
import { PROFILE_IMAGE } from '../../constants/profile';
import { SITE_SHELL } from '../../constants/layout';
import ContactLinks from './ContactLinks';

interface StickyNavbarProps {
  info: PersonalInfo;
  visible: boolean;
}

const StickyNavbar: React.FC<StickyNavbarProps> = ({ info, visible }) => (
  <nav
    aria-hidden={!visible}
    className={`fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-xl border-b border-gray-700 transition-transform duration-300 ease-in-out ${
      visible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
    }`}
  >
    <div className={`${SITE_SHELL} py-1.5`}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
        <div className="flex w-full min-w-0 items-center gap-3 sm:w-auto sm:min-w-0 sm:flex-1">
          <img
            src={PROFILE_IMAGE}
            alt=""
            className="h-9 w-9 shrink-0 rounded-full border-2 border-gray-500 object-cover md:h-10 md:w-10"
          />
          <div className="min-w-0">
            <p className="truncate text-xs font-bold leading-tight sm:text-sm">{info.name}</p>
            <p className="truncate whitespace-nowrap text-[10px] leading-tight text-gray-300 sm:text-xs">
              <span>Postdoctoral Research Associate</span>
              <span className="hidden sm:inline"> · College of Engineering</span>
              <span className="hidden md:inline"> · University of Georgia</span>
            </p>
          </div>
        </div>
        <div className="w-full min-w-0 sm:w-auto sm:shrink-0">
          <ContactLinks links={info.links} compact />
        </div>
      </div>
    </div>
  </nav>
);

export default StickyNavbar;
