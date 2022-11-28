import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "./TinyMce";

const Write = () => {
  return (
    <div className="App my-[150px] ">
      <div className="max-w-sm md:max-w-[768px] lg:max-w-[1024px]   mx-auto p-1   rounded-lg">
        <Editor />
      </div>
    </div>
  );
};
export default Write;
