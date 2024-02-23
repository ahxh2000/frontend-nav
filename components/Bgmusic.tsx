'use client'
import { useEffect } from 'react';

const BackgroundMusic = () => {
    useEffect(() => {
        const audio = new Audio('/money.mp3');
        audio.play();
    }, []);

    return (
        <>
        </>
    );
};

export default BackgroundMusic;