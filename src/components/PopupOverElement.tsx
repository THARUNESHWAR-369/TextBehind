import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import React from "react";

export default function PopupOverElement({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {


    return (
        <div className="flex flex-wrap gap-4">
            <Popover
                isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}
                key={"transparent"}
                showArrow
                offset={10}
                placement="bottom"
                backdrop={"transparent"}
            >
                <PopoverTrigger>
                    <button className="italic bg-yellow-400/10 backdrop-blur-[12px] rounded-full w-7 h-7">
                        i
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-[240px]">
                    <div>
                        <p>Select an Object to Place Text Behind</p>
                    </div>
                </PopoverContent>
            </Popover>

        </div>
    );
}