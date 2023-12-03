import Image from 'next/image';
import Animation from '@/components/animation';

import fryingpan from '../public/images/heroImg.png';
import logoe from '/public/images/easternlogo.png';
import logo from '/public/logos/logo-green.png';
import logo1 from '../public/images/ingredients.png';
import logo2 from '../public/images/injection.png';
import logo3 from '../public/images/standards.png';
import logo4 from '../public/packagingLogos/haccp.png';
import logo5 from '../public/packagingLogos/halal.png';
import logo6 from '../public/packagingLogos/iso.png';
import logo7 from '../public/packagingLogos/pk.png';

export default function Home() {
  return (
    // <Animation>
    <main className='flex flex-col items-center justify-between bg-white'>
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
      <section className='h-screen w-full bg-gradient-to-r from-dark-color to-light-color'>
        <div className='container mx-auto flex h-full flex-wrap px-10 lg:px-24 xl:px-32'>
          <div className='z-1 relative w-full md:w-2/4'>
            <div className='flex h-full w-full flex-col items-center justify-center space-y-6 text-center text-mytext-color md:items-start md:text-left'>
              <div className='z-1 flex w-3/4 items-center md:hidden'>
                <div className='left-0 flex h-2/3 items-center'>
                  <Image src={fryingpan} priority alt='paratha' />
                </div>
              </div>

              <h1 className='text-primary-color text-4xl font-normal md:text-5xl lg:text-6xl'>
                For the Love of{' '}
                <span className='text-secondary-color text-4xl font-bold md:text-5xl lg:text-6xl'>
                  Food
                </span>
              </h1>
              <h2 className='text-primary-color text-2xl'>
                Our secret is love and quality ingredients
              </h2>
              <p className='md:text-md text-primary-color w-4/6 hyphens-none text-sm'>
                We take pride in being an open and honest family business
                providing great-tasting food at prices that break the wallet.
              </p>
              <div className='flex space-x-5'>
                <button className='rounded-2xl bg-yellow-400 px-8 py-2 text-xs uppercase  text-myButtonText-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 lg:text-sm'>
                  contact us
                </button>
                <a href='/files/profile.pdf' download='Compnay Profile'>
                  <button className='rounded-2xl bg-offwhite-color px-8 py-2 text-xs uppercase text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 lg:text-sm'>
                    download profile
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className='z-1 relative hidden h-full w-2/4 flex-row-reverse items-center md:flex'>
            <div className='absolute left-0 flex h-2/3 items-center'>
              <Image src={fryingpan} priority alt='paratha' />
            </div>
            <div className='h-2/3 w-1/2 bg-yellow-400 shadow-lg'></div>
          </div>
        </div>
      </section>

      {/* Vision */}
      {/* <section className='body-font w-full  py-24'>
        <div className='mx-auto px-5'>
          <div className='mx-auto w-full text-center lg:w-3/4 xl:w-1/2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='mb-8 inline-block h-8 w-8 text-bodyText-color'
              viewBox='0 0 975.036 975.036'
            >
              <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z' />
            </svg>
            <p className='text-3xl leading-relaxed text-bodyText-color'>
              Our Vision is to be the number one food company in Pakistan
            </p>
          </div>
        </div>
      </section> */}

      {/* <Values /> */}
      <section className='body-font container w-full px-10 py-0 text-center text-mytext-color md:py-24 lg:px-24 xl:px-32'>
        <div>
          <div className='mb-6 flex items-center p-4 sm:mb-0'>
            <h2 className='title-font pr-10 text-left text-lg uppercase lg:text-2xl'>
              Values
            </h2>
            <div className='h-[0.5px] w-full bg-mytext-color'></div>
          </div>
        </div>
        <div className='-mx-4 -mb-10 -mt-4 flex flex-wrap sm:-m-4'>
          <div className='mb-6 p-4 sm:mb-0 md:w-1/3'>
            <div className='flex items-center justify-center space-x-4 overflow-hidden rounded-lg bg-offwhite-color px-4 py-4 shadow-xl'>
              <div className='w-full text-left text-black'>
                <div>
                  <div className='flex items-center space-x-2'>
                    <div className='rounded-full bg-yellow-400 p-1'>
                      <span>1.</span>
                    </div>
                    <div>
                      <h2 className='title-font font-bold uppercase md:text-xs xl:text-lg'>
                        Quality Ingredients
                      </h2>
                    </div>
                  </div>
                  <div className='mx-auto mt-4 flex w-1/3 justify-center rounded-full bg-white md:w-1/2 lg:w-1/4'>
                    <Image
                      alt='content'
                      className='object-center'
                      src={logo1}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className='mt-5 text-xs leading-relaxed md:text-xs lg:text-sm'>
                    We select the same quality of ingredients you would for your
                    family.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-6 p-4 sm:mb-0 md:w-1/3'>
            <div className='flex items-center justify-center space-x-4 overflow-hidden rounded-lg bg-offwhite-color px-4 py-4 shadow-xl'>
              <div className='w-full text-left text-black'>
                <div>
                  <div className='flex items-center space-x-2'>
                    <div className='rounded-full bg-yellow-400 p-1'>
                      <span>2.</span>
                    </div>
                    <div>
                      <h2 className='title-font font-bold uppercase md:text-xs xl:text-lg'>
                        Hormone free, always
                      </h2>
                    </div>
                  </div>
                  <div className='mx-auto mt-4 flex w-1/3 justify-center rounded-full bg-white md:w-1/2 lg:w-1/4'>
                    <Image
                      alt='content'
                      className='object-center'
                      src={logo2}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className='mt-5 text-xs leading-relaxed md:text-xs lg:text-sm'>
                    No added antibiotics or hormones go in any of our recipes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-6 p-4 sm:mb-0 md:w-1/3'>
            <div className='flex items-center justify-center space-x-4 overflow-hidden rounded-lg bg-offwhite-color px-4 py-4 shadow-xl'>
              <div className='w-full text-left text-black'>
                <div>
                  <div className='flex items-center space-x-2'>
                    <div className='rounded-full bg-yellow-400 p-1'>
                      <span>3.</span>
                    </div>
                    <div>
                      <h2 className='title-font font-bold uppercase md:text-xs xl:text-lg'>
                        sustainable standards
                      </h2>
                    </div>
                  </div>
                  <div className='mx-auto mt-4 flex w-1/3 justify-center rounded-full bg-white md:w-1/2 lg:w-1/4'>
                    <Image
                      alt='content'
                      className='object-center'
                      src={logo3}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className='mt-5 text-xs leading-relaxed md:text-xs lg:text-sm'>
                    We believe in maintaining the planet for generations to come
                    sustainably and responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className='body-font container w-full px-10 py-24 text-mytext-color lg:px-24 xl:px-32'>
        <div className='mx-auto w-full'>
          <div className=''>
            <div className='-mx-4 -mb-10 -mt-4 flex flex-wrap items-center justify-center gap-6 sm:-m-4 md:flex-nowrap'>
              <div className='mb-6 p-4 sm:mb-0 md:w-1/3'>
                <div className='flex items-center'>
                  <h2 className='title-font w-full pr-10 text-lg uppercase lg:text-2xl'>
                    Our Brands
                  </h2>
                  <div className='h-[0.5px] w-1/2 bg-mytext-color md:w-full'></div>
                </div>
                <p className='mt-2 text-xs leading-relaxed lg:text-sm'>
                  We are proud to be a transparent and sincere company, offering
                  delicious and sanitary food made with care for your loved
                  ones.
                </p>
              </div>
              <div className='py- flex flex-col items-center justify-center rounded-lg px-4 lg:w-1/3'>
                <Image
                  src={logo}
                  priority
                  width={250}
                  height={250}
                  alt='Logo'
                />
                <p className='text-center text-xs leading-relaxed lg:text-sm'>
                  One of the fastest growing food companies in Pakistan
                </p>
                <div className='mt-4 flex flex-wrap'>
                  <Image
                    src={logo4}
                    width={50}
                    height={50}
                    alt='pakistanFlag_logo'
                  />
                  <Image src={logo5} width={50} height={50} alt='halal_logo' />
                  <Image src={logo6} width={50} height={50} alt='iso_logo' />
                  <Image src={logo7} width={50} height={50} alt='pk' />
                </div>
              </div>
              <div className='flex flex-col items-center justify-center rounded-lg px-4 py-8 lg:w-1/3'>
                <Image src={logoe} width={250} alt='Logo' />
                <p className='text-center text-xs leading-relaxed lg:text-sm'>
                  Our export brand meeting stringent export quality requirements
                </p>
                <div className='mt-4 flex flex-wrap'>
                  <Image
                    src={logo4}
                    width={50}
                    height={50}
                    alt='pakistanFlag_logo'
                  />
                  <Image src={logo5} width={50} height={50} alt='halal_logo' />
                  <Image src={logo6} width={50} height={50} alt='iso_logo' />
                  <Image src={logo7} width={50} height={50} alt='pk' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className='body-font relative w-full bg-gray-100 py-24 text-gray-600'>
        <div className='container mx-auto flex flex-wrap px-10 sm:flex-nowrap lg:px-32'>
          <div className='relative hidden w-full items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:flex md:w-1/2 lg:w-2/3'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              title='map'
              scrolling='no'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.353679086228!2d73.23065581962311!3d33.51817649454963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff032a00577b9%3A0xd434d8d8889a992a!2sRoyal%20Frozen%20Foods%20SMC%20Pvt%20Ltd!5e0!3m2!1sen!2s!4v1701599889414!5m2!1sen!2s'
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(1)' }}
            />
            <div className='relative hidden flex-wrap rounded bg-white py-6 shadow-md md:flex'>
              <div className='px-6 lg:w-1/2'>
                <h2 className='title-font text-xs font-semibold tracking-widest text-gray-900'>
                  ADDRESS
                </h2>
                <p className='mt-1'>
                  Royal Foods Group, Plot No.4, E-1 Road, RCCI Industrial State
                  Rawat, Islamabad, Pakistan
                </p>
              </div>
              <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
                <h2 className='title-font text-xs font-semibold tracking-widest text-gray-900'>
                  EMAIL
                </h2>
                <a className='leading-relaxed text-indigo-500'>
                  info@royalfoodsgroup.com
                </a>
                <h2 className='title-font mt-4 text-xs font-semibold tracking-widest text-gray-900'>
                  PHONE
                </h2>
                <p className='leading-relaxed'>+92 51 4499371 - 72</p>
              </div>
            </div>
          </div>
          <div className='mt-8 flex w-full flex-col text-bodyText-color md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3'>
            <div className='flex items-center justify-center'>
              <h2 className='title-font w-full pr-10 text-lg uppercase text-mytext-color lg:text-2xl'>
                Contact us
              </h2>
              <div className='h-[0.5px] w-full bg-mytext-color'></div>
            </div>
            <div className='mt-6'>
              <div className='relative mb-4'>
                <label
                  htmlFor='name'
                  className='text-sm leading-7 text-mytext-color'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
                />
              </div>
              <div className='relative mb-4'>
                <label
                  htmlFor='email'
                  className='text-sm leading-7 text-mytext-color'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
                />
              </div>
              <div className='relative mb-4'>
                <label
                  htmlFor='message'
                  className='text-sm leading-7 text-mytext-color'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
                  defaultValue={''}
                />
              </div>
              <button className='rounded-2xl bg-yellow-400 px-8 py-2 text-sm uppercase text-black transition duration-300 hover:-translate-y-1 hover:scale-110'>
                Submit
              </button>
              <p className='mt-3 text-xs text-mytext-color'>
                {/* Chicharrones blog helvetica normcore iceland tousled brook
                  viral artisan. */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
    // </Animation>
  );
}
