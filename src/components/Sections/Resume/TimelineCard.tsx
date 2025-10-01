import {FC, memo} from 'react';

import {Item} from '../../../data/dataDef';

const TimelineCard: FC<{item: Item}> = memo(({item}) => {
  const {title, date, location, content, skillsTitle, skills} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
      <br></br>
      <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium sm:flex-none">{skillsTitle}</span>
          <span className="flex-1 text-sm sm:flex-none">{skills}</span>
        </div>
    </div>
  );
});

TimelineCard.displayName = 'TimelineCard';
export default TimelineCard;
