import React, { useState } from "react";

const TopBanner = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
      setIsOpen(false);
    };

    return (
        <>
             {isOpen && (
                <div className='top-banner'> 
                    <a href='#'>FREE DELIVERY* AND FREE RETURNS</a> 
                    <button className="close-button" onClick={handleClose}>
                        <span className="close">&times;</span>
                    </button> 
                </div>
             )}
        </>
    
    );
}

export default TopBanner;