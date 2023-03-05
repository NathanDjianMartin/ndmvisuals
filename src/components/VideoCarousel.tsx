import VideoCard from '@/components/VideoCard';
import VideoCarouselControls from '@/components/VideoCarouselControls';
import Video from '@/models/Video';
import React, { useState } from 'react';

type VideoListProps = {
  videos: Array<Video>
}

export default function VideoCarousel({ videos }: VideoListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const maxIndex = videos.length - 1;

  const onNextVideo = () => {
    setSelectedIndex(selectedIndex === maxIndex ? 0 : selectedIndex + 1);
  };

  const onPreviousVideo = () => {
    setSelectedIndex(selectedIndex === 0 ? maxIndex : selectedIndex - 1);
  };

  return (
    <div>
      {videos.map((video, index) => (
        <div className={`${selectedIndex !== index && 'hidden'}`}>
          <VideoCard key={video.$id} video={video} />
        </div>
      ))}
      <VideoCarouselControls
        onNext={onNextVideo}
        onPrevious={onPreviousVideo}
        dotsCount={videos.length}
        selectedDot={selectedIndex}
      />
    </div>
  );
}
