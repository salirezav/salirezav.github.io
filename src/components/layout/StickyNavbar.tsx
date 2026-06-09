import React from 'react';
import { PersonalInfo } from '../../types/portfolio';
import { PROFILE_HEADLINE, PROFILE_IMAGE } from '../../constants/profile';
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
    <div className="w-full px-4 md:px-8 lg:px-12 py-2.5">
      <div className="flex items-center gap-3 md:gap-4 mb-2">
        <img
          src={PROFILE_IMAGE}
          alt=""
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-500 flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-xs sm:text-sm md:text-base leading-tight">{info.name}</p>
          <p className="text-[10px] sm:text-xs text-gray-300 leading-snug">{PROFILE_HEADLINE}</p>
        </div>
      </div>
      <ContactLinks links={info.links} compact />
    </div>
  </nav>
);

export default StickyNavbar;
