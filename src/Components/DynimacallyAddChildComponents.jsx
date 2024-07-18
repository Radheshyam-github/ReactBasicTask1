
import React, { useState } from 'react';
const DynimacallyAddChildComponents = () => {
    const [value, setValue] = useState();
    return (
        <div className=' first-point shadow-lg mt-4'>
            <h3 className='text-center'>Point Seven</h3>
            <h5 className='text-center'>7. Dunimcally Add Child Components</h5>
            <div className=' '>
                <div className=' text-center'>
                <button type="button" class="show-hide-btn" >Add Child</button>
                </div>
            </div>
           {/* {
            value.map(data=>
                <li>
                    
                </li>
            )
           } */}
        </div>
    );
}
export default DynimacallyAddChildComponents;
