import React from 'react';
import scheduleIcon from '../assets/images/schedule.jpg'
import rewardsIcon from '../assets/images/rewards.jpg'
import progressIcon from '../assets/images/progress.jpg'

const features = [
  {
    title: 'Seamless waste collection scheduling',
    image: `${scheduleIcon}`,
  },
  {
    title: 'Gamified rewards for achieving waste collection goals',
    image: `${rewardsIcon}`,
  },
  {
    title: 'Real-time tracking of your progress towards a greener future',
    image: `${progressIcon}`,
  },
];

const Features = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white-100 rounded-lg shadow-md p-6 hover:shadow-lg"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
