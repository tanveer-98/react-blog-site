import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "./TinyMce";

const Write = () => {
  return (
    <div className="App my-[150px] ">
      <div className=" container   mx-auto p-2  opacity-100 rounded-lg">
        <Editor />
      </div>
    </div>
  );
};
export default Write;
