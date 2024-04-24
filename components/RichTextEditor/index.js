import { connectToDatabase } from "@/lib/mongodb";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getCookie } from "@/utils/cookies";
import SecurityChips from "../SecurityChips";
import TagChips from "../TagChips";
import { useToast } from "../ui/use-toast";


function RichTextEditor() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [securityTag, setSecurityTag] = useState("Private")

  const { toast } = useToast()

  const id = getCookie('user_id')
  const dreamerName = getCookie('user_name')

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleSaveContent = async() => {
    await connectToDatabase()
    try{
      const res = await fetch('/api/dream/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, tag, dream: content, dreamerId: id, security:securityTag , dreamerName})
      })
      if(res.ok){
        toast({
          title: "Dream stored successfully",
        })
        setTitle("")
        setContent("")
        setSecurityTag("")
        setTag("")
      }
      else {
        toast({
          title: "Error",
          description: "All field are required to store the dream"
        });
      }
    }catch(e){
      console.log(e)
    }    
  };

  const handleTagClick = (tag) => {
      setTag(tag)
  };
console.log(tag)
  const handleSecurityTag = (val) => {
    setSecurityTag(val);
  };
  
  return (
    <>
      <div className="flex mb-4">
        <SecurityChips onClickHandler = {handleSecurityTag}/>
      </div>
      <div className="flex mb-4 " >
        <TagChips handleTagClick={handleTagClick}/>
      </div>
      <input
        className="border-none outline-none w-full bg-gray-500  text-[#444]"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className=" rounded-lg overflow-hidden">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="bg-gray-500 h-56 text-[#444] "
          modules={modules}
          formats={formats}
        />
      </div>

       <button className="h-8 flex items-center rounded-md  bg-emerald-500 px-4 py-2 my-4" onClick={handleSaveContent}> Save</button>
  
    </>
  );
}
export default RichTextEditor;
