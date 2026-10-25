import React from 'react';
import { SITE_SHELL } from '../../constants/layout';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => (
  <footer className="bg-gray-800 text-gray-300 py-8 mt-12 rounded-t-lg">
    <div className={`${SITE_SHELL} text-center`}>
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      <p className="text-sm text-gray-400 mt-2">Built with React & Tailwind CSS.</p>
    </div>
  </footer>
);

export default Footer;
