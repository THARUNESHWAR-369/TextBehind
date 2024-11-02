import React from 'react';
import Image from 'next/image';

const galleryItems = [
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F1.jpg?alt=media&token=90c07744-6a45-4603-85ba-56dcdc62ee0f",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F10.jpg?alt=media&token=7d818948-7ac3-4d43-8224-17aa9724667a",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F2.jpg?alt=media&token=9b23b740-c144-4cf1-9d2b-c560ce4e41c5",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F3.jpg?alt=media&token=77d512fe-ab8a-4e1a-a8f1-4ee4686c601c",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F4.jpg?alt=media&token=7a18abfa-3c5a-4cb3-b25b-6ae249daf441",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F5.jpg?alt=media&token=60505bda-04cc-4d1e-bbe7-6fb63f14e71a",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F6.jpg?alt=media&token=86a6188f-0ea0-44a8-9d4d-4a561a3da7d2",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F7.jpg?alt=media&token=35ca320d-292b-4739-b1b2-e4822484a299",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F8.jpg?alt=media&token=ea2a4181-5372-4264-86a2-74993e975758",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2F9.jpg?alt=media&token=fd35b56e-30e0-4291-ad9f-885e332f2368",
];

export function Gallery() {


  return (
    <div className="py-20">
      <div className="max-w-full">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-indigo-400 font-medium">INSPIRATION GALLERY</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">See What&apos;s Possible</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how others are using TextBehindImage to create stunning visuals
          </p>
        </div>

        <div className="grd w-full h-full columns-3 select-none">
          {galleryItems.map((item, index) => (
            <div className='grd-itm w-full  select-none' key={index}>
              <Image
                key={index}
                src={item}
                alt={`Gallery Item ${index + 1}`}
                className='w-full mb-[20px]  select-none'
                width={500}
                height={500}
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}