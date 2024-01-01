'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import vegetable from '../../public/images/vegetable.png';
import {
  BsFillArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from 'react-icons/bs';
import {
  GiTomato,
  GiChickenOven,
  GiCirclingFish,
  GiShrimp,
  GiWheat,
} from 'react-icons/gi';

import ProductsList from '../../components/productsList';

const links = [
  { name: 'Vegetable', icons: GiTomato },
  { name: 'Chicken', icons: GiChickenOven },
  { name: 'Fish', icons: GiCirclingFish },
  { name: 'Prawns', icons: GiShrimp },
  { name: 'Parathas', icons: GiWheat },
];

const Products = () => {
  const [clickedValue, setClickedValue] = useState('Fish');

  async function onClickButton(e: string) {
    setClickedValue(e);
  }

  return (
    // <Animation>
    <main className='flex h-screen flex-col items-center justify-between md:h-screen'>
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
      <section className='flex h-full w-full flex-wrap items-center justify-center '>
        <div className='container mx-auto flex flex-wrap px-10 md:h-full lg:px-24'>
          <div className='z-1 relative h-full md:w-1/2 lg:w-1/3'>
            <div className='flex h-full w-full flex-col items-center justify-center space-y-6 text-center text-mytext-color md:items-start md:text-left'>
              <h1 className='text-4xl font-normal text-primary-color md:text-5xl lg:text-6xl'>
                Select the type of{' '}
                <span className='text-4xl font-bold text-light-color md:text-5xl lg:text-6xl'>
                  Food
                </span>
              </h1>
              <h2 className='hidden text-xl text-primary-color md:block'>
                From our family to yours, Royal stands for good family food
              </h2>
              <p className='md:text-md hidden w-full hyphens-none text-sm text-primary-color md:block'>
                We Make tasty delights everyday at Royal Foods Group. Proudly
                made in Pakistan, by food lovers for food lovers.
              </p>

              <div className='flex flex-wrap gap-1 md:gap-4'>
                {links.map((link) => {
                  return (
                    <button
                      key={link.name}
                      id={link.name}
                      onClick={() => onClickButton(link.name)}
                      className='bg-fourth-color flex h-16 w-16 flex-col items-center justify-center rounded-2xl text-xs uppercase text-primary-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-secondary-color md:h-24 md:w-24 lg:text-sm'
                    >
                      <link.icons className='text-4xl md:text-4xl' />
                      <label htmlFor='' className='md:text-md text-[10px]'>
                        {link.name}
                      </label>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='z-1 relative mx-auto  mt-10 flex h-full w-full flex-col items-center justify-center md:mt-0 md:w-2/4'>
            <ProductsList name={clickedValue} />

            {/* <div className='hidden h-1/3 items-center justify-start text-left md:flex'>
              <a className='flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-primary-color bg-opacity-50 text-xs uppercase text-mytext-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer lg:text-sm'>
                <BsFillArrowLeftCircleFill className='hidden text-4xl lg:block' />
              </a>
                
                            <Image
                src={vegetable}
                height={500}
                width={500}
                priority
                alt='img'
              />
              <a className='flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-primary-color bg-opacity-50 text-xs uppercase text-mytext-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer lg:text-sm'>
                <BsArrowRightCircleFill className='hidden text-4xl lg:block' />
              </a>
            </div> */}
          </div>

          {/* <div className='z-1 flex h-full items-center md:w-1/4'>
            <Image
              src={vegetable}
              height={500}
              width={500}
              priority
              alt='img'
            />
          </div> */}
        </div>
      </section>
    </main>
    // {/* </Animation> */}
  );
};

export default Products;
