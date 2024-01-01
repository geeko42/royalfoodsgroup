'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoG from '/public/logos/logo-green.png';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products/' },
  { name: 'About Us', href: '/about/' },
  { name: 'Gallery', href: '/gallery/' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: {
      opacity: 0,
      transition: {
        delay: 1.5,
        duration: 5,
      },
    },
  };

  function MobileNav({ isOpen }: { isOpen: boolean }) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed left-0 top-0 z-50 h-screen w-screen  bg-opacity-40 backdrop-blur-md transition-opacity`}
          >
            <div className='flex h-full flex-col items-center justify-center text-center text-2xl text-primary-color'>
              <ul className='space-y-6'>
                <li>
                  <Link href='/' onClick={() => setIsOpen(!isOpen)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/products' onClick={() => setIsOpen(!isOpen)}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href='/about' onClick={() => setIsOpen(!isOpen)}>
                    About
                  </Link>
                </li>
                {/* <li>
                  <Link href='/#' onClick={() => setIsOpen(!isOpen)}>
                    Gallery
                  </Link>
                </li> */}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div className='flex justify-center'>
      {/* Mobile/Tablet Navbar */}
      <nav className=''>
        <MobileNav isOpen={isOpen} />
        <div className='flex w-full items-center justify-end lg:hidden'>
          {/* Logo */}
          <div className='fixed left-5 top-1 z-50'>
            <Link href='/#'>
              <Image
                src={logoG}
                width={100}
                height={100}
                priority
                alt='Logo of Company'
              />
            </Link>
          </div>
          {/* Button */}
          <div
            className='group fixed right-5 top-0 z-50 mt-10 flex h-6 w-6 cursor-pointer flex-col items-center justify-between'
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <span
              className={`h-1 w-full transform cursor-pointer rounded-lg bg-primary-color transition duration-300 ease-in-out group-hover:text-red-500 ${
                isOpen ? 'translate-y-2.5 rotate-45' : ''
              }`}
            />
            <span
              className={`h-1 transform cursor-pointer rounded-lg bg-primary-color transition duration-300 ease-in-out group-hover:text-red-500 ${
                isOpen ? 'w-0' : 'w-full'
              }`}
            />
            <span
              className={`h-1 w-full transform cursor-pointer rounded-lg bg-primary-color transition duration-300 ease-in-out group-hover:text-red-500 ${
                isOpen ? '-translate-y-2.5 -rotate-45' : ''
              }`}
            />
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <section className='absolute top-0 z-20 mx-auto flex h-28 w-full justify-center '>
        <nav
          className={
            'container hidden w-full items-center justify-between text-primary-color transition-all duration-500 md:px-8 lg:flex xl:px-24'
          }
        >
          <ul
            className={
              'xl:text-md lg:text-md flex justify-center text-sm font-light uppercase tracking-wider text-primary-color md:text-sm lg:space-x-4 xl:space-x-16'
            }
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={
                    isActive
                      ? 'font-bold'
                      : 'group font-normal transition duration-300 hover:cursor-pointer'
                  }
                >
                  {link.name}
                  <span
                    className={
                      isActive
                        ? 'block h-[0.5px] max-w-full bg-primary-color transition-all duration-500 group-hover:max-w-full'
                        : 'block h-[0.5px] max-w-0 bg-primary-color transition-all duration-500 group-hover:max-w-full'
                    }
                  ></span>
                </Link>
              );
            })}
          </ul>

          <Link href='/#'>
            <Image
              src={logoG}
              width={110}
              height={110}
              priority
              alt='Logo of Company'
              className=''
            />
          </Link>

          <div className='flex items-center justify-center'>
            <ul
              className={
                'xl:text-md flex items-center justify-center space-x-3 px-4 text-primary-color lg:text-xs'
              }
            >
              <li>
                <Link
                  href='https://www.instagram.com/royalfoodsgroup/?hl=en'
                  className='group font-normal transition duration-300 hover:cursor-pointer'
                >
                  <AiOutlineInstagram className='lg:text-xl xl:text-2xl' />
                  <span
                    className={
                      'block h-[0.5px] max-w-0 bg-primary-color transition-all duration-500 group-hover:max-w-full'
                    }
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.facebook.com/RoyalFoodsGroup'
                  className='group font-normal transition duration-300 hover:cursor-pointer'
                >
                  <AiFillFacebook className='lg:text-xl xl:text-2xl' />
                  <span
                    className={
                      'block h-[0.5px] max-w-0 bg-primary-color transition-all duration-500 group-hover:max-w-full'
                    }
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.youtube.com/watch?v=FAZuX7Aj6UA'
                  className='group font-normal transition duration-300 hover:cursor-pointer'
                >
                  <AiOutlineYoutube className='lg:text-xl xl:text-2xl' />
                  <span
                    className={
                      'block h-[0.5px] max-w-0 bg-primary-color transition-all duration-500 group-hover:max-w-full'
                    }
                  ></span>
                </Link>
              </li>
            </ul>
            <a href='/files/brochure.pdf' download='Brochure'>
              <button
                className={
                  'text-fourth-color rounded-2xl bg-primary-color uppercase shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-secondary-color hover:text-primary-color lg:px-6 lg:py-2 lg:text-xs xl:px-8 xl:py-2 xl:text-sm'
                }
              >
                download brochure
              </button>
            </a>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
