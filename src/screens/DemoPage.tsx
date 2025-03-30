import { useState } from 'react';
import { ProgressiveBlur } from '../components/ui/progressive-blur';
import { motion } from 'framer-motion';

export const DemoPage = () => {
  return (
    <div className="p-8 max-w-[900px] mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold text-neutral-950 dark:text-white mb-3">Component Demo</h1>
        <p className="text-gray-600 dark:text-neutral-400 text-lg mb-8">
          Showcasing the Progressive Blur component in different variations
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-6">Progressive Blur on Hover</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProgressiveBlurHover />
          <ProgressiveBlurHover 
            imgSrc="https://images.unsplash.com/photo-1698352514038-3e7a4f83e17d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3" 
            title="Mountain Vista"
            subtitle="Scenic landscape" 
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-6">Different Directions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProgressiveBlurDirection direction="top" />
          <ProgressiveBlurDirection direction="right" />
          <ProgressiveBlurDirection direction="bottom" />
          <ProgressiveBlurDirection direction="left" />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-6">Different Intensities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProgressiveBlurIntensity blurIntensity={0.25} label="Light (0.25)" />
          <ProgressiveBlurIntensity blurIntensity={0.5} label="Medium (0.5)" />
          <ProgressiveBlurIntensity blurIntensity={1} label="Heavy (1.0)" />
        </div>
      </section>
    </div>
  );
};

// Component for hover effect demonstration
export function ProgressiveBlurHover({ 
  imgSrc = "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  title = "John Martin",
  subtitle = "Pandemonium" 
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className='relative aspect-square max-h-[300px] overflow-hidden rounded-xl'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={imgSrc}
        alt={title}
        className='absolute inset-0 h-full w-full object-cover'
      />
      <ProgressiveBlur
        className='pointer-events-none absolute bottom-0 left-0 h-[75%] w-full'
        blurIntensity={0.5}
        animate={isHover ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      <motion.div
        className='absolute bottom-0 left-0'
        animate={isHover ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className='flex flex-col items-start gap-0 px-5 py-4'>
          <p className='text-base font-medium text-white'>{title}</p>
          <span className='text-base text-zinc-300'>{subtitle}</span>
        </div>
      </motion.div>
    </div>
  );
}

// Component to demonstrate different direction props
function ProgressiveBlurDirection({ direction = "bottom" }) {
  return (
    <div className="relative aspect-square max-h-[200px] overflow-hidden rounded-xl">
      <img
        src={`https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3`}
        alt={`Direction ${direction}`}
        className="h-full w-full object-cover"
      />
      <ProgressiveBlur
        className="pointer-events-none absolute inset-0"
        direction={direction as any}
        blurIntensity={0.5}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-center py-2">
        <span className="text-sm font-medium text-white">Direction: {direction}</span>
      </div>
    </div>
  );
}

// Component to demonstrate different blur intensities
function ProgressiveBlurIntensity({ blurIntensity = 0.25, label = "Light" }) {
  return (
    <div className="relative aspect-square max-h-[200px] overflow-hidden rounded-xl">
      <img
        src={`https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3`}
        alt={`Intensity ${blurIntensity}`}
        className="h-full w-full object-cover"
      />
      <ProgressiveBlur
        className="pointer-events-none absolute inset-0"
        blurIntensity={blurIntensity}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-center py-2">
        <span className="text-sm font-medium text-white">{label}</span>
      </div>
    </div>
  );
}