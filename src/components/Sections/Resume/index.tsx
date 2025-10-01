import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineCard from './TimelineCard';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map(group =>
            group.items.map((it, idx) => (
              <TimelineCard item={it} key={`${group.id}-${idx}`} />
            ))
          )}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map(group =>
            group.items.map((it, idx) => (
              <TimelineCard item={it} key={`${group.id}-${idx}`} />
            ))
          )}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">Here's a snapshot of my skills.</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
