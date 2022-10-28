


import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
// import "./TextEditor.css";
import Editor from './TinyMce'
import axios from 'axios';

const Write = ()=>{

  return <div className="relative App my-[150px] ">
       <div className="container mx-auto p-2 bg-slate-100 opacity-100 rounded-lg">
      <Editor/>

    </div>
    </div>
}
export default Write;

// function Add() {
 
  // const [userInfo, setuserInfo] = useState({
  //   title: '',
  //   description: '',
  //   information: '',
  // });
  // const onChangeValue = (e) => {
  //   setuserInfo({
  //     ...userInfo,
  //     [e.target.name]:e.target.value
  //   });
  // } 
  // const ondescription = (value:any) => {
  //   setuserInfo({ ...userInfo,
  //     description:value
  //   });
  // } 
  // const oninformation = (value:any) => {
  //   setuserInfo({ ...userInfo,
  //     information:value
  //   });
  // } 
  // const [isError, setError] = useState(null);
  // const addDetails = async (event :any) => {
  //   try {
  //     event.preventDefault();
  //     event.persist();
  //     if(userInfo.description.length < 50){
  //       setError('Required, Add description minimum length 50 characters');
  //       return;
  //     }
  //     axios.post(`http://localhost:8080/addArticle`, {
  //       title: userInfo.title,
  //       description: userInfo.description,
  //       information: userInfo.information,
  //     })
  //     .then(res => {
  //       // if(res.data.success === true){
  //       //   history.push('/');
  //       // }
  //       console.log("Updated post")
  //     })
  //   } catch (error) { throw error;}    
  // } 

// return ( 
// <>

//   <div className="relative App my-[150px] ">
//     <div className="container mx-auto p-5 bg-slate-100 opacity-100 rounded-lg">
//       <div className="row"> 
//         <form onSubmit={addDetails} className="update__forms">
//           <h3 className="myaccount-content"> Add  </h3>
//           <div className="form-row">
//             <div className="form-group col-md-12">
//               <label className="font-weight-bold"> Title <span className="required"> * </span> </label>
//               <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />
//             </div>
//             <div className="clearfix"></div>
//             <div className="form-group col-md-12 editor">
//               <label className="font-weight-bold"> Description <span className="required"> * </span> </label>
//             <EditorToolbar toolbarId={'t1'}/>
//             <ReactQuill
//               theme="snow"
//               value={userInfo.description}
//               onChange={ondescription}
//               placeholder={"Write something awesome..."}
//               modules={modules('t1')}
//               formats={formats}
//             />
//             </div>
//             <br />
//             <div className="form-group col-md-12 editor">
//               <label className="font-weight-bold"> Additional Information  </label>
//             <EditorToolbar toolbarId={'t2'}/>
//             <ReactQuill
//               theme="snow"
//               value={userInfo.information}
//               onChange={oninformation}
//               placeholder={"Write something awesome..."}
//               modules={modules('t2')}
//               formats={formats}
//             />
//             </div>
//             <br />
//             {isError !== null && <div className="errors"> {isError} </div>}
//             <div className="form-group col-sm-12 text-right">
//               <button type="submit" className="btn btn__theme"> Submit  </button>
//             </div> 
//           </div> 
//         </form>
//       </div>
//     </div>
//   </div>
// </>
// )
// }
// export default Add