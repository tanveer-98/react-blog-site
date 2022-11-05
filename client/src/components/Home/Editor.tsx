import React, { useRef, useState } from "react";
import {useForm} from 'react-hook-form'
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "../Button";
import { setUserInterests} from '../../services/service'
import { useAppDispatch,useAppSelector} from '../../store'
import {WithContext as ReactTags} from 'react-tag-input';
import TAGSJSON from './suggestions.json'

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
interface Tag {
 id:string;
 text:string;
}
const initialState =[

] as Tag[]
// import tinymce from 't'
const TinyEditor = () => {

  const [tags,setTags] = useState(initialState)
 
  const [title ,setTitle]  = useState("")
  const [description , setDescription] = useState("");
  const dispatch = useAppDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
    //console.log(tags)
    const resultTags  = tags.map(x=>x.text);
    //console.log(resultTags)
    const refinedData = {
      tags : resultTags
    }
    // //console.log(refinedData)
    setUserInterests(refinedData)
    .then(()=>{
        alert('successfully added')
        window.localStorage.setItem('firstlogin',"false");
    })
    .catch((err)=>{
        alert('request invalid : '+ (err as Error).message)
    })
  }
  const handleDelete = (i:number)=>{
    setTags(tags.filter((tag, index) => index !== i));
  }

  const handleAddition = (tag:any) => {
    setTags([...tags, tag]);

  };
  const handleDrag = (tag : Tag, currPos: number, newPos : number) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  
  const handleTagClick = (index:number) => {
    // //console.log('The tag at index ' + index + ' was clicked');
  };

  const styles ={

   label: "font-bold font-abril text-2xl mr-10"
  }

  // //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="relative z-0  bg-transparent p-10  shadow-neon"> 
  
      {/* register your input into the hook by invoking the "register" function */}
  
      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title" className={`${styles.label}`}>Add Tags</label>
      <div className="my-10">
        <ReactTags
          classNames={{
            tag:"border-2 border-black bg-slate-600 text-white rounded my-2 mr-1 p-1 font-trispace",
            tagInput:"w-[400px]",
            tagInputField:"w-[400px]  mt-5 border-0 active:border-0 focus:border-0",
            selected : " border-0 bg-pink",
            suggestions : " text-white font-trispace  bg-slate-800 rounded-sm p-[10px]"
          }
          }
          tags={tags}
          suggestions={TAGSJSON}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
          allowDragDrop
          placeholder="Type your tag and press Enter"
          allowUnique

        />
      </div>


      <Button type="submit" className="font-trispace border-2 border-transparent hover:border-2 hover:border-orange-400 focus:border-orange-400 active:border-orange-400 transition-all ease-linear duration-200  bg-orange-400 shadow-lg hover:shadow-orange-400 my-2 hover:bg-orange-500"> POST </Button>
        

    </form>
      
      {/* <button onClick={log}>Log editor content</button> */}
    </div>
  );
};

export default TinyEditor
