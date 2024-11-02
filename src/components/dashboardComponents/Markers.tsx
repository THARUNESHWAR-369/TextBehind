import { handleAddMarkers, handlerRemoveMarkers } from "@/lib/Controls";

export const MarkerManagement = (
    {
        markers,
        setMarkers,
        setMarkersToDisplay,
        setBgRemovedSegmentedImage,
        setShowMarkers,
        setMarkersNextId,
        markersNextId,
        selectedImage,
        imageRef,
        dimensions,
        showMarkers,
    }: {
        markers: { id: number, x_: number, y_: number }[],
        setMarkers: React.Dispatch<React.SetStateAction<{ id: number; x_: number; y_: number; flag_: number; }[]>>,
        setMarkersToDisplay: React.Dispatch<React.SetStateAction<{ id: number; x_: number; y_: number; flag_: number; }[]>>,
        setBgRemovedSegmentedImage: React.Dispatch<React.SetStateAction<string>>, 
        setShowMarkers: React.Dispatch<React.SetStateAction<boolean>>,
        setMarkersNextId: React.Dispatch<React.SetStateAction<number>>,
        markersNextId: number,
        selectedImage: string | null | ArrayBuffer | undefined,
        imageRef: React.MutableRefObject<HTMLImageElement | null>,
        dimensions: { width: number, height: number },
        showMarkers: boolean,
        
    }) => (
    <div className='w-full h-full absolute z-[15] transition-all duration-500' onClick={
        (e) => handleAddMarkers(
            e,
            setMarkers,
            setMarkersToDisplay,
            setMarkersNextId,
            markersNextId,
            selectedImage,
            imageRef,
            dimensions,
            showMarkers,
        )
    }>
        {markers.map(({ id, x_, y_ }: { id: number, x_: number, y_: number }) => (
            <div
                key={id}
                style={{
                    position: 'absolute',
                    left: `${x_}px`,
                    top: `${y_}px`,
                    width: '20px',
                    height: '20px',
                    borderRadius: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={(e) => handlerRemoveMarkers(id, e, setMarkers, setMarkersToDisplay, setBgRemovedSegmentedImage, markers, setShowMarkers)}
                className="segment cursor-pointer bg-green-500 justify-center items-center hover:bg-red-500 hover:text-white"
            >
                +
            </div>
        ))}
    </div>
);
