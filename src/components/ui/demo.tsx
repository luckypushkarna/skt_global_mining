'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Eye, Rocket, Shield, Target, Compass, Award } from 'lucide-react';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

const videoContent: MediaContent = {
  src: '/videos/gallery-mining-optimized.mp4',
  poster: '/videos/gallery-mining-thumb.webp',
  background:
    'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS',
  title: '',
  date: 'SKT Global Mining',
  scrollToExpand: 'Scroll to Learn Our Story',
  about: {
    overview:
      'SKT Global Mining & Services Limited was established as part of Tyre Technocrats India Private Limited’s long-term strategic investment into Zambia’s mining sector. From inception, the company’s growth has been defined by speed, operational discipline, infrastructure development, and underground mining excellence.',
    conclusion: '',
  },
};

const MediaContent = () => {
  return (
    <div className='max-w-5xl mx-auto py-10 px-4'>
      {/* Grid Container */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8'>
        
        {/* Card 1: Our Inception */}
        <div className='lg:col-span-7 relative group overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:border-neutral-900 flex flex-col justify-between min-h-[320px]'>
          <div className='absolute top-0 right-0 w-32 h-32 bg-neutral-100/60 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110' />
          
          <div>
            <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-skt-navy text-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6'>
              <Award className='w-6 h-6' />
            </div>
            <h3 className='text-2xl font-black text-neutral-900 tracking-tight mb-4'>
              Our Inception
            </h3>
            <p className='text-sm md:text-base leading-relaxed text-neutral-600 font-medium'>
              SKT Global Mining & Services Limited was established as part of Tyre Technocrats India Private Limited’s long-term strategic investment into Zambia’s mining sector. From inception, the company’s growth has been defined by speed, operational discipline, infrastructure development, and underground mining excellence.
            </p>
          </div>
          
          <div className='flex items-center gap-1.5 mt-8 text-[10px] font-bold tracking-widest text-neutral-400 uppercase'>
            <span>Est. Zambia</span>
            <span className='w-1.5 h-1.5 rounded-full bg-neutral-400' />
            <span>Global Operations</span>
          </div>
        </div>

        {/* Card 2: Our Vision */}
        <div className='lg:col-span-5 relative group overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 text-white transition-all duration-500 hover:shadow-2xl flex flex-col justify-between min-h-[320px]'>
          <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500' />
          
          <div>
            <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6'>
              <Eye className='w-6 h-6' />
            </div>
            <h3 className='text-2xl font-black tracking-tight mb-4'>
              Our Vision
            </h3>
            <p className='text-sm md:text-base leading-relaxed text-white/80 font-medium'>
              To build the most reliable, sustainable, and safety-focused underground mining infrastructure across Africa, driving long-term scale and value for our partners.
            </p>
          </div>

          <div className='flex items-center gap-2 mt-8 text-[10px] font-bold tracking-widest text-white/40 uppercase'>
            <Compass className='w-4 h-4 text-white/60' />
            <span>Leading with Foresight</span>
          </div>
        </div>

        {/* Card 3: Our Mission */}
        <div className='lg:col-span-12 relative group overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:border-neutral-900'>
          <div className='flex flex-col lg:flex-row lg:items-start justify-between gap-8'>
            <div className='max-w-md'>
              <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-skt-navy text-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6'>
                <Rocket className='w-6 h-6' />
              </div>
              <h3 className='text-3xl font-black text-neutral-900 tracking-tight mb-4'>
                Our Mission
              </h3>
              <p className='text-sm md:text-base leading-relaxed text-neutral-500 font-medium'>
                Our success is driven by innovative engineering, operational discipline, and 24/7 service availability to build a safe, sustainable, and modern future.
              </p>
            </div>
            
            <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex gap-4 p-4 rounded-xl bg-white border border-neutral-100 transition-colors duration-300 group-hover:border-neutral-200'>
                <div className='w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-900'>
                  <Target className='w-4 h-4' />
                </div>
                <div>
                  <h4 className='font-bold text-neutral-900 text-sm mb-1'>Operational Excellence</h4>
                  <p className='text-xs leading-relaxed text-neutral-500'>Enhancing partner and stakeholder value through innovative engineering and 24/7 support.</p>
                </div>
              </div>

              <div className='flex gap-4 p-4 rounded-xl bg-white border border-neutral-100 transition-colors duration-300 group-hover:border-neutral-200'>
                <div className='w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-900'>
                  <Shield className='w-4 h-4' />
                </div>
                <div>
                  <h4 className='font-bold text-neutral-900 text-sm mb-1'>Zero-Harm Safety</h4>
                  <p className='text-xs leading-relaxed text-neutral-500'>Maintaining world-class safety standards and protecting our workforce across operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const Demo = () => {
  useEffect(() => {
    // Only reset scroll on fresh/forward navigation.
    // On Back navigation, SmoothScrollProvider handles restoration - don't fight it.
    const savedPos = sessionStorage.getItem('__scroll__/');
    const isBackNav = savedPos && parseInt(savedPos, 10) > 100;
    if (!isBackNav) {
      window.scrollTo(0, 0);
    }

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={videoContent.src}
        posterSrc={videoContent.poster}
        bgImageSrc={videoContent.background}
        title={videoContent.title}
        date={videoContent.date}
        scrollToExpand={videoContent.scrollToExpand}
        textBlend
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;
