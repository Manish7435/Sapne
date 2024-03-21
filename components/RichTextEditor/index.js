import { connectToDatabase } from "@/lib/mongodb";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getCookie } from "@/utils/cookies";
import SecurityChips from "../SecurityChips";

function RichTextEditor() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  const id = getCookie('user_id')

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
        body: JSON.stringify({title, tag, dream: content, dreamerId: id})
      })
      if(res.ok){
        console.log('dream stored successfully')
      }
    }catch(e){
      console.log('error while storing dream',e)
    }    
  };

  const handleClick = (event) => {
    if (event.target.tagName === 'DIV') {
      const textContent = event.target.textContent;
      setTag(textContent)
    }
  };

  return (
    <>
     <div className="flex mb-4" onClick={handleClick}>
        {/* <div className="bg-emerald-400 px-3 py-1 h-[24px] flex items-center justify-center rounded-sm cursor-pointer" >
          Public
        </div>
        <div className="bg-orange-400 px-3 py-1 rounded-md ml-4 cursor-pointer">
          Private
        </div> */}
<SecurityChips/>
      </div>
      <div className="flex mb-4" onClick={handleClick}>
        <div className="bg-emerald-400 px-3 py-1 rounded-md cursor-pointer" >
          Happy
        </div>
        <div className="bg-red-500 px-3 py-1 rounded-md ml-4 cursor-pointer">
          Horror
        </div>
        <div className="bg-orange-400 px-3 py-1 rounded-md ml-4 cursor-pointer">
          Exciting
        </div>
        <div className="bg-gray-500 px-3 py-1 rounded-md ml-4 cursor-pointer">
          Sad
        </div>
        <div className="bg-indigo-400 px-3 py-1 rounded-md ml-4 cursor-pointer">
          Seduction
        </div>
        <div className="bg-green-100 px-3 py-1 rounded-md ml-4 cursor-pointer">
          Disappointment
        </div>
      </div>
      <input
        className="border-none outline-none w-full bg-[#1B1B1B] text-[#444]"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className=" rounded-lg overflow-hidden">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="border-none bg-[#1B1B1B] h-96 text-[#444] "
          modules={modules}
          formats={formats}
        />
      </div>
      <button
        onClick={handleSaveContent}
        className="bg-slate-600 rounded-lg px-3 py-1 mt-4"
      >
        Save Content
      </button>
    </>
  );
}
export default RichTextEditor;
