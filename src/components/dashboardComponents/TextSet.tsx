import { TextSetItem } from '@/lib/types/types'
import React from 'react'

function TextSet({ textSets }: { textSets: TextSetItem[]}) {
    return (
        <>

            {
                textSets.map((
                    { id, text_, fontFamily_, textColor_, xPosition_, yPosition_, textSize_, textRotate_, textOpacity_, letterSpacing_, fontWeight_, outlineSize_, outlineColor_ }
                ) => (
                    <div key={id} style={{
                        position: 'absolute',
                        left: xPosition_,
                        top: yPosition_,
                        color: textColor_,
                        fontSize: `${textSize_}px`,
                        fontFamily: fontFamily_,
                        fontWeight: fontWeight_,
                        // lineHeight: 'normal',
                        letterSpacing: `${letterSpacing_}px`,
                        rotate: `${textRotate_}deg`,
                        opacity: textOpacity_,
                        WebkitTextStroke: `${outlineSize_}px ${outlineColor_}`
                    }}
                        className="z-[11]">
                        {text_}
                    </div>
                ))
            }

        </>

    )
}

export default TextSet
