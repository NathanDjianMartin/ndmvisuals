import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Circle from '@/components/Circle';

type VideoCarouselControlsProps = {
  onPrevious: () => void,
  onNext: () => void,
  dotsCount: number,
  selectedDot: number,
}

export default function VideoCarouselControls({
  onPrevious,
  onNext,
  dotsCount,
  selectedDot,
}: VideoCarouselControlsProps) {
  const dotsArray: number[] = [];

  for (let i = 0; i < dotsCount; i += 1) {
    dotsArray.push(i);
  }

  const renderCircles = () => dotsArray.map((index) => {
    if (selectedDot === index) {
      return <Circle key={index} />;
    }
    return <Circle key={index} filled={false} />;
  });

  const chevronClasses = 'h-8 md:h-10 fill-slate-500';

  return (
    <div className="flex place-content-between items-center">
      <button type="button" onClick={onPrevious}>
        <ChevronLeftIcon className={chevronClasses} />
      </button>
      <div className="flex space-x-1 sm:space-x-2">
        {renderCircles()}
      </div>
      <button type="button" onClick={onNext}>
        <ChevronRightIcon className={chevronClasses} />
      </button>
    </div>
  );
}
