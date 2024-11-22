import React from 'react';
import { Users, Heart, Star } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Satisfied Clients', value: '1000+' },
  { icon: Heart, label: 'Years Experience', value: '20+' },
  { icon: Star, label: 'Holistic Treatments', value: '15+' },
];

export default function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 mx-auto text-sage-600 mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}