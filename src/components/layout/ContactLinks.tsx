import React from 'react';
import { SocialLink } from '../../types/portfolio';

interface ContactLinksProps {
  links: SocialLink[];
  compact?: boolean;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ links, compact = false }) => (
  <div className={`flex flex-wrap ${compact ? 'gap-1.5' : 'justify-center md:justify-start gap-4'}`}>
    {links.map((link) => {
      const IconComponent = link.icon;
      return (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center bg-gray-700 hover:bg-blue-500 transition-colors duration-300 text-white font-medium rounded-lg shadow whitespace-nowrap ${
            compact ? 'text-xs py-1.5 px-2.5' : 'py-2 px-4'
          }`}
        >
          <IconComponent size={compact ? 14 : 18} className={compact ? 'mr-1' : 'mr-2'} />
          {link.name}
        </a>
      );
    })}
  </div>
);

export default ContactLinks;
