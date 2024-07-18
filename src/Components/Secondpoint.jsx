import React from 'react';

const Secondpoint = () => {
    const data=[
        {
            Name:"Mahesh Kumar",
            Email:"mahesh@gmail.com",
            Age:"70"
        },
         {
            Name:"Raju Kumar",
            Email:"raju@gmail.com",
            Age:"50"
        },
        {
            Name:"Mahi ",
            Email:"mahi@gmail.com",
            Age:"48"
        },
        {
            Name:"Manisha Kumari",
            Email:"manisha@gmail.com",
            Age:"52"
        }, {
            Name:"mahipal jaat",
            Email:"mahipal@gmail.com",
            Age:"70"
        }
    ]
    return (
        <div className=' mt-5 text-center'>
            <h2>Point two</h2>
            <div className=''>
                <h4>2. Array of Records</h4>
            </div>
            <div className=''>
                <ul className='record-list'>
                    {
                        data.map((item,index) =>{
                            return (
                                <li className='record-item  shadow-lg mt-2'> 
                            <div className='py-3'>
                            <h5 className=''> Name :{item.Name}</h5>
                            <h5 className=''> Email :{item.Email}</h5>
                            <h5 className=''> Age :{item.Age}</h5>
                            </div>
                           
                        </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        </div>
    );
}

export default Secondpoint;
