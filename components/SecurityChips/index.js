
const items = ['Public','Private']
export default function SecurityChips(){
    return(
        <>
         {items.map((item,index)=>{
            return( <div key={item} className={`bg-emerald-400 px-3 py-1 h-[24px] flex items-center justify-center rounded-sm cursor-pointer ${index !==0 ? 'ml-3': ''} `} >{item}</div>)
        })}
        </>
    )
}
