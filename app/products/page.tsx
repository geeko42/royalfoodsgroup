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
    <main className='flex h-[1000px] flex-col items-center justify-between md:h-[1000px]'>
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
        <div className='container flex flex-wrap justify-center px-10 md:h-full '>
          <div className='z-1 relative h-full md:w-1/2 lg:w-1/3'>
            <div className='flex h-full w-full flex-col items-center justify-center space-y-6 text-center text-mytext-color md:items-start md:text-left'>
              <h1 className='text-2xl font-normal text-primary-color md:text-5xl'>
                Select the type of{' '}
                <span className='text-2xl font-bold text-light-color md:text-5xl'>
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
                      className='flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-fourth-color text-xs uppercase text-primary-color shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-secondary-color md:h-24 md:w-24 lg:text-sm'
                    >
                      <link.icons className='text-2xl md:text-4xl' />
                      <label htmlFor='' className='md:text-md text-[8px]'>
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
