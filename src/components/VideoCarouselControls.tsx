import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Circle from '@/components/Circle';
import Error from 'next/error';

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

  if (selectedDot >= dotsCount || selectedDot < 0) {
    // TODO: better handle error
    throw new Error('Out of bound in VideoCarousel');
  }

  const renderCircles = () => dotsArray.map((index) => {
    if (selectedDot === index) {
      return <Circle />;
    }
    return <Circle filled={false} />;
  });

  const chevronClasses = 'stroke-2 h-6 fill-slate-500';

  return (
    <div className="flex place-content-between">
      <button type="button" onClick={onPrevious}>
        <ChevronLeftIcon className={chevronClasses} />
      </button>
      <div className="flex">
        {renderCircles()}
      </div>
      <button type="button" onClick={onNext}>
        <ChevronRightIcon className={chevronClasses} />
      </button>
    </div>
  );
}
