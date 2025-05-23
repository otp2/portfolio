"use client";
// import { IconArrowNarrowRight } from "@tabler/icons-react"; // Removed unused import
import { useState, useRef, useId, useEffect, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils"; // Make sure cn is imported if not already

interface SlideData {
  title: string;
  button: string;
  src: string;
  url?: string;
  period?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, url, period } = slide;
  const isInternalLink = url && url.startsWith('/');
  const isRadioAd = src === "/radio-ad-img.png"; // Check if it's the radio ad image

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[320px] h-[220px] mr-5 z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(6deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-xl overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <div className="relative w-full h-full group rounded-lg overflow-hidden 
                          after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/60 after:to-transparent 
                          after:backdrop-blur-sm 
                          after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
            <img
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out",
                isRadioAd && "scale-105" // Conditionally add scale for the radio ad
              )}
              style={{
                opacity: current === index ? 1 : 0.5,
              }}
              alt={title}
              src={src}
              onLoad={imageLoaded}
              loading="lazy"
              decoding="async"
            />
          </div>
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-4 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-sm md:text-base lg:text-lg font-semibold relative mb-1">
            {title}
          </h2>
          {period && (
            <p className="text-xs text-white/70 mb-2">{period}</p>
          )}
          <div className="flex justify-center">
            {isInternalLink ? (
              <Link to={url}>
                <button className="mt-2 px-3 py-1 w-fit mx-auto text-xs text-black bg-white border border-transparent flex justify-center items-center rounded-lg hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                  {button}
                </button>
              </Link>
            ) : (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="mt-2 px-3 py-1 w-fit mx-auto text-xs text-black bg-white border border-transparent flex justify-center items-center rounded-lg hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                  {button}
                </button>
              </a>
            )}
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

// Define handle type for ref
export interface CarouselRef {
  handlePreviousClick: () => void;
  handleNextClick: () => void;
}

// Use forwardRef
export const Carousel = forwardRef<CarouselRef, CarouselProps>(({ slides }, ref) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  // Expose handlers via useImperativeHandle
  useImperativeHandle(ref, () => ({
    handlePreviousClick,
    handleNextClick,
  }));

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-full h-[230px]"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <div className="relative overflow-hidden">
        <ul
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 320}px)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
});

// Add display name for DevTools
Carousel.displayName = "Carousel";