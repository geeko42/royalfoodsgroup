import Image from 'next/image';

import image1 from '../../public/images/pic1.png';
import image2 from '../../public/images/pic2.png';
import pic3 from '/public/images/pic3.jpg';
import pic4 from '/public/images/pic4.jpg';
import pic5 from '/public/images/pic5.jpg';
import pic6 from '/public/images/pic6.jpg';
import pic7 from '/public/images/pic7.jpg';
import pic8 from '/public/images/pic8.jpg';
import pic9 from '/public/images/pic9.png';

const About = () => {
  return (
    // <Animation>
    <main className='flex flex-col items-center justify-between bg-gradient-to-r from-dark-color to-light-color'>
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
      <section className='z-1 container relative flex h-screen w-full flex-col items-center justify-center px-10'>
        <div className='flex-wrap items-center justify-center'>
          <div className='flex flex-col items-center justify-center gap-0 py-10 text-center md:gap-4'>
            <h1 className='text-center text-4xl font-normal text-primary-color md:text-left md:text-6xl'>
              Leadership{' '}
              <span className='font-bold text-secondary-color'>Team</span>
            </h1>
            <p className='text-md mt-4 w-4/6 hyphens-none text-primary-color md:mt-0 md:text-lg'>
              A father and son team like no other. We believe in passing our
              legacy to the next generation
            </p>
          </div>
        </div>

        <div className='flex gap-4 rounded-lg bg-primary-color bg-opacity-50 px-4 py-10 text-center md:px-10 md:py-10'>
          <div className='text-third-color flex w-full flex-col justify-center gap-4 overflow-hidden'>
            <h1 className='py-2 text-center text-xl font-normal md:text-3xl'>
              Message from the{' '}
              <span className='bg-third-color h-full rounded-lg px-2 font-bold text-primary-color'>
                CEO
              </span>
            </h1>
            <p className='text-md lg:text-lg'>
              “Our passion for tasty, natural and hygienic food is unmatched”
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='mt-10 flex flex-wrap items-center justify-center'>
          <div className='flex flex-col'>
            <div>
              <h1 className='text-center text-4xl text-primary-color md:text-6xl'>
                The{' '}
                <span className='font-bold text-secondary-color'>Founders</span>
              </h1>
            </div>
            <div className='mt-10 flex flex-wrap items-center justify-center gap-12 md:gap-8'>
              <div>
                <div className='flex justify-center rounded-lg bg-offwhite-color shadow-lg'>
                  <Image
                    src={image1}
                    className='h-80 w-72 p-2 md:p-4'
                    alt='img'
                  />
                </div>
                <div className='mt-4 text-left text-primary-color'>
                  <h1 className='text-sm  md:text-2xl'>Mr. Zahid Mehmud</h1>
                  <h2 className='text-md'>Chairman & Founder</h2>
                </div>
              </div>
              <div>
                <div className='flex justify-center rounded-lg bg-offwhite-color shadow-lg'>
                  <Image
                    src={image2}
                    className='h-80 w-72 p-2 md:p-4'
                    alt='img'
                  />
                </div>
                <div className='mt-4 text-left text-primary-color'>
                  <h1 className='text-sm  md:text-2xl'>Mr. Haider Mehmud</h1>
                  <h2 className='text-md'>CEO & Co-Founder</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TimeLine */}
      <section className='container mx-auto my-32 mt-40 grid w-full max-w-7xl grid-cols-9 px-4'>
        {/* Stack 1 */}
        <div className='col-span-4 flex w-full items-center'>
          <div className='w-full rounded-lg bg-primary-color p-5 md:pl-4'>
            <h1 className='text-third-color py-2 text-3xl'>2010</h1>
            <p className='text-third-color md:text-md text-xs'>
              Royal Foods launches its frozen food factory, one of the first
              based in Rawat Industrial Estate generating employment for 30
              people
            </p>
          </div>
        </div>

        <div className='relative col-span-1 flex h-full w-full items-center justify-center'>
          <div className='h-full w-[0.5px] bg-primary-color'></div>
          <div className='text-third-color absolute z-10 h-6 w-6 rounded-full bg-primary-color text-center'>
            1
          </div>
        </div>

        <div className='col-span-4 h-full w-full py-10'>
          <Image
            className='hidde mt-4 w-full rounded-lg md:flex md:justify-start'
            src={pic3}
            width={200}
            height={200}
            alt='RoyalFoodsPic'
          />
        </div>

        {/* Stack 2 */}
        <div className='col-span-4 w-full py-10'>
          <Image
            className='hidde mt-4 w-full rounded-lg md:flex md:justify-start'
            src={pic4}
            width={200}
            height={200}
            alt='RoyalFoodsPic'
          />
        </div>
        <div className='relative col-span-1 flex h-full w-full items-center justify-center'>
          <div className='h-full w-[0.5px] bg-primary-color'></div>
          <div className='text-third-color absolute z-10 h-6 w-6 rounded-full bg-primary-color text-center'>
            2
          </div>
        </div>

        <div className='col-span-4 flex w-full items-center'>
          <div className='w-full rounded-lg bg-primary-color p-5 md:pl-4'>
            <h1 className='text-third-color py-2 text-3xl'>2011</h1>
            <p className='text-third-color md:text-md text-xs'>
              We expanded our production capacity and range increasing staff
              count to 60
            </p>
          </div>
        </div>

        {/* Stack 3 */}
        <div className='col-span-4 flex w-full items-center'>
          <div className='w-full rounded-lg bg-primary-color p-5 md:pl-4'>
            <h1 className='text-third-color py-2 text-3xl'>2014</h1>
            <p className='text-third-color md:text-md text-xs'>
              Growth and expansion followed our continued investment reaching
              southern and central Pakistan
            </p>
          </div>
        </div>

        <div className='relative col-span-1 flex h-full w-full items-center justify-center'>
          <div className='h-full w-[0.5px] bg-primary-color'></div>
          <div className='text-third-color absolute z-10 h-6 w-6 rounded-full bg-primary-color text-center'>
            3
          </div>
        </div>

        <div className='col-span-4 h-full w-full py-10'>
          <Image
            className='hidde mt-4 w-full rounded-lg md:flex md:justify-start'
            src={pic5}
            width={200}
            height={200}
            alt='RoyalFoodsPic'
          />
        </div>

        {/* Stack 4 */}
        <div className='col-span-4 w-full py-10'>
          <Image
            className='hidde mt-4 w-full rounded-lg md:flex md:justify-start'
            src={pic6}
            width={200}
            height={200}
            alt='RoyalFoodsPic'
          />
        </div>
        <div className='relative col-span-1 flex h-full w-full items-center justify-center'>
          <div className='h-full w-[0.5px] bg-primary-color'></div>
          <div className='text-third-color absolute z-10 h-6 w-6 rounded-full bg-primary-color text-center'>
            4
          </div>
        </div>

        <div className='col-span-4 flex w-full items-center'>
          <div className='w-full rounded-lg bg-primary-color p-5 md:pl-4'>
            <h1 className='text-third-color py-2 text-3xl'>2015</h1>
            <p className='text-third-color md:text-md text-xs'>
              Royal launched a variety of the poultry range
            </p>
          </div>
        </div>

        {/* Stack 5 */}
        <div className='col-span-4 flex w-full items-center'>
          <div className='w-full rounded-lg bg-primary-color p-5 md:pl-4'>
            <h1 className='text-third-color py-2 text-3xl'>2017</h1>
            <p className='text-third-color md:text-md text-xs'>
              Royal launched a variety of the fish range
            </p>
          </div>
        </div>

        <div className='relative col-span-1 flex h-full w-full items-center justify-center'>
          <div className='h-full w-[0.5px] bg-primary-color'></div>
          <div className='text-third-color absolute z-10 h-6 w-6 rounded-full bg-primary-color text-center'>
            5
          </div>
        </div>

        <div className='col-span-4 h-full w-full py-10'>
          <Image
            className='hidde mt-4 w-full rounded-lg md:flex md:justify-start'
            src={pic7}
            width={200}
            height={200}
            alt='RoyalFoodsPic'
          />
        </div>

        {/* Stack 6 */}
        <div className='col-span-4 h-full w-full py-10'>
          <Image
            className='hidde mt-4 w-full rounded-lg md:flex md:justify-start'
            src={pic8}
            width={200}
            height={200}
            alt='RoyalFoodsPic'
          />
        </div>
        <div className='relative col-span-1 flex h-full w-full items-center justify-center'>
          <div className='h-full w-[0.5px] bg-primary-color'></div>
          <div className='text-third-color absolute z-10 h-6 w-6 rounded-full bg-primary-color text-center'>
            6
          </div>
        </div>

        <div className='col-span-4 flex w-full items-center'>
          <div className='w-full rounded-lg bg-primary-color p-5 md:pl-4'>
            <h1 className='text-third-color py-2 text-3xl'>2019</h1>
            <p className='text-third-color md:text-md text-xs'>
              Staff count exceeds 100 and our products are widely available
              throughout Pakistan
            </p>
          </div>
        </div>

        {/* Stack 7 */}
        <div className='col-span-4 flex w-full items-center'>
          <div className='w-full rounded-lg bg-primary-color p-5 md:pl-4'>
            <h1 className='text-third-color py-2 text-3xl'>2021</h1>
            <p className='text-third-color md:text-md text-xs'>
              New management takes over with a vision to become the No. 1 food
              company in Pakistan
            </p>
          </div>
        </div>

        <div className='relative col-span-1 flex h-full w-full items-center justify-center'>
          <div className='h-full w-[0.5px] bg-primary-color'></div>
          <div className='text-third-color absolute z-10 h-6 w-6 rounded-full bg-primary-color text-center'>
            7
          </div>
        </div>

        <div className='col-span-4 h-full w-full py-10'>
          <Image
            className='hidde mt-4 w-full rounded-lg md:flex md:justify-start'
            src={pic9}
            width={200}
            height={200}
            alt='RoyalFoodsPic'
          />
        </div>
      </section>
    </main>
    // </Animation>
  );
};

export default About;
