import React, { useRef } from "react";

function UserInput({ addRecord }) {
  // Creating references for input fields
  const rollNumberRef = useRef(null);
  const nameRef = useRef(null);
  const genderRef = useRef(null);
  const branchRef = useRef(null);

  // List of available branches
  const branches = ["IT", "CS", "Mech", "CV"];

  // Function to handle adding a new record
  const handleAddRecord = () => {
    // Get values from input fields
    const rollNumber = rollNumberRef.current.value.trim();
    const name = nameRef.current.value.trim();
    const gender = genderRef.current.value;
    const branch = branchRef.current.value;

    // Check if all fields are filled correctly
    if (rollNumber && name && gender !== "0" && branch !== "0") {
      // Create a new record object
      const newRecord = {
        rollNumber,
        name,
        gender,
        branch,
      };

      console.log("New Record:", newRecord); // Debugging output

      // Call the function to add the record
      addRecord(newRecord);

      // Clear input fields after submission
      rollNumberRef.current.value = "";
      nameRef.current.value = "";
      genderRef.current.value = "0"; // Reset dropdown
      branchRef.current.value = "0"; // Reset dropdown
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <>
      <div className="container my-3">
        {/* Input for Roll Number and Name */}
        <div className="row my-3">
          <div className="col-md-6">
            <input
              ref={rollNumberRef}
              className="form-control"
              type="text"
              placeholder="Enter Roll Number"
            />
          </div>
          <div className="col-md-6">
            <input
              ref={nameRef}
              className="form-control"
              type="text"
              placeholder="Enter Name"
            />
          </div>
        </div>

        {/* Dropdowns for Gender and Branch */}
        <div className="row my-3">
          <div className="col-md-6">
            <select ref={genderRef} className="form-control">
              <option value="0">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <select ref={branchRef} className="form-control">
              <option value="0">Select Branch</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-3 text-center">
        <button onClick={handleAddRecord} className="btn btn-success">
          Add Record
        </button>
      </div>
    </>
  );
}

export default UserInput;
