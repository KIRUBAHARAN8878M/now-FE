
import React, { useState } from "react";

const Partition = () => {
  const [nums, setNums] = useState([]);
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setNums(event.target.value.split(",").map(Number));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch('http://localhost:5000/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nums })
    });
    const data = await res.json();
    console.log(data)
    setResult(data.result);
  };

  return (
   <div className="container">
    <div className="row">
    <div className="col d-flex justify-content-center ">
  
    <div className="card  p-5 m-5 ">
    <div className=" pb-5 text-center fw-bold fs-4">IPPO PAY TASK</div> 
      <form onSubmit={handleSubmit}>
        <div class=" input-group  mb-3 ">
          <input
            type="text"
            class="form-control "
            placeholder="enter array value with ',' "
            aria-label="enterarrayvalue"
            onChange={handleInputChange}
            aria-describedby="button-addon2"
          />
          <button class="btn btn-outline-info" type="submit" id="button-addon2">
            submit
          </button>
        </div>
      </form>
      {result !== null && (
        <p className="text-center">The minimum possible absolute difference is <span className=" fw-bold">{result}</span>.</p>
      )}
    </div>
    </div>
    </div>
   </div>
  );
};

export default Partition;
