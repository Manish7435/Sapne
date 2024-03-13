'use client'

import React, { useRef, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const toolbarOptions = {
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image'],
    inline: {
      options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
    },
    blockType: {
      options: ['Normal', 'Blockquote'],
    },
    list: {
      options: ['unordered', 'ordered'],
    },
    textAlign: {
      options: ['left', 'center'],
    },
  };

  const focusEditor = () => {
    if (editorRef.current) {
      editorRef.current.focusEditor();
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" className='w-full h-[40px] mb-4 rounded-md p-2 outline-none text-white bg-[#18181B]' />
      </div>
      <div>
        <input type="text" value={tags} onChange={handleTagsChange} placeholder="Tag.... horror / happy / sad / disappoinment /   seduction / exciting" className='w-full h-[40px] mb-4 rounded-md p-2 text-white outline-none bg-[#18181B]' />
      </div>
      <div className='bg-[#18181B] w-full h-96 overflow-y-auto pt-2 px-2 rounded-lg text-white' onClick={focusEditor}>
        <Editor
          toolbarStyle={{backgroundColor: '#18181B', color: 'black', outline: 'yellow'}}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbar={toolbarOptions}
          ref={editorRef}
          editorStyle={{color: 'white'}}
         
        />
      </div>
      <button onClick={() => console.log({ title, tags, content: convertToRaw(editorState.getCurrentContent()) })} className='text-[#4673CA]'>
        Save
      </button>
    </>
  );
};

export default RichTextEditor;
