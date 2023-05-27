import React from 'react'
import { useState, useEffect } from 'react';


function MouseTracker() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        console.log("moving");
        setPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        console.log("ddddd");
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            Mouse position: ({position.x}, {position.y})
        </div>
    )
}

export default MouseTracker