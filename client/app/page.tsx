'use client';

import Image from 'next/image';

import MarkdownEditor from '@/components/markdownEditor';

import { Footer, Navbar } from '../components/index';
import {
  About,
  Explore,
  GetStarted,
  Hero,
  WhatsNew,
} from '../components/landingPage';

const Home = () => {
  return (
    <div>
      <div className='overflow-hidden bg-[#1b222f]'>
        <Navbar />
        <Hero />
        <div className='relative'>
          <About />
          <div className='gradient-03 z-0' />
          <Explore />
        </div>
        <div className='relative'>
          <GetStarted />
          <div className='gradient-04 z-0' />
          <WhatsNew />
        </div>
        <Footer />
      </div>
      {/* <MarkdownEditor /> */}
    </div>
  );
};

export default Home;
