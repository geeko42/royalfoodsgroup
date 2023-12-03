import type { NextPage } from 'next';
import Image from 'next/image';
import logo from '../public/logos/logo-green.png';
import logo4 from '../public/packagingLogos/haccp.png';
import logo5 from '../public/packagingLogos/halal.png';
import logo6 from '../public/packagingLogos/iso.png';
import logo7 from '../public/packagingLogos/pk.png';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer: NextPage = () => {
  return (
    <div className='w-screen bg-gray-300'>
      <div className='container mx-auto flex w-full justify-between px-10 py-12 lg:px-32'>
        <div className='hidden xl:block'>
          <Image src={logo} priority width={200} height={200} alt='royalLogo' />
        </div>
        <div className='flex flex-col gap-1 text-xs text-black'>
          <p>Royal Foods Group</p>
          <p>Plot No.4, E-1 Road, RCCI</p>
          <p>Industrial State Rawat,</p>
          <p>Islamabad, Pakistan</p>
          <p>
            <span className='font-bold'>Helpline: </span>+92 51 4499371 - 72
          </p>
          <p>
            <span className='font-bold'>Email address: </span>
            info@royalfoodsgroup.com
          </p>
        </div>
        <div className='flex flex-col justify-between gap-1 text-xs text-black'>
          <a href='/#'>Home</a>
          <a href='/products'>Products</a>
          <a href='/about'>About</a>
          <a href=''>Contact</a>
        </div>
        <div className='hidden md:flex md:flex-col  md:justify-center'>
          <div className='flex h-14 w-20'>
            <Image src={logo7} alt='' />
            <Image src={logo5} alt='' />
          </div>
          <div className='flex h-14 w-20'>
            <Image src={logo6} alt='' />
            <Image src={logo4} alt='' />
          </div>
        </div>
        <div className='hidden flex-col items-center justify-center gap-4 md:flex'>
          <AiOutlineInstagram className='text-2xl text-black' />
          <AiFillFacebook className='text-2xl text-black' />
          <AiOutlineYoutube className='text-2xl text-black' />
        </div>
      </div>
      <div className='flex h-10 items-center bg-gray-600'>
        <div className='mx-auto text-xs text-white'>
          <h1>Copyright © 2023 Royal Frozen Foods | All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
