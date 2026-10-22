import React from 'react';
import { PersonalInfo } from '../../types/portfolio';
import { PROFILE_IMAGE, PROFILE_TITLE_LINES } from '../../constants/profile';
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
    <div className="w-full px-4 py-2.5 md:px-8 lg:px-12">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex w-full min-w-0 items-center gap-3 sm:w-auto sm:shrink-0">
          <img
            src={PROFILE_IMAGE}
            alt=""
            className="h-10 w-10 shrink-0 rounded-full border-2 border-gray-500 object-cover md:h-12 md:w-12"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold leading-tight sm:text-sm md:text-base">{info.name}</p>
            <p className="text-[10px] leading-tight text-gray-300 sm:text-xs">
              {PROFILE_TITLE_LINES.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
          </div>
        </div>
        <div className="w-full min-w-0 sm:min-w-[12rem] sm:w-auto sm:flex-1">
          <ContactLinks links={info.links} compact />
        </div>
      </div>
    </div>
  </nav>
);

export default StickyNavbar;
