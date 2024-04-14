
const items = [{privacy: 'Public', color: '#8B93FF'},{privacy: 'Private', color: '#FF6C22'}]
export default function SecurityChips({onClickHandler}){
    return(
        <>
         {items.map((item,index)=>{
            return( <div key={item.privacy} onClick={onClickHandler} style={{background: `${item.color}`}} className={`p-4 h-[24px] flex items-center justify-center rounded-md cursor-pointer ${index !==0 ? 'ml-3': ''} `} >{item.privacy}</div>)
        })}
        </>
    )
}
