'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  GiTomato,
  GiChickenOven,
  GiCirclingFish,
  GiShrimp,
  GiWheat,
} from 'react-icons/gi';

import ProductsList from '../../components/productsList';
import StoreList from '@/components/storesList';

const links = [
  { name: 'Vegetable', icons: GiTomato },
  { name: 'Chicken', icons: GiChickenOven },
  { name: 'Fish', icons: GiCirclingFish },
  { name: 'Prawns', icons: GiShrimp },
  { name: 'Parathas', icons: GiWheat },
];

const StoreLocator = () => {
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
        <div className='container mx-auto flex flex-wrap px-10 md:h-full'>
          <div className='z-1 relative h-full w-full md:w-1/2 lg:w-1/3'>
            <div className='flex h-full w-full flex-col items-center justify-center space-y-6 text-mytext-color md:items-start md:text-left'>
              <h1 className='text-2xl font-normal text-primary-color md:text-5xl'>
                Locate the closest{' '}
                <span className='text-2xl font-bold text-light-color md:text-5xl'>
                  Store
                </span>
              </h1>
              <h2 className='hidden text-xl text-primary-color md:block'>
                From our family to yours, Royal stands for good family food
              </h2>
              <p className='md:text-md hidden w-full hyphens-none text-sm text-primary-color md:block'>
                We Make tasty delights everyday at Royal Foods Group. Proudly
                made in Pakistan, by food lovers for food lovers.
              </p>

              <div className='flex flex-wrap gap-1 md:gap-4'></div>
            </div>
          </div>

          <div className='z-1 relative mx-auto  mt-10 flex h-full w-full flex-col items-center justify-center md:mt-0 md:w-2/4'>
            <StoreList />
          </div>
        </div>
      </section>
    </main>
    // {/* </Animation> */}
  );
};

export default StoreLocator;
