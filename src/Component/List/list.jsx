



const CustomList=()=>{
    return(
        
        <ol>
            <h6>List of Items in a bag</h6>
            <li>Textbooks</li>
            <li>Notes</li>
            <li>Pen</li>
            <li>Pencil</li>
            <li>Scale</li>
        </ol>
    )
}
export default CustomList

export const CustomOrderList=(prop)=>{
    const {list}=prop
    return(
        <ol>
<>
{
    list.map((eachValue,index)=>{
        return <li key={index}>{eachValue}</li>
    })
}
</>
</ol>
    )
}











