'use client';
import Image from 'next/image';

import pic3 from '/public/images/pic3.jpg';
import pic4 from '/public/images/pic4.jpg';
import pic5 from '/public/images/pic5.jpg';
import pic6 from '/public/images/pic6.jpg';
import pic7 from '/public/images/pic7.jpg';
import pic8 from '/public/images/pic8.jpg';
import { Button } from '@nextui-org/react';

const Gallery = () => {
  return (
    // <Animation>
    <main className='flex flex-col items-center justify-center'>
      {/* Background Animation */}
      <div className='wrapper'>
        <div className='box'>
          <div className='div'></div>
          <div className='div'></div>
          <div className='div'></div>
          <div className='div'></div>
          <div className='div'></div>
          <div className='div'></div>
          <div className='div'></div>
          <div className='div'></div>
          <div className='div'></div>
          <div className='div'></div>
        </div>
      </div>

      {/* Hero Section */}

      <section className='body-font container z-10 px-5 py-24 text-gray-600 md:py-40 lg:px-24 '>
        <div className=' mx-auto flex h-full flex-wrap'>
          <div className='flex h-full flex-col items-center justify-center xl:flex-row'>
            <div className='flex h-full w-full flex-wrap xl:w-1/2'>
              <div className='w-1/2 p-1 md:p-2'>
                <Image
                  alt='gallery'
                  className='block h-full w-full rounded-lg object-cover object-center'
                  src={pic3}
                  width={100}
                  height={100}
                />
              </div>
              <div className='w-1/2 p-1 md:p-2'>
                <Image
                  alt='gallery'
                  className='block h-full w-full rounded-lg object-cover object-center'
                  src={pic4}
                  width={100}
                  height={100}
                />
              </div>
              <div className='w-full p-1 md:p-2'>
                <Image
                  alt='gallery'
                  className='block h-full w-full rounded-lg object-cover object-center'
                  src={pic5}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className='flex h-full w-full flex-wrap xl:w-1/2'>
              <div className='w-full p-1 md:p-2'>
                <Image
                  alt='gallery'
                  className='block h-full w-full rounded-lg object-cover object-center'
                  src={pic6}
                  width={300}
                  height={300}
                />
              </div>
              <div className='w-1/2 p-1 md:p-2'>
                <Image
                  alt='gallery'
                  className='block h-full w-full rounded-lg object-cover object-center'
                  src={pic7}
                  width={300}
                  height={300}
                />
              </div>
              <div className='w-1/2 p-1 md:p-2'>
                <Image
                  alt='gallery'
                  className='block h-full w-full rounded-lg object-cover object-center'
                  src={pic8}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    // {/* </Animation> */}
  );
};

export default Gallery;
