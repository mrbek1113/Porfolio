import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationPage = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed top-[80px] text-white font-serif flex items-center justify-evenly w-full ">
            <button onClick={() => navigate('/')} className="text-[16px] md:text-[25px] hover:underline">Home</button>
            <button onClick={() => navigate('/aboutPage')} className="text-[16px] md:text-[25px] hover:underline">About me</button>
            <button onClick={() => navigate('/projects')} className="text-[16px] md:text-[25px] hover:underline">My Projects</button>
        </div>
    );
}

export default NavigationPage;
