import React from 'react'
import LogoImage from '../../atom/dashboard/navbar/logoImage'
import LogoText from '../../atom/dashboard/navbar/logoText'


const logoContainer = ({ logoName, imageUrl }: { logoName: string; imageUrl: string }) => {
    return (
        <div className="logo-container">
            <div className='inline-flex items-center gap-2'>

            <div className='flex items-center gap-2'>
                <LogoImage imageUrl={imageUrl} />
                
            </div> 

            <div className='flex items-center gap-2 hidden md:flex'>
                <LogoText logoName={logoName} />
            </div>
                
                
                

            </div>
        </div>
    );
};


export default logoContainer