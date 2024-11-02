'use client';

import { MarkersInterface } from '@/lib/types/types';
import { useState } from 'react';

const useImageUpload = ({
  setBgRemovedSegmentedImage,
  setBgRemovedImage,
  setMarkers,
  setMarkersToDisplay,
  setMarkersNextId,
  setShowMarkers

}: {
  setBgRemovedSegmentedImage: (value: string) => void,
  setBgRemovedImage: (value: string) => void,
  setMarkers: (value: MarkersInterface[]) => void,
  setMarkersToDisplay: (value: MarkersInterface[]) => void,
  setMarkersNextId: (value: number) => void,
  setShowMarkers: (value: boolean) => void
}) => {
  const [selectedImage, setSelectedImage] = useState<string | any | null >("");
  const [imageData, setImageData] = useState<string | File>("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSelectedImage("");
    setImageData("");
    setDimensions({ width: 0, height: 0 });
    setBgRemovedImage("");
    setBgRemovedSegmentedImage("");

    setMarkers([]);
    setMarkersToDisplay([]);
    setMarkersNextId(1);
    setShowMarkers(true);

    const file = event.target.files?.[0];
    if (file) {
      setImageData(file);
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target?.result);
      reader.readAsDataURL(file);

      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    }

  };

  return {
    selectedImage,
    imageData,
    dimensions,
    handleImageUpload
  };
};

export default useImageUpload;
