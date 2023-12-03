'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logos/logo-green.png';
import logoW from '/public/logos/logo-white.png';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';

const NavBar: NextPage = () => {
  const [fix, setFix] = useState(false);
  const [mobNav, setMobNav] = useState(false);
  const [color, setColor] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
      setColor(true);
    } else {
      setFix(false);
      setColor(false);
    }
  }

  useEffect(function mount() {
    window.addEventListener('scroll', setFixed, { passive: false });

    return function unMount() {
      window.removeEventListener('scroll', setFixed);
    };
  });

  function toggleMenu() {
    let menuBox = document.getElementById('menu-box');
    if (menuBox!.style.display == 'flex') {
      menuBox!.style.display = 'none';
    } else {
      menuBox!.style.display = 'flex';
    }
  }

  return (
    <div className='flex justify-center'>
      {/* Mobile/Tablet Navbar */}
      <nav
        className={
          fix
            ? 'fixed z-10 flex h-24 w-full items-center justify-between bg-white bg-opacity-90 px-10 text-mytext-color transition-all duration-500 lg:hidden lg:px-24 xl:px-56'
            : 'fixed z-10 flex h-32 w-full items-center justify-between bg-opacity-0 px-10 text-mytext-color transition-all duration-500 lg:hidden lg:px-24 xl:px-32'
        }
      >
        <Link href='/#'>
          {color ? (
            <Image
              src={logo}
              width={100}
              height={100}
              priority
              alt='Logo of Company'
            />
          ) : (
            <Image
              src={logoW}
              width={100}
              height={100}
              priority
              alt='Logo of Company'
            />
          )}
        </Link>

        <button
          className={
            fix
              ? 'flex flex-col space-y-1 rounded-md '
              : 'flex flex-col space-y-1 rounded-md '
          }
          onClick={toggleMenu}
        >
          <div className='h-1 w-1 rounded-lg bg-gray-400'></div>
          <div className='h-1 w-1 rounded-lg bg-gray-400'></div>
          <div className='h-1 w-1 rounded-lg bg-gray-400'></div>
        </button>

        {/* White Menu Box on Tablet/Mobile devices */}
        <div
          className={
            'absolute left-0 top-0 z-20 hidden h-72 w-full flex-col justify-center bg-white px-10 shadow-lg'
          }
          id='menu-box'
        >
          <div className='flex justify-end'>
            <button onClick={toggleMenu}>
              <RxCrossCircled className='h-6 w-6' />
            </button>
          </div>

          <ul className='flex w-full flex-col gap-4 uppercase'>
            <li>
              <Link href='/#'>Home</Link>
              <span className='block h-[0.5px] w-full bg-mytext-color'></span>
            </li>
            <li>
              <Link href='/products'>Products</Link>
              <span className='block h-[0.5px] w-full bg-mytext-color'></span>
            </li>
            <li>
              <Link href='/about'>About</Link>
              <span className='block h-[0.5px] w-full bg-mytext-color'></span>
            </li>
            <li>
              <Link href='/#'>Gallery</Link>
              <span className='block h-[0.5px] w-full bg-mytext-color'></span>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>

      {/* Desktop Navbar */}
      <nav
        className={
          fix
            ? 'fixed z-10 hidden h-24 w-full items-center justify-between bg-white bg-opacity-90 px-10 text-mytext-color transition-all duration-500 lg:flex lg:px-24 xl:px-56'
            : 'fixed z-10 hidden h-32 w-full items-center justify-between bg-opacity-0 px-10 text-mytext-color transition-all duration-500 lg:flex lg:px-24 xl:px-32'
        }
      >
        <Link href='/#'>
          {color ? (
            <Image
              src={logo}
              width={120}
              height={120}
              priority
              alt='Logo of Company'
            />
          ) : (
            <Image
              src={logoW}
              width={120}
              height={120}
              priority
              alt='Logo of Company'
            />
          )}
        </Link>

        <ul
          className={
            color
              ? 'xl:text-md justify-cente flex text-sm font-light uppercase tracking-wider text-black lg:space-x-4 lg:text-xs xl:space-x-16'
              : 'xl:text-md text-primary-color flex justify-center text-sm font-light uppercase tracking-wider lg:space-x-4 lg:text-xs xl:space-x-16'
          }
        >
          <li>
            <Link
              href='/#'
              className='group font-normal transition duration-300 hover:cursor-pointer'
            >
              Home
              <span
                className={
                  color
                    ? 'block h-0.5 max-w-0 bg-myUnderLine-color transition-all duration-500 group-hover:max-w-full'
                    : 'bg-secondary-color block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full'
                }
              ></span>
            </Link>
          </li>
          <li>
            <Link
              href='/products'
              className='group font-normal transition duration-300 hover:cursor-pointer'
            >
              Products
              <span
                className={
                  color
                    ? 'block h-0.5 max-w-0 bg-myUnderLine-color transition-all duration-500 group-hover:max-w-full'
                    : 'bg-secondary-color block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full'
                }
              ></span>
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='group font-normal transition duration-300 hover:cursor-pointer'
            >
              About
              <span
                className={
                  color
                    ? 'block h-0.5 max-w-0 bg-myUnderLine-color transition-all duration-500 group-hover:max-w-full'
                    : 'bg-secondary-color block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full'
                }
              ></span>
            </Link>
          </li>
          <li>
            <Link
              href=''
              className='group font-normal transition duration-300 hover:cursor-pointer'
            >
              Gallery
              <span
                className={
                  color
                    ? 'block h-0.5 max-w-0 bg-myUnderLine-color transition-all duration-500 group-hover:max-w-full'
                    : 'bg-secondary-color block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full'
                }
              ></span>
            </Link>
          </li>
        </ul>

        <div className='flex items-center justify-center'>
          <ul
            className={
              color
                ? 'xl:text-md flex items-center justify-center space-x-3 px-4 text-black lg:text-xs'
                : 'xl:text-md flex items-center justify-center space-x-3 px-4 text-white lg:text-xs'
            }
          >
            <li>
              <Link
                href=''
                className='group font-normal transition duration-300 hover:cursor-pointer'
              >
                <AiOutlineInstagram className='lg:text-xl xl:text-2xl' />
                <span
                  className={
                    color
                      ? 'block h-0.5 max-w-0 bg-myUnderLine-color transition-all duration-500 group-hover:max-w-full'
                      : 'bg-secondary-color block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full'
                  }
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='group font-normal transition duration-300 hover:cursor-pointer'
              >
                <AiFillFacebook className='lg:text-xl xl:text-2xl' />
                <span
                  className={
                    color
                      ? 'block h-0.5 max-w-0 bg-myUnderLine-color transition-all duration-500 group-hover:max-w-full'
                      : 'bg-secondary-color block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full'
                  }
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='group font-normal transition duration-300 hover:cursor-pointer'
              >
                <AiOutlineYoutube className='lg:text-xl xl:text-2xl' />
                <span
                  className={
                    color
                      ? 'block h-0.5 max-w-0 bg-myUnderLine-color transition-all duration-500 group-hover:max-w-full'
                      : 'bg-secondary-color block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full'
                  }
                ></span>
              </Link>
            </li>
          </ul>
          <a href='/files/brochure.pdf' download='Brochure'>
            <button
              className={
                color
                  ? 'rounded-2xl bg-yellow-400 uppercase text-mytext-color transition duration-300 hover:-translate-y-1 hover:scale-110 lg:px-6 lg:py-2 lg:text-xs xl:px-8 xl:py-2 xl:text-sm'
                  : 'rounded-2xl bg-white uppercase text-mytext-color transition duration-300 hover:-translate-y-1 hover:scale-110 lg:px-6 lg:py-2 lg:text-xs xl:px-8 xl:py-2 xl:text-sm'
              }
            >
              download brochure
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
