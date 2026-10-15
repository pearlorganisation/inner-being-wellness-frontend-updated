import React from 'react';
import { Sparkles, Clock, HeartHandshake, Award } from 'lucide-react';

export const FeatureRibbon = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Mind & Body Health',
      subtitle: 'Restorative daily routines.'
    },
    {
      icon: Clock,
      title: 'Flexible Formats',
      subtitle: 'Online & in-person sessions.'
    },
    {
      icon: HeartHandshake,
      title: 'Certified Mentors',
      subtitle: 'Experienced holistic masters.'
    },
    {
      icon: Award,
      title: 'Life Transformation',
      subtitle: 'Measurable inner calm.'
    }
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#EAE5DD] shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE5DD]">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className={`flex items-center gap-4 ${
                  i === 0 ? '' : 'pt-6 sm:pt-0 sm:pl-6'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#E4ECE6] border border-[#D2E3D8] flex items-center justify-center shrink-0 text-[#13382C]">
                  <Icon className="w-5 h-5 text-[#13382C]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1F1B44]">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[#6B6673] mt-0.5">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
