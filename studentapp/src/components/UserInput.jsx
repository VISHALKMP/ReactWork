import React, { useRef } from 'react';

function UserInput({ addRecord }) {
  const rollRef = useRef(null);
  const nameRef = useRef(null);
  const genderRef = useRef(null);
  const branchRef = useRef(null);
  const branchList = ["IT", "CS", "Mech", "CV"];

  const handleAddRecord = () => {
    const roll = rollRef.current.value;
    const name = nameRef.current.value;
    const gender = genderRef.current.value;
    const branch = branchRef.current.value;
    if (roll && name && gender !== "0" && branch !== "0") {
      const newRecord = { roll, name, branch, gender };
      console.log("New Record:", newRecord);
      addRecord(newRecord);
      rollRef.current.value = "";
      nameRef.current.value = "";
      genderRef.current.value = "0";
      branchRef.current.value = "0";
    } else {
      alert("Please fill in all the fields.");
    }
  };
  return (
    <>
      <div className="container my-3">
        <div className="row my-3">
          <div className="col-md-6">
            <input
              ref={rollRef}
              className="form-control"
              type="text"
              placeholder="Enter your Roll No"
            />
          </div>
          <div className="col-md-6">
            <input
              ref={nameRef}
              className="form-control"
              type="text"
              placeholder="Enter your Name"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <select ref={genderRef} className="form-control" name="Gender">
              <option value="0">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <select ref={branchRef} className="form-control" name="branch">
              <option value="0">Select branch</option>
              {branchList.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <button onClick={handleAddRecord} className="btn btn-success">
          ADD
        </button>
      </div>
    </>
  );
}
export default UserInput;