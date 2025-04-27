"use client";

import React from 'react';
import { useEffect } from 'react';
import './CustomCursor.css'

const CustomCursor: React.FC = () => {

    const handleMouseMove = (e: MouseEvent) => {
        const cursor = document.querySelector('.custom-cursor') as HTMLElement;
        if (cursor) {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        }
    };

    useEffect(() => {
        window.document.addEventListener('mousemove', handleMouseMove);


        return () => {
            window.document.removeEventListener('mousemove', handleMouseMove);
        }

    }, []);


    return (
        <div className='custom-cursor'>
        </div>
    )
};

export default CustomCursor;