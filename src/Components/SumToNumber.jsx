import React, { useState } from "react";
const SumToNumber = () => {
  const [addnumber, setAddNumber] = useState(0);
  const [addnumber2, setAddNumber2] = useState(0);
  const [totalnumber, setTotalNumber] = useState(addnumber + addnumber2)

  const addtotalnumber = () => {
    setTotalNumber(addnumber + addnumber2)
  }
  return (
    <div className=" first-point  shadow-lg mt-3">
      <div className="py-4 px-4">
        <h3 className=" text-center">Point Six</h3>
        <h5 className=" text-center">6. Sum of Two Numbers </h5>
        <h5 className="text-center">Type A number</h5>
        <div className=" d-flex gap-3">
          <div className="">
            <form class="mx-4 w-75">
              <input class="form-control  me-2" type="search" placeholder="here number...."

                id='search-input' aria-label="Search" value={addnumber} onChange={e => setAddNumber(+e.target.value)}  />
            </form>
            
          </div>
          <div>
          <form class="mx-4 w-75">
                        <input class="form-control  me-2" type="search" placeholder="here search..."

                            id='search-input' aria-label="Search" value={addnumber2} onChange={e => setAddNumber2(+e.target.value)} />
                    </form>
            
          </div>
          <button type="button" class="show-hide-btn" onClick={addtotalnumber}>Add</button>
         
        </div>
        <p className=" text-center fw-bold">Result :{totalnumber}</p>
      </div>
    </div>
  );
};

export default SumToNumber;
