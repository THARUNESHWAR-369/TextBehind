
export const MotionProps = {
    variants: {
        enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
                height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                },
                opacity: {
                    easings: "ease",
                    duration: 1,
                },
            },
        },
        exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
                height: {
                    easings: "ease",
                    duration: 0.25,
                },
                opacity: {
                    easings: "ease",
                    duration: 0.3,
                },
            },
        },
    },
};