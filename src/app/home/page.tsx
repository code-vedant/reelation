'use client';

import { useEffect, useState } from 'react';
import ImageKit from 'imagekit';

const videos = [
  { src: 'https://ik.imagekit.io/your_account/video1.mp4', thumbnail: 'https://ik.imagekit.io/your_account/thumb1.jpg' },
  { src: 'https://ik.imagekit.io/your_account/video2.mp4', thumbnail: 'https://ik.imagekit.io/your_account/thumb2.jpg' },
  { src: 'https://ik.imagekit.io/your_account/video3.mp4', thumbnail: 'https://ik.imagekit.io/your_account/thumb3.jpg' },
];

export default function ShortsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e:KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      } else if (e.key === 'ArrowUp') {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div
        className="relative w-auto h-full max-w-full rounded-lg shadow-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {!hovered && (
          <img
            src={videos[currentIndex].thumbnail}
            alt="Thumbnail"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        )}
        <video
          key={videos[currentIndex].src}
          src={videos[currentIndex].src}
          className="h-full w-auto max-w-full rounded-lg shadow-lg"
          controls
          autoPlay={hovered}
          loop
        />
      </div>
    </div>
  );
}
