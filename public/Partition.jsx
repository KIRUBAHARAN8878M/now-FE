import React, { useState } from "react";

const Partition = () => {
  const [nums, setNums] = useState([]);
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setNums(event.target.value.split(",").map(Number));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    nums.sort((a, b) => a - b);
    let n = nums.length / 2;
    let minAbsDiff = Number.MAX_VALUE;

    for (let i = 0; i < n; i++) {
      let array1 = nums.slice(0, n);
      let array2 = nums.slice(n);
      let sum1 = array1.reduce((a, b) => a + b, 0);
      let sum2 = array2.reduce((a, b) => a + b, 0);
      let absDiff = Math.abs(sum1 - sum2);
      minAbsDiff = Math.min(minAbsDiff, absDiff);
      nums.push(nums.shift());
    }
    setResult(minAbsDiff);
  };

  return (
    <div className="card p-5 m-5">
      <form onSubmit={handleSubmit}>
        <div class=" input-group  mb-3">
          <input
            type="text"
            class="form-control"
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
        <p>The minimum possible absolute difference is {result}.</p>
      )}
    </div>
  );
};

export default Partition;
