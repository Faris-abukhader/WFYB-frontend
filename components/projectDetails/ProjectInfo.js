import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'
import { getTranslatedText as t } from '../../localization/config';
export default function ProjectInfo({language,shortIntro}) {
    const indicatorStyles = {
        background: 'grey',
        width: '10px',
        height: '10px',
        display: 'inline-block',
        margin: '0 8px',
        borderRadius: '50px'
    };

  return (
    <div className=''>
        <div dir={'ltr'} className=''>
            <Carousel
                infiniteLoop={true}
                transitionTime={1500}
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
                {[1, 2, 3, 4].map((item) => {
                    return <Image 
                                className='w-full h-72 sm:h-96 md:h-80 lg:h-96' src={`/images/showcase${item}.jpg`} 
                                alt="Info images" width={500} height={500} key={item}/>
                })}
            </Carousel>
        </div>
        <div className='flex flex-col font-almarai space-y-4'>
            <h1 className='text-2xl font-bold pt-5 pb-5'>{t('shortIntro',language)}</h1>
            <p className='text-lg'>
                {shortIntro}
            </p>
            <div className='flex pt-2 gap-3'>
                <span className='text-base font-semibold'>{t('share',language)}:</span>
                <Image src={`/icons/facebook.svg`} height={30} width={30} className='hover:cursor-pointer' alt="FB Logo" />
                <Image src={`/icons/profile.svg`} height={30} width={30}  className='hover:cursor-pointer'alt="Message Logo" />
                <Image src={`/icons/volunteer.svg`} height={30} width={30}  className='hover:cursor-pointer'alt="Location Logo" />
            </div>
        </div>
    </div>
  )
}
