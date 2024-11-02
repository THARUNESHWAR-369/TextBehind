import React from 'react'

function BgElement() {
    return (
        <>
            <div className="fixed top-0 w-full z-[-1] min-h-full left-0 overflow-hidden">
                <div className="w-[500px] h-[500px] bg-blue-500/[0.15] rounded-full absolute top-[20%]"></div>
                <div className="w-[500px] h-[500px] bg-blue-900/[0.5] rounded-full absolute top-[5%]"></div>

                <div className="w-[500px] h-[500px] bg-purple-500/[0.2] rounded-full absolute top-[10%] right-[10%]"></div>
                <div className="w-[500px] h-[500px] bg-blue-900/[0.5] rounded-full absolute top-[40%] right-4"></div>
            </div>
            <div className="fixed w-full top-0 h-full backdrop-blur-[7em] z-[0]"></div>
        </>
    )
}

export default BgElement
