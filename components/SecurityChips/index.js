// "use client"
// import { useState } from "react"

const items = [{privacy: 'Public', color: '#8B93FF', neutral:"gray"},{privacy: 'Private', color: '#FF6C22',neutral: "gray"}]
export default function SecurityChips({onClickHandler}){

    // const [selectedChip, setSelectedChip] = useState(null);

    // const handleClick = (index)=>{
    //     setSelectedChip(index)
    //     onClickHandler()
    // }

    return(
        <>
         {items.map((item,index)=>{
            return( <div key={item.privacy} onClick={onClickHandler} style={{background:  item.color }} className={`p-4 h-[24px] flex items-center justify-center rounded-md cursor-pointer ${index !==0 ? 'ml-3': ''} `} >{item.privacy}</div>)
        })}
        </>
    )
}
