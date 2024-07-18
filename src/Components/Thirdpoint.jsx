import React, { useState } from 'react';

const Thirdpoint = () => {
    const [show , setShow]=useState(true);
    return (
        <div className=' shadow-lg first-point text-center mt-5'>
            <div className='py-3'>
                <h3>Point Third </h3>
                <div className=''>
                    <h3>3. show Hide Elements</h3>
                </div>
                <div className=''>
                  {
                    show &&  <h5>This is  Show and Hide Element</h5>
                  }
                </div>
                <button type="button" class="show-hide-btn" onClick={()=>setShow(!show)} >{show==true?"Hide":"Show"}</button>
            </div>
        </div>
    );
}

export default Thirdpoint;
