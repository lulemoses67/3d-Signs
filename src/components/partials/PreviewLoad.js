import { useState } from "react";

const Preloader = () => {
    const [isOpen, setIsOpen] = useState(true);
    setTimeout(()=> setIsOpen(false),3000);
    return (
        <>
        {isOpen && <div className='bg-light test-primary' id='preLoader'>
            <div className='content bg-dark text-white text-center'>
                <p>3D Signs</p>
            </div>
        </div>}
        </>
    );
}

export default Preloader;