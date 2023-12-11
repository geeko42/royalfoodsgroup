import Image from 'next/image';
import Animation from '@/components/animation';

import vegetable from '/public/images/vegetable.png';
import {
  GiTomato,
  GiChickenOven,
  GiCirclingFish,
  GiShrimp,
  GiWheat,
} from 'react-icons/gi';
import {
  BsFillArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from 'react-icons/bs';

const Products = () => {
  return (
    // <Animation>
    <main className='flex h-screen flex-col items-center justify-between bg-gradient-to-r from-dark-color to-light-color'>
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
      <section className='flex h-screen w-full flex-wrap items-center justify-center '>
        <div className='container mx-auto flex flex-wrap px-10 md:h-full lg:px-24 xl:px-32'>
          <div className='z-1 relative w-full md:w-2/4'>
            <div className='flex h-full w-full flex-col items-center justify-center space-y-6 text-center text-mytext-color md:items-start md:text-left'>
              <h1 className='text-4xl font-normal text-primary-color md:text-5xl lg:text-6xl'>
                Select the type of{' '}
                <span className='text-4xl font-bold text-secondary-color md:text-5xl lg:text-6xl'>
                  Food
                </span>
              </h1>
              <h2 className='text-xl text-primary-color'>
                From our family to yours, Royal stands for good family food
              </h2>
              <p className='md:text-md hidden w-full hyphens-none text-sm text-primary-color md:block'>
                We Make tasty delights everyday at Royal Foods Group. Proudly
                made in Pakistan, by food lovers for food lovers.
              </p>
              <div className='flex flex-wrap gap-1 md:gap-4'>
                <a className='flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-secondary-color text-xs uppercase text-myButtonText-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer md:h-24 md:w-24 lg:text-sm'>
                  <GiTomato className='text-4xl md:text-4xl' />
                  <label htmlFor='' className='md:text-md text-[10px]'>
                    Vegetable
                  </label>
                </a>
                <a className='flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-primary-color text-xs uppercase text-mytext-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer md:h-24 md:w-24 lg:text-sm'>
                  <GiChickenOven className='text-4xl md:text-4xl' />
                  <label htmlFor='' className='md:text-md text-[10px]'>
                    Chicken
                  </label>
                </a>
                <a className='flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-primary-color text-xs uppercase text-mytext-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer md:h-24 md:w-24 lg:text-sm'>
                  <GiCirclingFish className='text-4xl md:text-4xl' />
                  <label htmlFor='' className='md:text-md text-[10px]'>
                    Fish
                  </label>
                </a>
                <a className='flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-primary-color text-xs uppercase text-mytext-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer md:h-24 md:w-24 lg:text-sm'>
                  <GiShrimp className='text-4xl md:text-4xl' />
                  <label htmlFor='' className='md:text-md text-[10px]'>
                    Prawns
                  </label>
                </a>
                <a className='flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-primary-color text-xs uppercase text-mytext-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer md:h-24 md:w-24 lg:text-sm'>
                  <GiWheat className='text-4xl md:text-4xl' />
                  <label htmlFor='' className='md:text-md text-[10px]'>
                    Parathas
                  </label>
                </a>
              </div>
            </div>
          </div>

          <div className='z-1 relative mx-auto mt-10 flex w-full flex-col items-center justify-center md:h-full md:w-2/4'>
            <div className='flex items-center justify-center rounded-lg bg-primary-color bg-opacity-80 px-2 py-2 lg:px-4 lg:py-4'>
              <table className='table-auto border-separate border-spacing-x-3 border-spacing-y-1 text-xs lg:border-spacing-x-8 lg:border-spacing-y-2'>
                <thead>
                  <tr className='gap-4 text-left uppercase text-black'>
                    <th>Serial</th>
                    <th>Description</th>
                    <th>Grammage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>1.</td>
                    <td>Alloo Rolls</td>
                    <td>12/24 pieces</td>
                  </tr>
                  <tr>
                    <td className='text-center'>2.</td>
                    <td>Alloo Samosa</td>
                    <td>12/24 pieces</td>
                  </tr>
                  <tr>
                    <td className='text-center'>3.</td>
                    <td>Vegetable Samosa</td>
                    <td>12 pieces</td>
                  </tr>
                  <tr>
                    <td className='text-center'>4.</td>
                    <td>Vegetable Rolls</td>
                    <td>12 pieces</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='hidden h-1/3 items-center justify-start text-left md:flex'>
              <a className='flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-primary-color bg-opacity-50 text-xs uppercase text-mytext-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer lg:text-sm'>
                <BsFillArrowLeftCircleFill className='hidden text-4xl lg:block' />
              </a>
              <Image
                src={vegetable}
                height={500}
                width={500}
                priority
                alt='paratha'
              />
              <a className='flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-primary-color bg-opacity-50 text-xs uppercase text-mytext-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer lg:text-sm'>
                <BsArrowRightCircleFill className='hidden text-4xl lg:block' />
              </a>
            </div>
            {/* <div className=' h-1/4 w-3/4 bg-primary-color shadow-lg'></div> */}
          </div>
        </div>
      </section>
    </main>
    // {/* </Animation> */}
  );
};

export default Products;
