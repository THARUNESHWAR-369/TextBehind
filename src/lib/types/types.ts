
export interface TextSetItem {
    id: number; text_: string; fontFamily_: string;
    textColor_: string; xPosition_: number; yPosition_: number; textSize_: number,
    textRotate_: number, textOpacity_: number, letterSpacing_: number, fontWeight_: number,
    outlineSize_: number, outlineColor_: string
}

export interface MarkersInterface {
    id: number;
    x_: number;
    y_: number;
    flag_: number;
}