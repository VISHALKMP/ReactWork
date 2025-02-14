import React, { useState } from 'react';

function Display({ dataList }) {
    const [genderFilter, setGenderFilter] = useState("All");
    const [branchFilter, setBranchFilter] = useState("All");

    const branches = ["All", ...new Set(dataList.map(student => student.branch))];

    const filteredData = dataList.filter((data) => {
    const genderMatch = genderFilter === "All" || data.gender === genderFilter;
    const branchMatch = branchFilter === "All" || data.branch === branchFilter;
    return genderMatch && branchMatch;
});

return (
    <><div>
        <div className="d-flex justify-content-center my-3">
            <div className="form-check form-check-inline">
                <input
                    onClick={() => setGenderFilter("Male")}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male" />
                <label htmlFor="male" className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    onClick={() => setGenderFilter("Female")}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female" />
                <label htmlFor="female" className="form-check-label">Female</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    onClick={() => setGenderFilter("All")}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="all" />
                <label htmlFor="all" className="form-check-label">All</label>
            </div>
        </div>

   
        ;
        
    </div><div className="table-responsive">
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
                    {filteredData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.roll}</td>
                            <td>{data.name}</td>
                            <td>{data.branch}</td>
                            <td>{data.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div></>

);
}

export default Display;