import React from 'react'
import TeamMateCard from './TeamMateCard';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function MeetOurTeamMate() {
  const indicatorStyles = {
    background: 'grey',
    width: '10px',
    height: '10px',
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '50px'
  };

  return (
    <div id='ourTeam' className='px-8'>
      <Carousel
        className=''
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        swipeable={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: 'green' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <TeamMateCard />
        <TeamMateCard />
      </Carousel>
    </div>
  )
}
