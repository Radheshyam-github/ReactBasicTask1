import React, { useState } from 'react';

const Fourthpoint = () => {
    const [disabled, setDisabled] = useState(true)
    return (
        <div className=' shadow-lg first-point'>    
            <h3 className='text-center mt-2'>Point Four</h3>
            <h4 className='text-center'>4. Enable/Disable a button</h4>
            <div className='my-3 mx-4'>
                <button type="button" class="mt-3" disabled={disabled}> This a Button Disabled and Enable</button> <br />
                <button type="button" class="show-hide-btn mb-3" onClick={() => setDisabled(!disabled)} >{disabled==true?"Enable":"Disabled"}</button><br />
               
            </div>
        </div>
    );
}

export default Fourthpoint;
