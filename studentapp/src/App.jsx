// import { Component } from "react";
// import Header from "./components/Header";
// import Data from "./components/Data";

// class App extends Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     studentList : Data,
  //     branchList : ["CS","CV","Mech","IT"],
  //     defaultBranch : "All",
  //     defaultgender : "All",
  //     buttonDecoration:{
  //      width: "100px"
  //     },
  //     radioDecoration:{
  //      width: "70px"
  //     }
  //   }
  // }
  // addStudent = ()=>{
  //   let roll = this.roll.value;
  //   let name = this.name.value;
  //   let gender = this.gender.value;
  //   let branch = this.branch.value;

  //   this.setState({studentList:[...this.state.studentList,{roll,name,gender,branch}]})
    
  // }

  // remove = (rollNumber)=>{
  //       if(window.confirm("Do you want to delete")){
  //       let index = this.state.studentList.findIndex((student)=>{return student.roll == rollNumber});
  //       this.state.studentList.splice(index,1);
  //       this.setState({studentList:[...this.state.studentList]})
  //       }
  // }
  // render(){
  //   return<>
  //   <Header/>
  //   <div className="container mt-3">
  //     <div className="row">
  //       <div className="col-md-6">
  //         <input ref={(obj)=>this.roll=obj} type="text" className="form-control" placeholder="Enter Student's roll number"/>
  //       </div>
  //       <div className="col-md-6">
  //         <input ref={(obj)=>this.name=obj} type="text" className="form-control" placeholder="Enter Student's name"/>
  //       </div>
  //     </div>
  //     <div className="row mt-2">
  //       <div className="col-md-6">
          
  //       <select ref={(obj)=>this.gender = obj} id="gender" className="form-control">
  //             <option value="0">Select gender</option>
  //             <option value="Female">Female</option>
  //             <option value="Male">Male</option>
  //           </select>
  //       </div>
  //       <div className="col-md-6">
  //         <select ref={(obj)=>this.branch = obj} name="branch" id="" className="form-control">
  //               <option value="0">Select Branch</option>
  //               {this.state.branchList.map((branch,index)=>{return <option value={branch} key={index}>{branch}</option>})}
  //         </select>
  //       </div>
  //     </div>
  //     <div className="row mt-2" >
  //       <div className="col-md-6">
  //         <button onClick={this.addStudent} className="btn btn-success">Add</button>
          
  //         <input className="bg-dark ml-5" id="male" type="radio" name="gender" value="Male" onClick={()=>{this.setState({defaultgender:"Male"})}}/>
  //         <label htmlFor="male" style={this.state.radioDecoration} className="btn btn-outline-success ml-2">Male</label>
          
  //         <input className="bg-dark ml-5" id="female" type="radio" name="gender" value="Female" onClick={()=>{this.setState({defaultgender:"female"})}}/>
  //         <label htmlFor="female"style={this.state.radioDecoration} className="btn btn-outline-success ml-2">Female</label>
          
  //         <input className="bg-dark ml-5" id="all" type="radio" name="gender" value="All" onClick={()=>{this.setState({defaultgender:"All"})}}/>
  //         <label htmlFor="all"style={this.state.radioDecoration} className="btn btn-outline-success ml-2">All</label>
        
  //       </div>
  //       <div className="col-md-6">
  //         <button onClick={()=>{this.setState({defaultBranch:"CS"})}} className="btn btn-outline-success" style={this.state.buttonDecoration}>CS({this.state.studentList.filter((student)=>{return student.branch=="CS"}).length})</button>
  //         <button onClick={()=>{this.setState({defaultBranch:"IT"})}} className="btn btn-outline-info ml-2" style={this.state.buttonDecoration}>IT({this.state.studentList.filter((student)=>{return student.branch=="IT"}).length})</button>
  //         <button onClick={()=>{this.setState({defaultBranch:"Mech"})}} className="btn btn-outline-danger ml-2" style={this.state.buttonDecoration}>Mech({this.state.studentList.filter((student)=>{return student.branch=="Mech"}).length})</button>
  //         <button onClick={()=>{this.setState({defaultBranch:"CV"})}} className="btn btn-outline-dark ml-2" style={this.state.buttonDecoration}>CV({this.state.studentList.filter((student)=>{return student.branch=="CV"}).length})</button>
  //         <button onClick={()=>{this.setState({defaultBranch:"All"})}} className="btn btn-outline-secondary ml-2" style={this.state.buttonDecoration}>All({this.state.studentList.length})</button>
  //       </div>
  //     </div>
  //     <div className="container mt-3">
  //       <table className="table">
  //         <thead>
  //           <tr>
  //             <th>Roll Number</th>
  //             <th>Name</th>
  //             <th>Gender</th>
  //             <th>Branch</th>
  //             <th>Remove</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {this.state.studentList.filter((student)=>{return student.branch==this.state.defaultBranch || this.state.defaultBranch == "All"}).map((student,index)=>{return <tr key={index}>

  //             <td>{student.roll}</td>
  //             <td>{student.name}</td>
  //             <td>{student.gender}</td>
  //             <td>{student.branch}</td>
  //             <td>
  //             <button onClick={()=>{this.remove(student.roll)}} className="btn btn-outline-danger">Remove</button>
  //             </td>
  //           </tr>})}
  //         </tbody>
  //       </table>
  //     </div>

  //   </div>
  //   </>
  // }
// }

// function App(){
//   return <>


//    <div className="bg-danger d-flex justify-conetent-center algin-items-center " style={{height:"60px"}}>
//     <label className="text-white" style={{fontWeight:"bold", fontSize:"30px"}}>
//     Sherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr </label>
//    </div>
// </>
// }

import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Display from './components/Display';
import initialData from './components/Data';
function App() {
  // Shared state for student data
  const [dataList, setDataList] = useState(initialData);
  const addRecord = (newRecord) => {
    setDataList([...dataList, newRecord]);
  };
  return (
    <>
      <Header />
      <div className="container my-4">
        <UserInput addRecord={addRecord} />
        <Display dataList={dataList} />
      </div>
    </>
  );
}
// export default App;
export default App
