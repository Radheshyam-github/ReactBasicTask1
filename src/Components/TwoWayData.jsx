import React, { useState } from 'react';
const TwoWayData = () => {
    const [Newitem, setNewItem] = useState('')
    const handlenNewInputChange = (event) => {
        // console.log(event);

        setNewItem(event.target.value);
    }
    return (
        <div className='first-point shadow-lg'>
            <div className='px-4 py-4' >
                <h2 className=' text-center'>Point Five </h2>
                <h1 className=' text-center'>5. 2 Way data binding unsing textbox </h1>
                <div className=''>
                    <form class="mx-4 w-75">
                        <input class="form-control  me-2" type="search" placeholder="here search..."

                            id='search-input' aria-label="Search" value={Newitem} onChange={handlenNewInputChange} />
                    </form>

                    <p className='text-center text-dark fw-bold'> Value :{Newitem}</p>
                </div>
            </div>
        </div>
    );
}

export default TwoWayData;
