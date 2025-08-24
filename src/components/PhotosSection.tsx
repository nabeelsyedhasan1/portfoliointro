import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/** Click-to-cycle image card.
 * - Click anywhere on the image to advance to the next.
 * - If captions are provided, they change with the image.
 * - No arrows are shown.
 */
type Img = { src: string; alt: string; caption?: string };
const ClickCarousel: React.FC<{ images: Img[]; showCaption?: boolean }> = ({ images, showCaption = true }) => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % images.length);
  const current = images[idx] || images[0];

  return (
    <div className="group cursor-pointer select-none" onClick={next} aria-label="Click to view next photo">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-brand-border dark:border-gray-700 shadow-lg">
        <img
          key={current.src + idx}
          src={current.src}
          alt={current.alt}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 opacity-100 group-active:opacity-95"
          loading="lazy"
        />
        {/* Subtle overlay & helper */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to change
        </div>
      </div>
      {showCaption && current.caption && (
        <div className="mt-3 text-center">
          <h3 className="text-lg font-semibold text-brand-text dark:text-gray-100 font-sora">{current.caption}</h3>
        </div>
      )}
    </div>
  );
};

export const PhotosSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="photos" 
      ref={ref}
      className="py-24 bg-brand-bg dark:bg-gray-900"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="flex items-center justify-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-brand-muted dark:bg-gray-800 rounded-full border border-brand-border dark:border-gray-700">
              <Camera className="h-5 w-5 text-brand-accent mr-2" />
              <span className="text-sm font-medium text-brand-text-muted dark:text-gray-300">What I like to do in my free time</span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Trekking (two images, captions change) */}
            <div className="card">
              <ClickCarousel
                images={[
                  { src: '/images/Himachal1.jpg', alt: 'Trek photo in Tosh, Himachal Pradesh', caption: 'Tosh, Himachal Pradesh' },
                  { src: '/images/Himachal2.jpg', alt: 'Trek photo in Kutla, Himachal Pradesh', caption: 'Kutla, Himachal Pradesh' }
                ]}
                showCaption={true}
              />
            </div>

            {/* Card 2: Clash of Clans (single image, updated caption) */}
            <div className="card">
              <ClickCarousel
                images={[
                  { src: '/images/ClashOfClans.jpg', alt: 'Playing Clash of Clans on my phone', caption: 'Me playing Clash of Clans' }
                ]}
                showCaption={true}
              />
            </div>

            {/* Card 3: Cat (same display as card 1, no captions) */}
            <div className="card">
              <ClickCarousel
                images={[
                  { src: '/images/Chungus1.jpg', alt: 'My cat Chungus looking at the camera' },
                  { src: '/images/Chungus2.jpg', alt: 'My cat Chungus sleeping' }
                ]}
                showCaption={false}
              />
            </div>
          </div>

          {/* Helper note */}
          <p className="mt-6 text-center text-sm text-brand-text-muted dark:text-gray-400">Tip: click photos to cycle.</p>
        </div>
      </div>
    </section>
  );
};
