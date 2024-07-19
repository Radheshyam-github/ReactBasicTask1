
import React, { useState } from 'react';
const DynimacallyAddChildComponents = () => {
   
    const [components, setComponents] = useState([]);

    const addComponent = () => {
        setComponents([...components, 
        <DynamicComponent key={components.length} />
    ]);
    };
    return (
        <div className=' text-center shadow-lg first-point mt-4'>
           <h5 className=''> 6. Dynamically add child Components</h5>
            <div className='py-3'>
            <button type="button" class="show-hide-btn"  onClick={addComponent}>Add</button>
                
                <div className=''>
                    {
                    components 
                    } 
                </div>
            </div>
        </div>



    );
}
export default DynimacallyAddChildComponents;

const DynamicComponent = () =>{
   return (
<div className=''>
Dynamic Component Loaded 
</div>
   );
}
 