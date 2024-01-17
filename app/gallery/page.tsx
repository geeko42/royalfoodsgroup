'use client';

import Image from 'next/image';
import { Button, Card, CardHeader } from '@nextui-org/react';

const imageContext = require.context('/public/images/products', false);

const images = imageContext.keys().map(imageContext);
console.log(imageContext.keys());

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

      <section className='body-font container z-10 h-full px-5 py-24 text-gray-600 md:py-40 '>
        <div className=' mx-auto flex h-full w-full flex-wrap'>
          <div className='grid max-w-full grid-cols-12 grid-rows-2 gap-2 px-8'>
            {images.map((item, key) => (
              <Card key={key} className='col-span-12 h-[300px] sm:col-span-4'>
                <Image
                  key={key}
                  height={14}
                  width={14}
                  alt='Card background'
                  className='z-0 h-full w-full cursor-pointer object-cover transition-all duration-1000 hover:scale-125'
                  src={(item as { default: string }).default}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
