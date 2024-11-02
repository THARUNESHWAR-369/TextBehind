

import { addTextSet, handleColorChange, handleDeleteTextSet, handleDuplicateTextSet, handleFontFamilyChange, handleFontWeightChange, handleLetterSpacingChange, handleOpacityChange, handleOutlineColorChange, handleOutlineSizeChange, handleRotateChange, handleSizeChange, handleTextChange, handleXChange, handleYChange } from '@/lib/Controls'
import { fontsStyleList, fontWeightList } from '@/lib/FontData'
import { MotionProps } from '@/lib/MotionProps'
import { TextSetItem } from '@/lib/types/types'
import { Button } from '@nextui-org/button'
import { Accordion, AccordionItem, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { ChromePicker } from 'react-color';

interface TextControlsProps {
    textSets: TextSetItem[];
    setTextSets: React.Dispatch<React.SetStateAction<TextSetItem[]>>;
    nextId: number;
    setNextId: React.Dispatch<React.SetStateAction<number>>;
    handleSaveImage: () => void;
}

function TextControls({ textSets, setTextSets, nextId, setNextId, handleSaveImage }: TextControlsProps) {
    return (
        <div className="text-controls flex flex-col items-center w-[300px]">
            <Button
                onClick={handleSaveImage}
                startContent={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#006fee"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>}
                color="primary" variant="bordered" className="rounded-full text-primary w-full"
            >Save Image</Button>
            <Button startContent={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>}
                variant="flat" color="success"
                onClick={() => addTextSet(setTextSets, nextId, setNextId)}
                className="flex p-2 m-2 rounded-full w-full px-10 gap-3 text-white">
                Add New Text Set
            </Button>

            <Accordion variant="splitted" isCompact className="mt-4 "
                motionProps={MotionProps}>
                {textSets.map(({ id, text_, fontFamily_, textColor_, xPosition_, yPosition_, textSize_, textRotate_, textOpacity_, letterSpacing_, fontWeight_, outlineSize_, outlineColor_ }) =>
                (

                    <AccordionItem key={id} aria-label={text_} title={text_} className="mt-1 bg-white/10 backdrop-blur-[10px]">
                        <div className="flex flex-col w-full h-full ">

                            <div className="my-1">
                                <Input
                                    key="primary"
                                    type="text"
                                    color="primary"
                                    label="EditText"
                                    placeholder="Your Text"
                                    defaultValue={text_}
                                    onChange={(e) => handleTextChange(id, e.target.value, setTextSets)}
                                    className="w-full max-w-[300px]"
                                />
                            </div>

                            <Accordion style={{ padding: '0' }} variant="splitted" isCompact className="my-2 w-full px-0">
                                <AccordionItem key='1' title='Text Appearance' className="bg-white/10 backdrop-blur-[10px]">
                                    <div className="flex my-2 gap-2 items-center">
                                        <div className="w-ful">
                                            <Dropdown className="">
                                                <DropdownTrigger>
                                                    <Button
                                                        color={'primary'}
                                                        variant={'flat'}
                                                        className="capitalize"

                                                    >
                                                        {fontFamily_ ? fontFamily_ : 'Choose FontFamily'}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Dropdown Variants"
                                                    color={'primary'}
                                                    variant={'flat'}
                                                    className="max-h-[300px] overflow-y-auto overflow-x-hidden"
                                                >
                                                    {fontsStyleList.map((_fontStyle_, index) => (
                                                        <DropdownItem onClick={() => handleFontFamilyChange(id, _fontStyle_, setTextSets)} key={index}>{_fontStyle_}</DropdownItem>
                                                    ))}
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className="w-full">
                                            <Dropdown className="">
                                                <DropdownTrigger>
                                                    <Button
                                                        color={'primary'}
                                                        variant={'flat'}
                                                        className="capitalize"

                                                    >
                                                        {fontWeight_ ? fontWeight_ : 'Font Weight'}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Dropdown Variants"
                                                    color={'primary'}
                                                    variant={'flat'}
                                                    className="max-h-[300px] overflow-y-auto overflow-x-hidden"
                                                >
                                                    {fontWeightList.map((_fontWeight_, index) => (
                                                        <DropdownItem onClick={() => handleFontWeightChange(id, _fontWeight_, setTextSets)} key={index}>{_fontWeight_}</DropdownItem>
                                                    ))}
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>

                                    </div>
                                    <div className="w-full my-2">
                                        <Input
                                            key="primary"
                                            type="range"
                                            min={'5'}
                                            max={'500'}
                                            color="primary"
                                            label={`Text Size: ${textSize_}`}
                                            placeholder={`Text size: ${textSize_}`}
                                            defaultValue={String(textSize_)}
                                            className="w-full"
                                            onChange={(e) => handleSizeChange(id, Number(e.target.value), setTextSets)}
                                        />
                                    </div>
                                    <div className="w-full my-2">
                                        <Input
                                            key="primary"
                                            type="range"
                                            min={'0'}
                                            max={'1'}
                                            step={'0.05'}
                                            color="primary"
                                            label={`Text Opacity: ${textOpacity_}`}
                                            placeholder={`Text Opacity: ${textOpacity_}`}
                                            defaultValue={String(textOpacity_)}
                                            className="w-full"
                                            onChange={(e) => handleOpacityChange(id, Number(e.target.value), setTextSets)}
                                        />
                                    </div>
                                    <div className="w-full my-2">
                                        <Input
                                            key="primary"
                                            type="range"
                                            min={'0'}
                                            max={'50'}
                                            color="primary"
                                            label={`Outline Size: ${outlineSize_}`} // New outline size input
                                            placeholder={`Outline Size: ${outlineSize_}`}
                                            defaultValue={String(outlineSize_)}
                                            className="w-full"
                                            onChange={(e) => handleOutlineSizeChange(id, Number(e.target.value), setTextSets)}
                                        />
                                    </div>
                                    <div className="flex my-2 gap-2 items-center">
                                        <StyledColorPicker outlineColor_={outlineColor_} textColor_={textColor_}
                                            handleOutlineColorChange={handleOutlineColorChange}
                                            handleColorChange={handleColorChange}
                                            id={id} setTextSets={setTextSets} />
                                    </div>

                                    <div className="w-full my-2">
                                        <Input
                                            key="primary"
                                            type="range"
                                            min={'-10'}
                                            max={'10'}
                                            step={'0.1'}
                                            color="primary"
                                            label={`Letter Spacing |A|: ${letterSpacing_}`}
                                            placeholder={`Letter Spacing: ${letterSpacing_}`}
                                            defaultValue={String(letterSpacing_)}
                                            className="w-full"
                                            onChange={(e) => handleLetterSpacingChange(id,
                                                Number(e.target.value), setTextSets)}
                                        />
                                    </div>
                                </AccordionItem>
                                <AccordionItem key='2' title='Text Transformation' className="bg-white/10 backdrop-blur-[10px]" >

                                    <div className="my-2">
                                        <Input
                                            key="primary"
                                            type="range"
                                            min={'-500'}
                                            max={'500'}
                                            color="primary"
                                            label={`X Position: ${xPosition_}`}
                                            placeholder={`X Position: ${xPosition_}`}
                                            defaultValue={String(xPosition_)}
                                            className="w-full "
                                            onChange={(e) => handleXChange(id,
                                                Number(e.target.value), setTextSets)}
                                        />
                                    </div>
                                    <div className="my-2">
                                        <Input
                                            key="primary"
                                            type="range"
                                            min={'-500'}
                                            max={'500'}
                                            color="primary"
                                            label={`Y Position: ${yPosition_}`}
                                            placeholder={`Y Position: ${yPosition_}`}
                                            defaultValue={String(yPosition_)}
                                            className="w-full "
                                            onChange={(e) => handleYChange(id,
                                                Number(e.target.value), setTextSets)}
                                        />
                                    </div>
                                    <div className="w-full my-2">
                                        <Input
                                            key="primary"
                                            type="range"
                                            min={'-360'}
                                            max={'360'}
                                            color="primary"
                                            label={`Text Rotate: ${textRotate_}deg`}
                                            placeholder={`Text Rotate: ${textRotate_}`}
                                            defaultValue={String(textRotate_)}
                                            className="w-full"
                                            onChange={(e) => handleRotateChange(id,
                                                Number(e.target.value), setTextSets)}
                                        />
                                    </div>
                                </AccordionItem>
                            </Accordion>


                            <div className="gap-1 flex flex-row w-full my-1">
                                <Button color="danger" variant="solid" className="w-full" onClick={() => handleDeleteTextSet(id, setTextSets)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
                                        <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                                    </svg>
                                    Delete
                                </Button>
                                <Button color="default" variant="faded" className="w-full flex flex-row" onClick={() => handleDuplicateTextSet(id, setTextSets, textSets, setNextId, nextId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
                                        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                                    </svg>
                                    Duplicate
                                </Button>
                            </div>

                        </div>

                    </AccordionItem>

                ))}
            </Accordion>
        </div>
    )
}

export default TextControls


const StyledColorPicker = ({ outlineColor_, textColor_, handleOutlineColorChange, handleColorChange, id, setTextSets }: {
    outlineColor_: string;
    textColor_: string;
    handleOutlineColorChange: any;
    handleColorChange: any;
    id: any;
    setTextSets: React.Dispatch<React.SetStateAction<any>>;
}) => {
    const [activeTab, setActiveTab] = useState('outline');

    return (
        <div className="w-full flex flex-col items-center overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex w-full max-w-[300px] justify-around bg-[#001731] rounded-t-lg p-1 text-sm">
                <Button
                    onClick={() => setActiveTab('outline')}
                    className={`flex items-center justify-center w-1/2 p-2 rounded-lg ${activeTab === 'outline' ? 'bg-[#006fee]/50 shadow-md' : 'bg-transparent'}`}
                >
                    <span className={`${activeTab === 'outline' ? 'text-white' : 'text-gray-400'}`} >Outline Color</span>
                </Button>
                <Button
                    onClick={() => setActiveTab('text')}
                    className={`flex items-center justify-center w-1/2 p-2 rounded-lg ${activeTab === 'text' ? 'bg-[#006fee]/50 shadow-md' : 'bg-transparent'}`}
                >
                    <span className={`${activeTab === 'text' ? 'text-white' : 'text-gray-400'}`} >Text Color</span>
                </Button>
            </div>

            {/* Color Picker Content */}
            <div className="w-full max-w-[300px] bg-[#001731] rounded-b-lg shadow-md p-4">
                {activeTab === 'outline' && (
                    <div>
                        <ChromePicker
                            color={outlineColor_}
                            onChange={(e: { hex: string }) => handleOutlineColorChange(id, e.hex, setTextSets)}
                            className="w-fit bg-[#001731]"
                        />
                    </div>
                )}
                {activeTab === 'text' && (
                    <div>
                        <ChromePicker
                            color={textColor_}
                            onChange={(e: { hex: string }) => handleColorChange(id, e.hex, setTextSets)}
                            className="w-fit bg-[#001731]"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
