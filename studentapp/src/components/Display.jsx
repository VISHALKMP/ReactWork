// import React, { useState } from "react";

// function Display({ dataList }) {
//                                                            // State to manage gender and branch filters
//   const [genderFilter, setGenderFilter] = useState("All");
//   const [branchFilter, setBranchFilter] = useState("All");

//             // Get unique branches from dataList, including "All" option
//   const branches = ["All", ...new Set(dataList.map((student) => student.branch))];

//                                                           // Filter students based on selected gender and branch
//   const filteredStudents = dataList.filter((student) => {
//     const matchesGender = genderFilter === "All" || student.gender === genderFilter;
//     const matchesBranch = branchFilter === "All" || student.branch === branchFilter;
//     return matchesGender && matchesBranch;
//   });

//   return (
//     <>
  
//       <div className="d-flex justify-content-center my-3">
//         <div className="form-check form-check-inline">
//           <input
//             onClick={() => setGenderFilter("Male")}
//             className="form-check-input"
//             type="radio"
//             name="gender"
//             id="male"
//           />
//           <label htmlFor="male" className="form-check-label">Male</label>
//         </div>

//         <div className="form-check form-check-inline">
//           <input
//             onClick={() => setGenderFilter("Female")}
//             className="form-check-input"
//             type="radio"
//             name="gender"
//             id="female"
//           />
//           <label htmlFor="female" className="form-check-label">Female</label>
//         </div>

//         <div className="form-check form-check-inline">
//           <input
//             onClick={() => setGenderFilter("All")}
//             className="form-check-input"
//             type="radio"
//             name="gender"
//             id="all"
//             defaultChecked
//           />
//           <label htmlFor="all" className="form-check-label">All</label>
//         </div>
//       </div>

     
//       <div className="d-flex justify-content-center my-3">
//         <select
//           className="form-control w-25"
//           onChange={(e) => setBranchFilter(e.target.value)}
//         >
//           {branches.map((branch, index) => (
//             <option key={index} value={branch}>
//               {branch}
//             </option>
//           ))}
//         </select>
//       </div>

   
//       <div className="table-responsive">
//         <table className="table table-striped table-hover">
//           <thead className="table-dark">
//             <tr>
//               <th>Roll No.</th>
//               <th>Name</th>
//               <th>Branch</th>
//               <th>Gender</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredStudents.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.roll}</td>
//                 <td>{student.name}</td>
//                 <td>{student.branch}</td>
//                 <td>{student.gender}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Display;

import React, { useState } from "react";

function Display({ dataList }) {

  const [genderFilter, setGenderFilter] = useState("All");
  const [branchFilter, setBranchFilter] = useState("All");

  
  const branches = ["All", ...new Set(dataList.map((student) => student.branch))];


  const filteredStudents = dataList.filter((student) => {
    const matchesGender = genderFilter === "All" || student.gender === genderFilter;
    const matchesBranch = branchFilter === "All" || student.branch === branchFilter;
    return matchesGender && matchesBranch;
  });

  return (
    <>

      <div className="d-flex justify-content-center my-3">
        {["Male", "Female", "All"].map((gender) => (
          <button
            key={gender}
            className={`btn btn-${genderFilter === gender ? "primary" : "outline-primary"} mx-2`}
            onClick={() => setGenderFilter(gender)}
          >
            {gender}
          </button>
        ))}
      </div>

      {/* Branch Filter Buttons */}
      <div className="d-flex justify-content-center flex-wrap my-3">
        {branches.map((branch) => (
          <button
            key={branch}
            className={`btn btn-${branchFilter === branch ? "success" : "outline-success"} mx-2 my-1`}
            onClick={() => setBranchFilter(branch)}
          >
            {branch}
          </button>
        ))}
      </div>

      {/* Student Table */}
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Display;

