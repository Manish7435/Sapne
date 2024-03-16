import { connectToDatabase } from "@/lib/mongodb";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function RichTextEditor() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
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
        body: JSON.stringify({title, tag, dream: content})
      })
      if(res.ok){
        console.log('dream stored successfully')
      }
    }catch(e){
      console.log('error while storing dream',e)
    }    
  };

  return (
    <>
      <input
        className="border-none outline-none w-full bg-[#1B1B1B] text-[#444]"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border-none outline-none w-full bg-[#1B1B1B] text-[#444]"
        placeholder="Tag"
        onChange={(e) => setTag(e.target.value)}
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
