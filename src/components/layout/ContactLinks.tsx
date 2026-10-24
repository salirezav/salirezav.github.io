import React from 'react';
import { SocialLink } from '../../types/portfolio';

interface ContactLinksProps {
  links: SocialLink[];
  compact?: boolean;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ links, compact = false }) => (
  <div
    className={`flex w-full flex-wrap ${
      compact
        ? 'justify-start gap-1.5 sm:justify-end sm:gap-2'
        : 'justify-center gap-2 md:justify-end md:gap-2 lg:gap-2.5 xl:gap-3'
    }`}
  >
    {links.map((link) => {
      const IconComponent = link.icon;
      return (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          title={link.name}
          className={`inline-flex items-center justify-center rounded-lg bg-gray-700 font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-colors duration-200 hover:bg-gray-600 ${
            compact
              ? 'p-2 sm:px-2 sm:py-1 sm:text-xs lg:px-2.5 lg:py-1.5'
              : 'p-2 sm:px-2.5 sm:py-1.5 sm:text-sm xl:px-4 xl:py-2 xl:text-base'
          }`}
        >
          <IconComponent
            aria-hidden="true"
            className={`shrink-0 ${
              compact
                ? 'h-4 w-4 sm:mr-1 sm:h-3.5 sm:w-3.5'
                : 'h-[18px] w-[18px] sm:mr-1.5 sm:h-4 sm:w-4 xl:mr-2 xl:h-[18px] xl:w-[18px]'
            }`}
          />
          <span className="hidden sm:inline">{link.name}</span>
        </a>
      );
    })}
  </div>
);

export default ContactLinks;
