import {toast} from "react-toastify";



export const success=(message,position)=>{
toast.success(message,{
    position:position,
}
)
}

export const Error=(message,position)=>{
    toast.error(message,{
        position:position,
    })
}



