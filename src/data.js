export default {
    tweenOptions: [
        {
            name: "Scale In-Out",
            config: {
                scale: 1.2,
                repeat: 2,
                ease: "Quad.easeOut",
                duration: 200,
                yoyo: true
            }
        },
        {
            name: "Rotate",
            config: {
                angle: { from: -8, to: 8 },
                repeat: -1,
                ease: "Quad.easeInOut",
                duration: 300,
                yoyo: true
            }
        },
        {
            name: "Pulse",
            config: {
                scale: 1.1,
                repeat: -1,
                ease: "Quad.easeInOut",
                duration: 500,
                yoyo: true
            }
        },
        {
            name: "Up-Down",
            config: {
                y: "-=25",
                repeat: 2,
                ease: "Sine.easeOut",
                duration: 200,
                yoyo: true
            }
        },
        {
            name: "Bounce Down",
            config: {
                alpha: {
                    from: 0,
                    to: 1,
                    duration: 100
                },
                y: {
                    from: "-=50", to: "+=50",
                    ease: "Bounce.easeOut"
                },
                duration: 700
            }
        },
        {
            name: "Flash",
            config: {
                alpha: { from: 0, to: 1 },
                scale: 1.1,
                ease: "Sine.easeInOut",
                duration: 200, repeat: 3, yoyo: true, hold: 250, repeatDelay: 100
            }
        }
    ],
    textStyles: [
        {
            name: "Basic Black",
            style: {
                color: "#000",
                fontSize: 64,
                fontFamily: "Arial"
            }
        },
        {
            name: "With Stroke",
            style: {
                color: "#000",
                fontSize: 64,
                fontFamily: "Arial",
                stroke: "#960",
                strokeThickness: 8
            }
        },
        {
            name: "With Shadow",
            style: {
                color: "#000",
                fontSize: 64,
                fontFamily: "Arial",
                padding: 15,
                shadow: {
                    blur: 5,
                    color: '#111',
                    fill: true,
                    // stroke: true,
                    offsetX: 2,
                    offsetY: 2,
                }
            }
        },
        {
            name: "Stroke Shadow",
            style: {
                color: "#000",
                fontSize: 64,
                fontFamily: "Arial",
                padding: 15,
                stroke: "#960",
                strokeThickness: 4,
                shadow: {
                    blur: 5,
                    color: '#111',
                    // fill: true,
                    // offsetX: 5,
                    // offsetY: 5,
                    stroke: true,
                    offsetX: 2,
                    offsetY: 2,
                }
            }
        },
        {
            name: "Stroke & Fill Shadow",
            style: {
                color: "#000",
                fontSize: 64,
                fontFamily: "Arial",
                padding: 15,
                stroke: "#960",
                strokeThickness: 10,
                shadow: {
                    blur: 5,
                    color: '#fff',
                    fill: true,
                    stroke: true,
                    offsetX: 2,
                    offsetY: 2,
                }
            }
        },
    ]
}
