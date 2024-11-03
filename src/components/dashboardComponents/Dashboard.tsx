"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Switch,
} from "@nextui-org/react";
import NavBar from "@/components/NavBar";
import BgElement from "@/components/BgElement";
import {
  handlerSegmentMarker,
} from "@/lib/Controls";
import PopupOverElement from "@/components/PopupOverElement";
import useImageUpload from "@/components/dashboardComponents/UploadImage";
import Image from "next/image";
import TextControls from "./TextControls";
import * as htmlToImage from 'html-to-image';
import TextSet from "./TextSet";
import { MarkerManagement } from "./Markers";
import { MarkersInterface, TextSetItem } from "@/lib/types/types";
import Feedback from "../landingpage/FeedBack";
import { Footer } from "../landingpage/Footer";

export default function DashboardPage() {
  const [imageIsOpen, setImageIsOpen] = React.useState(true);
  const [saveWarnings, setSaveWarnings] = React.useState("");

  // Segmented Image Hooks
  const [bgRemovedSegmentedImage, setBgRemovedSegmentedImage] = useState<string>("");
  const [bgRemovedImage, setBgRemovedImage] = useState<string>("");

  // Loader Hooks
  const [segmentationToggleLoader, setSegmentationToggleLoader] =
    useState(false);
  const [showMarkers, setShowMarkers] = useState<boolean>(true);


  // Text Hooks
  const [textSets, setTextSets] = useState<TextSetItem[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  // Marker Hook
  const [markers, setMarkers] = useState<MarkersInterface[]>([]);

  const [markersToDisplay, setMarkersToDisplay] = useState<MarkersInterface[]>([]);

  const [markersNextId, setMarkersNextId] = useState<number>(1);

  const [timer, setTimer] = useState<number>(0);

  // Image Upload Hooks
  const imageRef = useRef<HTMLImageElement | null>(null);
  const { selectedImage, imageData, dimensions, handleImageUpload } =
    useImageUpload({
      setBgRemovedSegmentedImage,
      setBgRemovedImage,
      setMarkers,
      setMarkersToDisplay,
      setMarkersNextId,
      setShowMarkers
    });

  useEffect(() => {
    if (segmentationToggleLoader) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimer(0);
    }
  }, [segmentationToggleLoader]);

  const triggerFileInput = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  useEffect(() => {
    if (markers.length > 0) {
      handlerSegmentMarker(
        selectedImage,
        imageData,
        markers,
        setBgRemovedSegmentedImage,
        setSegmentationToggleLoader,
        setBgRemovedImage
      );
    } else {
      setBgRemovedSegmentedImage("");
      setBgRemovedImage("");
    }
  }, [markers, selectedImage, imageData]);

  const handleSaveImage = async () => {
    if (!imageRef.current) return;

    if (!selectedImage) {
      setSaveWarnings("*Upload an image first.");
      return;
    }

    if (showMarkers) {
      setSaveWarnings('*Turn off the "Show Markers" and Save the image.');
      return;
    }

    const originalWidth = dimensions.width;
    const originalHeight = dimensions.height;

    const { width: displayedWidth, height: displayedHeight } =
      imageRef.current.getBoundingClientRect();

    const scaleX = originalWidth / displayedWidth;
    const scaleY = originalHeight / (displayedHeight - 1);

    const scale = Math.max(scaleX, scaleY);

    try {
      const dataUrl = await htmlToImage.toPng(imageRef.current, {
        cacheBust: true,
        width: originalWidth,
        height: originalHeight,
        canvasHeight: originalHeight,
        canvasWidth: originalWidth,
        style: {
          // width: `${originalWidth}px`,
          // height: `${originalHeight}px`,
          transform: `scale(${scale})`,
          // transform: `scale(1)`,
          transformOrigin: "top left",
        },
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "image-with-text.png";
      link.click();
    } catch (error) {
      console.error("Error converting HTML to image:", error);
    }


  };

  return (
    <>

      <BgElement />
      <div className="min-h-max h-full z-0 mb-10">
        <NavBar />

        <div className="main-container z-[0] h-full pt-10 flex flex-col w-[80%] max-w-[1500px] mx-auto justify-around">
          <div className="flex justify-between gap-4 max-[800px]:flex-col max-[800px]:items-center">
            <div className="flex flex-col w-full gap-4 img-container max-[800px]:text-center max-[800px]:justify-center">
              <div className="flex gap-3 relative">
                <div
                  className={`img-container max-w-full w-[500px] relative shadow-lg  max-h-auto ${selectedImage
                    ? "w-fit h-fit"
                    : "min-h-[300px] w-[500px]  backdrop-blur-[10px] bg-white/[0.1]"
                    }`}
                >
                  <div
                    id="img-container"
                    ref={imageRef}
                    className="w-full h-full relative overflow-hidden"
                  >
                    {
                      segmentationToggleLoader && showMarkers && (
                        <div className={`absolute z-[20] bg-black/50 backdrop-blur-[10px] top-0 left-0 flex justify-center items-center flex-col overflow-hidden shadow-lg h-full w-full`}>
                          <svg
                            className="animate-spin h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              fill="currentColor"
                            />
                          </svg>
                          <p>{timer} / 20 sec</p>
                        </div>
                      )
                    }

                    {(selectedImage && showMarkers) && (
                      <MarkerManagement
                        markers={markersToDisplay}
                        setMarkers={setMarkers}
                        setMarkersToDisplay={setMarkersToDisplay}
                        setBgRemovedSegmentedImage={setBgRemovedSegmentedImage}
                        setShowMarkers={setShowMarkers}
                        setMarkersNextId={setMarkersNextId}
                        markersNextId={markersNextId}
                        selectedImage={selectedImage}
                        imageRef={imageRef}
                        showMarkers={showMarkers}
                        dimensions={dimensions}
                      />
                    )}

                    {showMarkers || bgRemovedSegmentedImage ? (
                      <div className="segmented-image-overlay z-[14] w-full h-full absolute top-0 left-0">
                        {bgRemovedSegmentedImage && showMarkers && (
                          <Image src={bgRemovedSegmentedImage} width={1000} height={1000} className="w-full h-full object-contain transition-all duration-500" alt="segmented-bg-removed-img" />
                        )}
                        {
                          !showMarkers && (
                            <Image src={bgRemovedImage} width={1000} height={1000} className="w-full h-full object-contain transition-all duration-500" alt="bg-removed-segmented-img" />
                          )
                        }
                      </div>
                    ) : (<></>)}

                    {!selectedImage && (
                      <p className="w-full h-full flex justify-center items-center text-slate-500">
                        Upload an Image ...
                      </p>
                    )}
                    {selectedImage && (
                      <div className="w-full h-full relative">
                        <TextSet textSets={textSets} />

                        < Image
                          src={selectedImage}
                          alt="uploaded-image"
                          className="w-full h-full rounded-none"
                          width={5000}
                          height={5000}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                    )}
                  </div>
                </div>
                {selectedImage && (
                  <PopupOverElement
                    isOpen={imageIsOpen}
                    setIsOpen={setImageIsOpen}
                  ></PopupOverElement>
                )}
              </div>

              {saveWarnings && (
                <div className="text-red-500 text-sm">{saveWarnings}</div>
              )}

              <div className="flex-row gap-2 max-[800px]:justify-center justify-start items-center flex process-btn">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mb-4 hidden"
                  id="fileInput"
                />

                <Button
                  color="primary"
                  variant="flat"
                  className="rounded-full text-white"
                  onClick={triggerFileInput}
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                    </svg>
                  }
                >
                  Upload File
                </Button>

                {selectedImage && (
                  <Switch
                    defaultSelected
                    onClick={() => setShowMarkers(!showMarkers)}
                  >
                    Show Markers
                  </Switch>
                )}
              </div>
            </div>
            <TextControls
              textSets={textSets}
              setTextSets={setTextSets}
              nextId={nextId}
              setNextId={setNextId}
              handleSaveImage={handleSaveImage}
            />
          </div>
        <Feedback  />
        <Footer/>
        </div >
      </div >
    </>
  );
}