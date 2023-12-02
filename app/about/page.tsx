import { NextPage } from 'next';
import Image from 'next/image';
import Animation from '@/components/animation';

import image1 from '../../public/images/pic1.png';
import image2 from '../../public/images/pic2.png';

const About: NextPage = () => {
  return (
    <Animation>
      <main className='flex flex-col items-center justify-between'>
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

        {/* Leadership Section */}
        <section className='z-1 relative h-screen'>
          <div className='flex h-full flex-col flex-wrap items-center justify-center lg:flex-row'>
            <div className='flex flex-col items-center justify-center gap-0 py-10 text-center md:gap-4'>
              <h1 className='text-center text-4xl font-normal md:text-left md:text-5xl'>
                Leadership{' '}
                <span className='font-bold text-light-color'>Team</span>
              </h1>
              <p className='md:text-md w-4/6 hyphens-none text-sm'>
                A father and son team like no other. We believe in passing our
                legacy to the next generation
              </p>
              <div className='mt-10 flex space-x-8'>
                <div>
                  <div className='flex justify-center rounded-lg bg-offwhite-color shadow-lg'>
                    <Image
                      src={image1}
                      className='h-28 w-24 p-2 md:h-56 md:w-52 md:p-4'
                      alt='img'
                    />
                  </div>
                  <div className='mt-4'>
                    <h1 className='text-sm font-bold uppercase md:text-lg'>
                      Mr. Zahid Mehmud
                    </h1>
                    <h2 className='text-xs'>Chairman & Founder</h2>
                  </div>
                </div>
                <div>
                  <div className='flex justify-center rounded-lg bg-offwhite-color shadow-lg'>
                    <Image
                      src={image2}
                      className='h-28 w-24 p-2 md:h-56 md:w-52 md:p-4'
                      alt='img'
                    />
                  </div>
                  <div className='mt-4'>
                    <h1 className='text-sm font-bold uppercase md:text-lg'>
                      Mr.Haider Mehmud
                    </h1>
                    <h2 className='text-xs'>CEO & Co-Founder</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-4 text-center'>
              <div className='flex w-full flex-col justify-center gap-4 overflow-hidden'>
                <h1 className='text-center text-xl font-normal text-mytext-color md:text-3xl lg:text-left'>
                  Message from the{' '}
                  <span className='rounded-lg bg-light-color px-2 font-bold text-white'>
                    CEO
                  </span>
                </h1>
                <p className='text-md lg:text-xl'>
                  “Our passion for tasty, natural and hygienic food is
                  unmatched”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CEO's Message */}
        {/* <section className='blob body-font container w-full px-10 py-0 text-center text-mytext-color md:py-24 lg:px-24 xl:px-32'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-center text-4xl font-normal md:text-3xl lg:text-4xl'>
              Message from the{' '}
              <span className='font-bold text-light-color'>CEO</span>
            </h1>
            <p>
              “Our passion for tasty, natural and hygienic food is unmatched”
            </p>
          </div>
        </section> */}

        {/* TimeLine */}
        <section className='timeline-wrapper body-font w-full px-10 py-0 text-center text-mytext-color md:py-24 lg:px-24 xl:px-32'>
          <section className='body-font text-mytext-color'>
            <div className='blob flex h-32 w-full items-center'>
              <div className='w-full text-4xl font-normal text-mytext-color md:text-3xl'>
                <h1>
                  Our <span className='font-bold'>Story</span>
                </h1>
              </div>
            </div>
            <div className='container mx-auto flex flex-wrap px-5 py-24'>
              <div className='relative mx-auto flex pb-20 pt-10 sm:items-center md:w-2/3'>
                <div className='absolute inset-0 flex h-full w-6 items-center justify-center'>
                  <div className='pointer-events-none h-full w-[2px] bg-gray-200' />
                </div>
                <div className='title-font z-1 relative mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-color text-sm font-medium text-white sm:mt-0'>
                  1
                </div>
                <div className='flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8'>
                  <div className='inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-offwhite-color text-mytext-color'>
                    2010
                  </div>
                  <div className='mt-6 flex-grow sm:mt-0 sm:pl-6'>
                    <p className='text-left leading-relaxed'>
                      Royal Foods launches its frozen food factory, one of the
                      first based in Rawat Industrial Estate generating
                      employment for 30 people
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative mx-auto flex pb-20 pt-10 sm:items-center md:w-2/3'>
                <div className='absolute inset-0 flex h-full w-6 items-center justify-center'>
                  <div className='pointer-events-none h-full w-[2px] bg-gray-200' />
                </div>
                <div className='title-font z-1 relative mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-color text-sm font-medium text-white sm:mt-0'>
                  2
                </div>
                <div className='flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8'>
                  <div className='inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-offwhite-color text-mytext-color'>
                    2011
                  </div>
                  <div className='mt-6 flex-grow sm:mt-0 sm:pl-6'>
                    <p className='text-left leading-relaxed'>
                      We expanded our production capacity and range increasing
                      staff count to 60
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative mx-auto flex pb-20 pt-10 sm:items-center md:w-2/3'>
                <div className='absolute inset-0 flex h-full w-6 items-center justify-center'>
                  <div className='pointer-events-none h-full w-[2px] bg-gray-200' />
                </div>
                <div className='title-font z-1 relative mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-color text-sm font-medium text-white sm:mt-0'>
                  3
                </div>
                <div className='flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8'>
                  <div className='inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-offwhite-color text-mytext-color'>
                    2014
                  </div>
                  <div className='mt-6 flex-grow sm:mt-0 sm:pl-6'>
                    <p className='text-left leading-relaxed'>
                      Growth and expansion followed our continued investment
                      reaching southern and central Pakistan
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative mx-auto flex pb-20 pt-10 sm:items-center md:w-2/3'>
                <div className='absolute inset-0 flex h-full w-6 items-center justify-center'>
                  <div className='pointer-events-none h-full w-[2px] bg-gray-200' />
                </div>
                <div className='title-font z-1 relative mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-color text-sm font-medium text-white sm:mt-0'>
                  4
                </div>
                <div className='flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8'>
                  <div className='inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-offwhite-color text-mytext-color'>
                    2015
                  </div>
                  <div className='mt-6 flex-grow sm:mt-0 sm:pl-6'>
                    <p className='text-left leading-relaxed'>
                      Launched the Royal poultry range
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative mx-auto flex pb-20 pt-10 sm:items-center md:w-2/3'>
                <div className='absolute inset-0 flex h-full w-6 items-center justify-center'>
                  <div className='pointer-events-none h-full w-[2px] bg-gray-200' />
                </div>
                <div className='title-font z-1 relative mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-color text-sm font-medium text-white sm:mt-0'>
                  5
                </div>
                <div className='flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8'>
                  <div className='inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-offwhite-color text-mytext-color'>
                    2017
                  </div>
                  <div className='mt-6 flex-grow sm:mt-0 sm:pl-6'>
                    <p className='text-left leading-relaxed'>
                      Royal launched a variety of the fish range
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative mx-auto flex pb-20 pt-10 sm:items-center md:w-2/3'>
                <div className='absolute inset-0 flex h-full w-6 items-center justify-center'>
                  <div className='pointer-events-none h-full w-[2px] bg-gray-200' />
                </div>
                <div className='title-font z-1 relative mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-color text-sm font-medium text-white sm:mt-0'>
                  6
                </div>
                <div className='flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8'>
                  <div className='inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-offwhite-color text-mytext-color'>
                    2019
                  </div>
                  <div className='mt-6 flex-grow sm:mt-0 sm:pl-6'>
                    <p className='text-left leading-relaxed'>
                      Staff count exceeds 100 and our products are widely
                      available throughout Pakistan
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative mx-auto flex pb-20 pt-10 sm:items-center md:w-2/3'>
                <div className='absolute inset-0 flex h-full w-6 items-center justify-center'>
                  <div className='pointer-events-none h-full w-[2px] bg-gray-200' />
                </div>
                <div className='title-font z-1 relative mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-color text-sm font-medium text-white sm:mt-0'>
                  7
                </div>
                <div className='flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8'>
                  <div className='inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-offwhite-color text-mytext-color'>
                    2021
                  </div>
                  <div className='mt-6 flex-grow sm:mt-0 sm:pl-6'>
                    <p className='text-left leading-relaxed'>
                      New management takes over with a vision to become the No.
                      1 food company in Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </Animation>
  );
};

export default About;
