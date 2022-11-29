import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'

export default function ProjectInfo() {
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
        <div className=''>
            <Carousel
                className=''
                infiniteLoop = {true}
                autoPlay={true}
                showThumbs={false}
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
                                alt="Info images" width={200} height={200} key={item}/>
                })}
            </Carousel>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold pt-5 pb-5'>Short Story</h1>
            <p className='text-lg'>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <div className='flex pt-2 space-x-3'>
                <span className='text-base font-semibold'>Share:</span>
                <Image src={`/icons/facebook.svg`} height={30} width={30} alt="FB Logo" />
                <Image src={`/icons/profile.svg`} height={30} width={30} alt="Message Logo" />
                <Image src={`/icons/volunteer.svg`} height={30} width={30} alt="Location Logo" />
            </div>
        </div>
    </div>
  )
}
