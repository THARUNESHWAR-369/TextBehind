'use client';

import { NEXT_PUBLIC_API_URL } from "@/constants/constants";
import { Client } from "@gradio/client";

// outline 
export const handleOutlineSizeChange = (id: number, value: number, setTextSets: React.Dispatch<React.SetStateAction<any[]>>) => {
    setTextSets(prev => prev.map(item => item.id === id ? { ...item, outlineSize_: value } : item));
};

export const handleOutlineColorChange = (id: number, value: string, setTextSets: React.Dispatch<React.SetStateAction<any[]>>) => {
    setTextSets(prev => prev.map(item => item.id === id ? { ...item, outlineColor_: value } : item));
};

export const handleDeleteTextSet = (id: number, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.filter(set => set.id !== id));
};

export const handleDuplicateTextSet = (id: number, setTextSets: any, textSets: any, setNextId: any, nextId: number) => {
    const textSetToDuplicate = textSets.find((set: { id: number; }) => set.id === id);
    if (textSetToDuplicate) {
        const newTextSet = { ...textSetToDuplicate, id: nextId, text_: textSetToDuplicate.text_ + '_duplicated' };
        setTextSets((prev: any) => [...prev, newTextSet]);
        setNextId((prev: number) => prev + 1);
    }
};

export const addTextSet = (setTextSets: any, nextId: number, setNextId: any) => {
    setTextSets((prev: any) => [
        ...prev,
        {
            id: nextId, text_: `Edit Text - ${nextId}`, fontFamily_: "Helvetica", textColor_: '#fff',
            xPosition_: 0, yPosition_: 0, textSize_: 24, textRotate_: 0, textOpacity_: 1,
            letterSpacing_: 0, fontWeight_: 0, outlineColor_: "#000", outlineSize_: 0
        }
    ]);
    setNextId((prev: number) => prev + 1);
};

export const handleTextChange = (id: number, value: string, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, text_: value } : set));
};

export const handleFontFamilyChange = (id: number, value: string, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, fontFamily_: value } : set));
};

export const handleColorChange = (id: number, value: string, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, textColor_: value } : set));
};

export const handleXChange = (id: number, value: number, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, xPosition_: value } : set));
};

export const handleYChange = (id: number, value: number, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, yPosition_: value } : set));
};

export const handleSizeChange = (id: number, value: number, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, textSize_: value } : set));
};

export const handleRotateChange = (id: number, value: number, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, textRotate_: value } : set));
}

export const handleOpacityChange = (id: number, value: number, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, textOpacity_: value } : set));
}

export const handleLetterSpacingChange = (id: number, value: number, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, letterSpacing_: value } : set));
}

export const handleFontWeightChange = (id: number, value: number, setTextSets: any) => {
    setTextSets((prev: any[]) => prev.map((set: { id: number; }) => set.id === id ? { ...set, fontWeight_: value } : set));
}


// Markers 

export const handlerRemoveMarkers = (id: number, event: any, setMarkers: any, setMarkersToDisplay: any, setBgRemovedSegmentedImage: any, markers: any, setShowMarkers: any) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent the event from bubbling up to handleAddMarkers
    setMarkers((prev: any[]) => prev.filter(set => set.id !== id));
    setMarkersToDisplay((prev: any[]) => prev.filter(set => set.id !== id));
    if (markers.length === 0) {
        setShowMarkers(false);
        setBgRemovedSegmentedImage(null);
    }
}

export const handlerSegmentMarker = async (selectedImage: any, imageData: any, markers: any, setBgRemovedSegmentedImage: any, setSegmentationToggleLoader: any, setBgRemovedImage: any) => {
    if (!selectedImage) return;

    setSegmentationToggleLoader(true);

    try {
      
        const client = await Client.connect(NEXT_PUBLIC_API_URL);
        const response = await client.predict("/predict", {
            img_rgb: imageData,
            marker_coordinates: JSON.stringify(markers),
        });

        console.log(response.data);
        
        const data = response.data as { [key: string]: any }[];
        if (data[0]['bg_removed_segmented_img']) {
            setBgRemovedSegmentedImage(data[0]['bg_removed_segmented_img']);
            setSegmentationToggleLoader(false);
        }
        if ((data as { [key: string]: any }[])[0]['bg_only_removed_segmented_img']) {
            const responseData = response.data as { [key: string]: any }[];
            setBgRemovedImage(responseData[0]['bg_only_removed_segmented_img']);
        }
    } catch (error) {
        setSegmentationToggleLoader(false);
    }
};

export const handleAddMarkers = (event: any, setMarkers: any, setMarkersToDisplay: any, setMarkersNextId: any, markersNextId: any, selectedImage: any, imageRef: any, dimensions: any, showMarkers: any) => {
    if (selectedImage !== null && imageRef.current !== null && showMarkers) {
        const rect = imageRef.current.getBoundingClientRect();

        const scaleX = dimensions.width / rect.width;
        const scaleY = dimensions.height / rect.height;

        const x = (event.clientX - rect.left) * scaleX;
        const y = (event.clientY - rect.top) * scaleY;
        setMarkers((marker: any) => [
            ...marker,
            {
                id: markersNextId,
                x_: x,
                y_: y,
                flag_: 1
            }
        ]);
        setMarkersToDisplay((marker: any) => [
            ...marker,
            {
                id: markersNextId,
                x_: (x / scaleX) - 10,
                y_: (y / scaleY) - 10,
                flag_: 1
            }
        ])
        setMarkersNextId((prev: any) => prev + 1);
    }
};
