import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {aboutItems, description, profileImageSrc} = aboutData;
  return (
    /* eslint-disable react/jsx-sort-props */
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-50 w-50 overflow-hidden rounded-xl md:h-65 md:w-65 md:mr-6">
              <Image alt="about-me-image" className="h-100 w-100 object-cover rounded-xl" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            {description.map(({text}, idx) => (
              <p className="prose prose-sm text-gray-300 sm:prose-base" key={idx}>
                {text}
              </p>
            ))}
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({Icon, label, text}, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
    /* eslint-enable react/jsx-sort-props */
  );
});

About.displayName = 'About';
export default About;