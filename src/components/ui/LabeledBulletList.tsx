import React from 'react';
import { LabeledPoint } from '../../types/portfolio';

interface LabeledBulletListProps {
  items: LabeledPoint[];
}

const LabeledBulletList: React.FC<LabeledBulletListProps> = ({ items }) => (
  <ul className="list-disc list-inside space-y-2 text-gray-600">
    {items.map((item, index) => (
      <li key={index}>
        <span className="font-semibold text-gray-700">{item.label}:</span> {item.description}
      </li>
    ))}
  </ul>
);

export default LabeledBulletList;
