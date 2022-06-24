export const EditAnimation = {
    rotate: [0, -2, 0, 2, 0],
    translateX: [0, -0.2, 0, 0.2, 0],
    transition: {
        duration: 0.25,
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
        repeatDelay: 0
    }
}

export const IdleAnimation = {
    scale: 1,
    translateX: 0,
    rotate: 0
}
