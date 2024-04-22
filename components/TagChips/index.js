import React from 'react'


const tags = [{tag: 'Happy', color: '#8fce00'},{tag: 'Horror', color: '#F47C74'},{tag: 'Exciting', color: 'orange'},{tag: 'Sad', color: 'gray'},{tag: 'Seduction', color: 'violet'},{tag: 'Disappointment', color: '#E1D5D2'}]
function TagChips({handleTagClick}) {
  return (
    <>
    {tags.map((item,index)=>{
            return( <div key={item.tag}  style={{background: `${item.color}`}} className={`p-4 h-[24px] flex items-center justify-center rounded-md cursor-pointer ${index !==0 ? 'ml-3': ''} `} onClick={handleTagClick} >{item.tag}</div>)
        })}
    </>
  )
}

export default TagChips