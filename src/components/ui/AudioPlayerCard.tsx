"use client";

import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon, HeartIcon, MoreHorizontalIcon } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface AudioPlayerCardProps {
  audioSrc: string;
  coverImageSrc: string;
  title: string;
  genre: string;
  className?: string;
}

// Helper function to format time (MM:SS)
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const AudioPlayerCard: React.FC<AudioPlayerCardProps> = ({
  audioSrc,
  coverImageSrc,
  title,
  genre,
  className
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Update current time
    const timeUpdateHandler = () => {
      setCurrentTime(audio.currentTime);
    };

    // Update duration
    const loadedMetadataHandler = () => {
      setDuration(audio.duration);
    };

    // Reset on end
    const endedHandler = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', timeUpdateHandler);
    audio.addEventListener('loadedmetadata', loadedMetadataHandler);
    audio.addEventListener('ended', endedHandler);

    // Cleanup
    return () => {
      audio.removeEventListener('timeupdate', timeUpdateHandler);
      audio.removeEventListener('loadedmetadata', loadedMetadataHandler);
      audio.removeEventListener('ended', endedHandler);
    };
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error("Error playing audio:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = value[0];
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleHeartClick = () => {
    setIsFavorited(!isFavorited);
    console.log("Favorite status:", !isFavorited);
  };

  return (
    <div className={cn(
      "rounded-xl overflow-hidden p-5 text-white relative",
      "bg-gradient-to-br from-[#ad9c5f]/40 via-black/10 to-black/40 dark:from-[#ad9c5f]/50 dark:via-black/20 dark:to-black/50",
      className
    )}>
      {/* Audio element (hidden) */}
      <audio ref={audioRef} src={audioSrc} preload="metadata"></audio>

      {/* Top Section: Title & Icons */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white/90">{title}</h3>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleHeartClick}
            className={cn(
              "text-white/70 hover:text-white transition-colors", 
              isFavorited && "text-red-500 hover:text-red-400"
            )}
            aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          >
            <HeartIcon 
              size={20} 
              fill={isFavorited ? "currentColor" : "none"}
            />
          </button>
          <Popover>
            <PopoverTrigger asChild>
              <button 
                className="text-white/70 hover:text-white transition-colors" 
                aria-label="More options"
              >
                <MoreHorizontalIcon size={20} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto text-xs p-2">
              contact owen directly to listen to his spotify playlist
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Genre Badge */}
      <Badge variant="secondary" className="mb-6 bg-black/20 text-white/80 border-none backdrop-blur-sm">
        {genre}
      </Badge>

      {/* Bottom Section: Player Controls */}
      <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-lg p-4">
        {/* Cover Image - Added outer white rounded box */}
        <div className="w-20 h-20 p-2 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
            <img 
              src={coverImageSrc} 
              alt={title} 
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Player Info & Seek */}
        <div className="flex-grow space-y-2">
          <div>
            <p className="text-xs text-white/70">Playing now</p>
            <p className="text-sm font-medium text-white/90">{title}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-white/70 w-8 text-right">{formatTime(currentTime)}</span>
            <Slider
              value={[currentTime]}
              max={duration || 100} // Provide a default max if duration is 0
              step={1}
              onValueChange={handleSliderChange}
              className="flex-grow"
              aria-label="Audio seek slider"
            />
            <span className="text-xs text-white/70 w-8">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <PauseIcon size={20} fill="black" /> : <PlayIcon size={20} fill="black" />}
        </button>
      </div>
    </div>
  );
}; 