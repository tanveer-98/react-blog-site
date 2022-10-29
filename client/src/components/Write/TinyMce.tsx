import React, { useRef, useState } from "react";
import {useForm} from 'react-hook-form'
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "../Button";
import {postUserBlog} from '../../services/service'
import { postBlog} from '../../store/blog/blogSlice'
import { useAppDispatch,useAppSelector} from '../../store'

// import tinymce from 't'
const TinyEditor = () => {
 
  const [title ,setTitle]  = useState("")
  const [description , setDescription] = useState("");
  const dispatch = useAppDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
    const refinedData = {
      title:data.title,
      description:description
    }
    console.log(refinedData)
    dispatch(postBlog(refinedData));
  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="relative z-0"> 
  
      {/* register your input into the hook by invoking the "register" function */}
  
      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      
      <input  className=" -z-10 font-trispace rounded-md border-2 my-5 border-orange-300" defaultValue="Give a title" {...register("title", {required:true})} />
      
      {/* include validation with required or other standard HTML validation rules */}
      
      {/* errors will return when field validation fails  */}
      {errors.title&& <span className="text-red-500 pl-4">This field is required</span>}
      <div className="">

      <Editor
        
        apiKey={import.meta.env.VITE_TINYMCE_APIKEY}
       
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          // change this value according to your HTML
          image_title: true,
          automatic_uploads: true,
          file_picker_types: "image",
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");

            /*
              Note: In modern browsers input[type="file"] is functional without
              even adding it to the DOM, but that might not be the case in some older
              or quirky browsers like IE, so you might want to add it to the DOM
              just in case, and visually hide it. And do not forget do remove it
              once you do not need it anymore.
            */

            input.onchange = function () {
              var file = this.files[0];

              var reader = new FileReader();
              reader.onload = function () {
                /*
                  Note: Now we need to register the blob in TinyMCEs image blob
                  registry. In the next release this part hopefully won't be
                  necessary, as we are looking to handle it internally.
                */
                var id = "blobid" + new Date().getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(",")[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };

            input.click();
          },

          height: 500,
          menubar: false,
          plugins: [
            "image code",
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help" +
            "link image | code",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={(newText: string) => {
          setDescription(newText)
        }}
      />
      </div>
      <Button type="submit" className="font-trispace border-2 border-transparent hover:border-2 hover:border-orange-400 focus:border-orange-400 active:border-orange-400 transition-all ease-linear duration-200  bg-orange-400 shadow-lg hover:shadow-orange-400 m-2 hover:bg-orange-500"> POST </Button>
 

    </form>
      
      {/* <button onClick={log}>Log editor content</button> */}
    </div>
  );
};

export default TinyEditor
